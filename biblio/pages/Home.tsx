import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';

export const HomeBook = () => {
  return (
    <div className="flex justify-center">
      <Sidebar />
      <Table />
    </div>
  );
};
