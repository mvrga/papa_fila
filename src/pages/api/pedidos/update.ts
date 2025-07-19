// src/pages/api/pedidos/update.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
      const { pedidoId, tempoPreparo } = req.body;
  
      const pedido = await prisma.pedido.update({
        where: { id: pedidoId },
        data: { status: "entregue" },
        include: { restaurante: true }
      });
  
      const gerenciador = await getGerenciador(pedido.restauranteId);
      gerenciador.finalizarPedido(tempoPreparo);
  
      // Atualize a UI via Supabase Realtime
      await supabase.channel('pedidos')
        .send({
          type: 'broadcast',
          event: 'pedido-finalizado',
          payload: { restauranteId: pedido.restauranteId }
        });
  
      res.status(200).json({ success: true });
    }
  }