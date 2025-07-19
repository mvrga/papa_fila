import { prisma } from '@/lib/db';
import { getGerenciador } from './restauranteService';
import { supabase } from '@/lib/supabase';

type CriarPedidoParams = {
  clienteId: string;
  restauranteId: string;
  itens: { id: string; nome: string; quantidade: number; preco: number }[];
  isFastPass?: boolean;
};

export const criarPedido = async ({
  clienteId,
  restauranteId,
  itens,
  isFastPass = false
}: CriarPedidoParams) => {
  // 1. Validação inicial
  if (itens.length === 0) throw new Error('Nenhum item no pedido');

  // 2. Calcula valor total
  const valorTotal = itens.reduce((total, item) => 
    total + (item.preco * item.quantidade), 0);

  // 3. Verifica disponibilidade de FastPass
  const gerenciador = await getGerenciador(restauranteId);
  
  if (isFastPass) {
    const fastPassDisponiveis = gerenciador.calcularFastPass(false);
    if (fastPassDisponiveis <= 0) {
      throw new Error('FastPass indisponíveis no momento');
    }
  }

  // 4. Cria o pedido no banco (com transação)
  const [novoPedido] = await prisma.$transaction([
    prisma.pedido.create({
      data: {
        clienteId,
        restauranteId,
        itens,
        valorTotal,
        isPriority: isFastPass,
        status: 'pendente',
        prioridade: isFastPass ? 
          await calcularPrioridadePedido(restauranteId, clienteId) : 
          null
      },
      include: {
        restaurante: {
          select: { nome: true, fila: true }
        }
      }
    }),

    // Atualiza histórico do cliente
    prisma.historicoUsuario.upsert({
      where: {
        usuarioId_restauranteId: { usuarioId: clienteId, restauranteId }
      },
      create: {
        usuarioId: clienteId,
        restauranteId,
        visitas: 1
      },
      update: {
        visitas: { increment: 1 },
        ultimaVisita: new Date()
      }
    })
  ]);

  // 5. Atualiza fila no gerenciador
  gerenciador.adicionarPedido();

  // 6. Notificação em tempo real
  await supabase
    .channel(`restaurante:${restauranteId}`)
    .send({
      type: 'broadcast',
      event: 'novo-pedido',
      payload: {
        pedidoId: novoPedido.id,
        isFastPass,
        tempoEstimado: calcularTempoEspera(gerenciador)
      }
    });

  return novoPedido;
};

// Função auxiliar para calcular prioridade
const calcularPrioridadePedido = async (
  restauranteId: string,
  clienteId: string
) => {
  const [restaurante, historico] = await Promise.all([
    prisma.restaurante.findUnique({
      where: { id: restauranteId },
      include: { fila: true }
    }),
    prisma.historicoUsuario.findUnique({
      where: {
        usuarioId_restauranteId: { usuarioId: clienteId, restauranteId }
      }
    })
  ]);

  if (!restaurante?.fila) return 0;

  return (
    (restaurante.fila.tempoEstimado * 0.6) +
    (restaurante.fila.tamanho / restaurante.capacidade * 0.3) -
    ((historico?.visitas || 0) * 0.1)
  );
};

// Função auxiliar para estimar tempo
const calcularTempoEspera = (gerenciador: GerenciadorRestaurante) => {
  const pedidosNaFrente = gerenciador.filaAtual;
  const tempoMedio = gerenciador.tempoMedioAtual;
  return Math.round((pedidosNaFrente * tempoMedio) / gerenciador.estacoes);
};