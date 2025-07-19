// Components
import { HeaderView } from '@/components';
import { ListCommand } from '@/components/list-commands/index';

export default function Dashboard() {
  return (
    <div className="min-h-screen pt-[60px]">
      <HeaderView />

      <ListCommand />
    </div>
  );
}
