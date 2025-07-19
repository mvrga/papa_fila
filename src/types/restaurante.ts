export interface Restaurante {
  id: string;
  nome: string;
  tempo_espera: number; // Tempo de espera em minutos
  taxa_ocupacao: number; // Taxa de ocupação do restaurante (0 a 1)
  avaliacao: number; // Avaliação média do restaurante (0 a 5)
}

export interface RestaurantePriorizado extends Restaurante {
  prioridade: number; // Prioridade calculada com base em critérios específicos
}

export interface RestauranteCardProps {
  restaurante: RestaurantePriorizado;
  onClick?: () => void; // Função opcional para lidar com cliques
}