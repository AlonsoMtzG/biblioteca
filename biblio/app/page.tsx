'use client';
import { CategoryProvider } from '@/context/CategoryProvider';
import { DataProvider } from '@/context/DataProvider';

import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';

export default function Home() {
  return (
    <DataProvider>
      <CategoryProvider>
        <div className="w-full h-full flex gap-12">
          <Sidebar />
          <Table />
        </div>
      </CategoryProvider>
    </DataProvider>
  );
}
