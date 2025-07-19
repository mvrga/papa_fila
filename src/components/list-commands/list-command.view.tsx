'use client';

import { useState } from 'react';

// Components
import { CommandCard, type Command } from '@/components/command=card';

export function ListCommand() {
  const commandsExamples: Command[] = [
    {
      id: '1',
      itens: [
        { nome: 'Risotto de Camarão', quantidade: 1, preco: 38.5 },
        { nome: 'Vinho Tinto', quantidade: 1, preco: 35.0 },
      ],
      date: '2023-10-01 12:30',
      status: 'pending',
    },
    {
      id: '2',
      itens: [
        { nome: 'Salada Caesar', quantidade: 1, preco: 22.0 },
        { nome: 'Suco Natural', quantidade: 1, preco: 8.5 },
      ],
      date: '2023-10-01 12:30',
      status: 'pending',
    },
    {
      id: '3',
      itens: [
        { nome: 'Hambúrguer Artesanal', quantidade: 2, preco: 25.9 },
        { nome: 'Batata Frita', quantidade: 1, preco: 12.5 },
      ],
      date: '2023-10-01 12:30',
      status: 'preparing',
    },
    {
      id: '4',
      itens: [
        { nome: 'Pizza Margherita', quantidade: 1, preco: 45.0 },
        { nome: 'Cerveja Artesanal', quantidade: 2, preco: 12.0 },
      ],
      date: '2023-10-01 12:30',
      status: 'ready',
    },
  ] as const;

  const [commands, setCommands] = useState(commandsExamples);

  const peddingCommands = commands.filter(
    (command) => command.status === 'pending'
  );
  const preparingCommands = commands.filter(
    (command) => command.status === 'preparing'
  );
  const readyCommands = commands.filter(
    (command) => command.status === 'ready'
  );

  function handleNextStep(command: Command) {
    const nextStep = {
      pending: 'preparing',
      preparing: 'ready',
    } as const;

    const updatedCommands = commands.map((cmd) =>
      cmd.id === command.id
        ? { ...cmd, status: nextStep[cmd.status as keyof typeof nextStep] }
        : cmd
    );

    setCommands(updatedCommands);
  }

  function handleCancelCommmand(commandId: string) {
    const updatedCommands = commands.filter((cmd) => cmd.id !== commandId);
    setCommands(updatedCommands);
  }

  return (
    <div className="mx-auto container px-4 mt-6">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            {peddingCommands.length} Pedidos pendentes
          </h1>

          <div className="flex gap-4 overflow-auto">
            {peddingCommands.map((command) => (
              <CommandCard
                key={command.id}
                command={command}
                onClick={() => handleNextStep(command)}
                onCancel={() => handleCancelCommmand(command.id)}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            {preparingCommands.length} Pedidos em preparação
          </h1>

          <div className="flex gap-4 overflow-auto">
            {preparingCommands.map((command) => (
              <CommandCard
                key={command.id}
                command={command}
                onClick={() => handleNextStep(command)}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">
            {readyCommands.length} Pedidos prontos para entrega
          </h1>

          <div className="flex gap-4 overflow-auto">
            {readyCommands.map((command) => (
              <CommandCard key={command.id} command={command} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
