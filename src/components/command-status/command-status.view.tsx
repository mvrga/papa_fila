// Utils
import { cn } from '@/lib/utils';

// Types
import type { CommandStatus as TypeCommandStatus } from '@/types/command-status';

interface BadgeByStatue {
  color: string;
  title: string;
}

interface CommandStatusProps {
  status: TypeCommandStatus;
}

export function CommandStatus({ status }: CommandStatusProps) {
  const badgeByStatus: Record<TypeCommandStatus, BadgeByStatue> = {
    pending: {
      color: 'bg-slate-400',
      title: 'Pendente',
    },
    delivered: {
      color: 'bg-emerald-500',
      title: 'Entregue',
    },
    processing: {
      color: 'bg-amber-500',
      title: 'Em preparo',
    },
  };

  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        className={cn('w-2 h-2 rounded-full', badgeByStatus[status].color)}
      />

      <span className="font-medium text-muted-foreground">
        {badgeByStatus[status].title}
      </span>
    </div>
  );
}
