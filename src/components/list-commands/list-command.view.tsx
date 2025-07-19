'use client';

import { useState } from 'react';
import { ArrowRight, Search, Trash } from 'lucide-react';

import { ptBR } from 'date-fns/locale';
import { formatDistanceToNow } from 'date-fns';

// Types
import type { Command } from '@/types/command';

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
import { StatCard } from '../stat-card/stat-card.view';
import { CommandStatus } from '../command-status/command-status.view';
import { CommandDetails } from '../command-details/command-details.view';
import { Pagination } from '../pagination/pagination.view';

export function ListCommand() {
  const commandsExamples: Command[] = [
    {
      id: '1',
      itens: [
        { name: 'Risotto de Camarão', quantity: 1, price: 38.5 },
        { name: 'Vinho Tinto', quantity: 1, price: 35.0 },
      ],
      clientName: 'Thiago Santos',
      price: 300,
      date: '2025-10-01 12:30',
      email: 'thiago@gmail.com',
      phone: '11999999999',
      status: 'pending',
    },
    {
      id: '2',
      itens: [
        { name: 'Salada Caesar', quantity: 1, price: 250 },
        { name: 'Suco Natural', quantity: 1, price: 50 },
      ],
      clientName: 'Maria Oliveira',
      price: 300,
      email: 'maria@gmail.com',
      phone: '11999339999',
      date: '2023-10-01 12:30',
      status: 'pending',
    },
    {
      id: '3',
      itens: [
        { name: 'Hambúrguer Artesanal', quantity: 2, price: 25.9 },
        { name: 'Batata Frita', quantity: 1, price: 12.5 },
      ],
      clientName: 'João Silva',
      price: 30,
      email: 'joao@gmail.com',
      phone: '2132412312',
      date: '2023-10-01 12:30',
      status: 'processing',
    },
    {
      id: '4',
      itens: [
        { name: 'Pizza Margherita', quantity: 1, price: 45.0 },
        { name: 'Cerveja Artesanal', quantity: 2, price: 12.0 },
      ],
      clientName: 'Ana Costa',
      email: 'ana@gmail.com',
      phone: '2132412312',
      price: 124,
      date: '2023-10-01 12:30',
      status: 'delivered',
    },
  ] as const;

  const [commands, setCommands] = useState(commandsExamples);

  function handleNextStep(commandSelected: Command) {
    const nextStatus = {
      pending: 'processing',
      processing: 'delivered',
    } as const;

    const updatedCommands = commands.map((command) => {
      if (command.id === commandSelected.id) {
        return {
          ...command,
          status: nextStatus[command.status as keyof typeof nextStatus],
        };
      }
      return command;
    });

    setCommands(updatedCommands);
  }

  function handleCancelCommand(commandId: string) {
    const updatedCommands = commands.filter(
      (command) => command.id !== commandId
    );
    setCommands(updatedCommands);
  }

  return (
    <div className="mx-auto container px-4 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Pedidos pendentes"
          stat={20}
          tootipTitle="Pedidos que foram recebidos e ainda não começaram a ser preparados."
        />

        <StatCard
          title="Pedidos em preparo"
          stat={17}
          tootipTitle="Pedidos que já estão sendo preparados pela cozinha."
        />

        <StatCard
          title="Pedidos prontos"
          stat={32}
          tootipTitle="Pedidos prontos para serem entregues ou levados até a mesa."
        />

        <StatCard
          title="Pedidos de hoje"
          stat={102}
          tootipTitle="Total de pedidos feitos hoje, incluindo todos os status."
        />
      </div>

      <Table className="border border-border rounded-2xl">
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
          {commands.map((command) => (
            <TableRow key={command.id}>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </DialogTrigger>

                  <CommandDetails command={command} />
                </Dialog>
              </TableCell>

              <TableCell className="font-mono text-xs font-medium">
                {command.id}
              </TableCell>

              <TableCell className="text-muted-foreground">
                {formatDistanceToNow(command.date, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </TableCell>

              <TableCell>
                <CommandStatus status={command.status} />
              </TableCell>

              <TableCell className="font-medium">
                {command.clientName}
              </TableCell>

              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">
                    {command.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {command.itens.length} produto(s)
                  </span>
                </div>
              </TableCell>

              <TableCell>
                {command.status === 'processing' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleNextStep(command)}
                  >
                    Finalizar
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                )}

                {command.status === 'pending' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleNextStep(command)}
                  >
                    Aceitar
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                )}
              </TableCell>

              <TableCell>
                {command.status === 'pending' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCancelCommand(command.id)}
                    className="text-red-300"
                  >
                    Cancelar
                    <Trash className="mr-2 h-3 w-3" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4">
        <Pagination
          onPageChange={() => {}}
          pageIndex={0}
          perPage={10}
          totalCount={commands.length}
        />
      </div>
    </div>
  );
}
