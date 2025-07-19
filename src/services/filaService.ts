import { PrismaClient, Pedido } from '@prisma/client';

const prisma = new PrismaClient();

export const processarFila = async (restauranteId: string) => {
  try {
    // 1. Fetch pending orders with priority sorting
    const pedidos: Pedido[] = await prisma.pedido.findMany({
      where: { 
        restauranteId,
        status: "pendente"
      },
      orderBy: [
        { isPriority: "desc" },  // Priority orders first
        { prioridade: "desc" },  // Sort by priority level
        { createdAt: "asc" }     // FIFO for ties
      ],
      take: 5 // Limit to 5 orders per processing
    });

    // 2. Update the top 3 orders to "preparing"
    if (pedidos.length > 0) {
      await prisma.pedido.updateMany({
        where: { 
          id: { 
            in: pedidos.slice(0, 3).map((p: Pedido) => p.id) // Explicitly type 'p' as 'Pedido'
          }
        },
        data: { 
          status: "preparando",
          updatedAt: new Date() // Explicitly set 'updatedAt'
        }
      });
    }
  } catch (error) {
    console.error("Error processing queue:", error);
  }
};