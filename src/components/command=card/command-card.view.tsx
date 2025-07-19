import { Clock } from 'lucide-react';
import { format } from 'date-fns';

// Types
import type { CommandStatus } from '@/types/command-status';

// Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export interface Command {
  id: string;
  itens: Array<{
    nome: string;
    quantidade: number;
    preco: number;
  }>;
  date: string;
  status: CommandStatus;
}

interface CommandCardProps {
  command: Command;
  onClick?: () => void;
  onCancel?: () => void;
}

export function CommandCard({ command, onClick, onCancel }: CommandCardProps) {
  const statusBadge = {
    pending: {
      className: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
      label: 'Pendente',
    },
    preparing: {
      className: 'bg-primary/10 text-primary border-primary/20',
      label: 'Preparando',
    },
    ready: {
      className: 'bg-green-500/10 text-green-700 border-green-500/20',
      label: 'Pronto',
    },
    delivered: {
      className: 'bg-gray-500/10 text-gray-700 border-gray-500/20',
      label: 'Entregue',
    },
  };

  const buttonByStatus = {
    pending: 'Aceitar',
    preparing: 'Finalizar Preparação',
  };

  return (
    <Card className="min-w-72 hover:shadow-lg transition-shadow duration-200 p-4 gap-1">
      <CardHeader className="px-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">
            Pedido {'\n'}
            {command.id}
          </CardTitle>
          <Badge
            className={statusBadge[command.status].className}
            variant="outline"
          >
            {statusBadge[command.status].label}
          </Badge>
        </div>
      </CardHeader>

      <div className="flex-1 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          {command.itens.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-sm">
                {item.quantidade}x {item.nome}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {format(command.date, 'hh:mm')}
          </div>
        </div>

        <div className="mt-auto flex gap-2 justify-end">
          {onCancel && (
            <Button
              onClick={onCancel}
              variant="destructive"
              size="sm"
              className="hover:bg-red-500/80 cursor-pointer"
            >
              Cancelar
            </Button>
          )}

          {command.status !== 'ready' && (
            <Button
              onClick={onClick}
              variant="outline"
              size="sm"
              className="hover:bg-primary/10 cursor-pointer"
            >
              {buttonByStatus[command.status]}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
