// Utils
import { cn } from '@/lib/utils';

// Components
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { HelpCircle, type LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  subtitle?: string;
  stat: number;
  icon?: LucideIcon;
  tootipTitle: string;
}

export function StatCard({
  title,
  subtitle,
  stat,
  tootipTitle,
}: StatCardProps) {
  return (
    <Card className="shadow-none">
      <CardHeader
        className={cn(
          'flex flex-row items-center justify-between space-y-0 pb-3',
          subtitle && 'h-max pb-3 max-sm:pb-2'
        )}
      >
        <div className="w-full">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-sm text-gray-500">{title}</CardTitle>

            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="size-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tootipTitle}</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <CardDescription className="text-2xl font-bold text-gray-700">
            {stat}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
