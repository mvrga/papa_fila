import { GerenciadorRestaurante } from '@/lib/GerenciadorRestaurante';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const gerenciadores = new Map<string, GerenciadorRestaurante>();

export const getGerenciador = async (restauranteId: string) => {
  try {
    if (!gerenciadores.has(restauranteId)) {
      const restaurante = await prisma.restaurante.findUnique({
        where: { id: restauranteId },
        select: { 
          tempoMedioPreparo: true,
          estacoesPreparo: true,
          capacidade: true 
        }
      });

      if (!restaurante) throw new Error("Restaurante não encontrado");

      gerenciadores.set(restauranteId, new GerenciadorRestaurante({
        id: restauranteId,
        tempoMedioPreparo: restaurante.tempoMedioPreparo || 15,
        estacoesPreparo: restaurante.estacoesPreparo || 2,
        capacidade: restaurante.capacidade || 50
      }));
    }

    return gerenciadores.get(restauranteId)!;
  } catch (error) {
    console.error(`Error fetching Gerenciador for Restaurante ID ${restauranteId}:`, error);
    throw new Error("Failed to fetch Gerenciador");
  }
};

export const getRestaurantes = async () => {
  try {
    const restaurantes = await prisma.restaurante.findMany();
    return restaurantes;
  } catch (error) {
    console.error("Error fetching restaurantes:", error);
    throw new Error("Failed to fetch restaurantes");
  }
};