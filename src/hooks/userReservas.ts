import { prisma } from '@/prisma/client';
import { calculatePriority } from '@/utils/calculatePriority';

export const criarReserva = async (
  usuarioId: string,
  restauranteId: string,
  horario: Date,
  isPriority: boolean = false
) => {
  // 1. Busca dados completos do restaurante
  const restaurante = await prisma.restaurante.findUnique({
    where: { id: restauranteId },
    include: { 
      fila: true,
      historicoUsuarios: {
        where: { usuarioId },
        take: 1
      }
    }
  });

  if (!restaurante) {
    throw new Error('Restaurante não encontrado');
  }

  // 2. Calcula prioridade se for reserva premium
  const prioridade = isPriority 
    ? calculatePriority({
        tempoEspera: restaurante.fila?.tempoEstimado || 0,
        taxaOcupacao: (restaurante.fila?.tamanho || 0) / restaurante.capacidade,
        visitasUsuario: restaurante.historicoUsuarios[0]?.visitas || 0
      })
    : null;

  // 3. Cria reserva com transação atômica
  const [reserva] = await prisma.$transaction([
    prisma.reserva.create({
      data: {
        usuarioId,
        restauranteId,
        horario,
        status: isPriority ? 'confirmada' : 'pendente',
        prioridade
      },
      include: {
        restaurante: {
          include: { fila: true }
        }
      }
    }),
    
    // Atualiza histórico do usuário
    prisma.historicoUsuario.upsert({
      where: {
        usuarioId_restauranteId: {
          usuarioId,
          restauranteId
        }
      },
      create: {
        usuarioId,
        restauranteId,
        visitas: 1
      },
      update: {
        visitas: { increment: 1 },
        ultimaVisita: new Date()
      }
    })
  ]);

  return reserva;
};

export const getReservasUsuario = async (usuarioId: string) => {
  return await prisma.reserva.findMany({
    where: { 
      usuarioId,
      horario: { gte: new Date() } // Só reservas futuras
    },
    orderBy: { 
      horario: 'asc' // Ordena da mais próxima
    },
    include: {
      restaurante: {
        select: {
          id: true,
          nome: true,
          categorias: true,
          fila: {
            select: {
              tempoEstimado: true,
              tamanho: true
            }
          }
        }
      }
    }
  });
};

// Função adicional útil
export const cancelarReserva = async (reservaId: string, usuarioId: string) => {
  return await prisma.reserva.update({
    where: { 
      id: reservaId,
      usuarioId // Garante que só o dono pode cancelar
    },
    data: { 
      status: 'cancelada',
      prioridade: null // Remove prioridade se existir
    }
  });
};