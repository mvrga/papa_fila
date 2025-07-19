import type { CommandStatus } from './command-status';

export interface Command {
  id: string;
  itens: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  clientName: string;
  phone?: string;
  email?: string;
  price: number;
  date: string;
  status: CommandStatus;
}
