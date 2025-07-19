export interface Reserva {
  id: string;
  restaurante_id: string;
  usuario_id: string;
  data_hora: Date;
  numero_pessoas: number;
  status: 'pendente' | 'confirmada' | 'cancelada';
  created_at: Date;
  updated_at: Date;
}

export interface ReservaPriorizada extends Reserva {
  prioridade: number; // Prioridade calculada com base em critérios específicos
}