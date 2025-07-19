import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Types
import type { Command } from '@/types/command';

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { CommandStatus } from '../command-status';

interface CommandDetailsProps {
  command: Command;
}

export function CommandDetails({ command }: CommandDetailsProps) {
  return (
    <DialogContent className="sm:max-w-[520px]">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          Pedido: {command.id}
        </DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <CommandStatus status={command.status} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="text-right">{command.clientName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="text-right">{command.phone}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="text-right">{command.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Criado há</TableCell>
              <TableCell className="text-right">
                {formatDistanceToNow(command.date, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {command.itens.map((orderItem, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{orderItem.name}</TableCell>
                  <TableCell className="text-right">
                    {orderItem.quantity}
                  </TableCell>
                  <TableCell className="text-right">
                    {orderItem.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </TableCell>
                  <TableCell className="text-right">
                    {(orderItem.price * orderItem.quantity).toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                      }
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                {(300 / 100).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
