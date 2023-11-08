import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';

export default function Home() {
  return (
    <div className="w-full h-full flex gap-12">
      <Sidebar />
      <Table />
    </div>
  );
}
