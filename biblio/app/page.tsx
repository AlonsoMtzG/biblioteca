'use client';
import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';
import { DataProvider } from '@/context/DataProvider';

export default function Home() {
  return (
    <DataProvider>
      <div className="w-full h-full flex gap-12">
        <Sidebar />
        <Table />
      </div>
    </DataProvider>
  );
}
