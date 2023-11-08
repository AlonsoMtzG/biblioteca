import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';

export const HomeBook = () => {
  return (
    <div className="flex gap-12">
      <Sidebar />
      <Table />
    </div>
  );
};
