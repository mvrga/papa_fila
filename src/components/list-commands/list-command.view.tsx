'use client';

import { ArrowRight, Loader2, Search } from 'lucide-react';

import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';
import { CommandStatus } from '../command-status/command-status.view';

export function ListCommand() {
  // const commandsExamples = [
  //   {
  //     id: '1',
  //     itens: [
  //       { nome: 'Risotto de Camarão', quantidade: 1, preco: 38.5 },
  //       { nome: 'Vinho Tinto', quantidade: 1, preco: 35.0 },
  //     ],
  //     date: '2023-10-01 12:30',
  //     status: 'pending',
  //   },
  //   {
  //     id: '2',
  //     itens: [
  //       { nome: 'Salada Caesar', quantidade: 1, preco: 22.0 },
  //       { nome: 'Suco Natural', quantidade: 1, preco: 8.5 },
  //     ],
  //     date: '2023-10-01 12:30',
  //     status: 'pending',
  //   },
  //   {
  //     id: '3',
  //     itens: [
  //       { nome: 'Hambúrguer Artesanal', quantidade: 2, preco: 25.9 },
  //       { nome: 'Batata Frita', quantidade: 1, preco: 12.5 },
  //     ],
  //     date: '2023-10-01 12:30',
  //     status: 'processing',
  //   },
  //   {
  //     id: '4',
  //     itens: [
  //       { nome: 'Pizza Margherita', quantidade: 1, preco: 45.0 },
  //       { nome: 'Cerveja Artesanal', quantidade: 2, preco: 12.0 },
  //     ],
  //     date: '2023-10-01 12:30',
  //     status: 'delivered',
  //   },
  // ] as const;

  // function handleNextStep(command: Command) {
  //   const nextStep = {
  //     pending: 'preparing',
  //     preparing: 'ready',
  //   } as const;

  //   const updatedCommands = commands.map((cmd) =>
  //     cmd.id === command.id
  //       ? { ...cmd, status: nextStep[cmd.status as keyof typeof nextStep] }
  //       : cmd
  //   );

  //   setCommands(updatedCommands);
  // }

  // function handleCancelCommmand(commandId: string) {
  //   const updatedCommands = commands.filter((cmd) => cmd.id !== commandId);
  //   setCommands(updatedCommands);
  // }

  return (
    <div className="mx-auto container px-4 mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[64px]"></TableHead>
            <TableHead className="w-[140px]">Indentificador</TableHead>
            <TableHead className="w-[180px]">Realizad há</TableHead>
            <TableHead className="w-[140px]">Status</TableHead>
            <TableHead className="min-w-[250px]">Cliente</TableHead>
            <TableHead className="w-[140px]">Total do pedido</TableHead>
            <TableHead className="w-[164px]"></TableHead>
            <TableHead className="w-[16px]"></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </DialogTrigger>

                {/* <OrderDetails
                  open={isOrderDetailsOpen}
                  orderId={order.orderId}
                /> */}
              </Dialog>
            </TableCell>

            <TableCell className="font-mono text-xs font-medium">
              dsadsadsjkdsjagdjsa
            </TableCell>

            <TableCell className="text-muted-foreground">
              {formatDistanceToNow(new Date(), {
                locale: ptBR,
                addSuffix: true,
              })}
            </TableCell>

            <TableCell>
              <CommandStatus status="pending" />
            </TableCell>

            <TableCell className="font-medium">Thiago Santos</TableCell>

            <TableCell>
              <div className="flex flex-col gap-0.5">
                <span className="font-medium">
                  {(1500 / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
                <span className="text-xs text-muted-foreground">
                  3 produto(s)
                </span>
              </div>
            </TableCell>

            <TableCell>
              <Button variant="outline" size="sm">
                Em entrega
                {!new Date() ? (
                  <Loader2 className="ml-2 h-3 w-3 animate-spin" />
                ) : (
                  <ArrowRight className="ml-2 h-3 w-3" />
                )}
              </Button>

              {/* {order.status === 'delivering' && (
                <Button
                  variant="outline"
                  size="xs"
                  disabled={isDeliveringOrder}
                  onClick={() => deliverOrderFn({ orderId: order.orderId })}
                >
                  Entregue
                  {isDeliveringOrder ? (
                    <Loader2 className="ml-2 h-3 w-3 animate-spin" />
                  ) : (
                    <ArrowRight className="ml-2 h-3 w-3" />
                  )}
                </Button>
              )}

              {order.status === 'pending' && (
                <Button
                  variant="outline"
                  size="xs"
                  disabled={isApprovingOrder}
                  onClick={() => approveOrderFn({ orderId: order.orderId })}
                >
                  Aprovar
                  {isApprovingOrder ? (
                    <Loader2 className="ml-2 h-3 w-3 animate-spin" />
                  ) : (
                    <ArrowRight className="ml-2 h-3 w-3" />
                  )}
                </Button>
              )} */}
            </TableCell>

            <TableCell>
              <Button variant="ghost" size="sm">
                {!new Date() ? (
                  <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                ) : (
                  <ArrowRight className="mr-2 h-3 w-3" />
                )}
                Cancelar
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
