'use client';
import { FiltersProvider } from '@/context/FiltersProvider';
import { DataProvider } from '@/context/DataProvider';

import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';

export default function Home() {
  return (
    <DataProvider>
      <FiltersProvider>
        <div className="w-full h-full flex gap-12">
          <Sidebar />
          <Table />
        </div>
      </FiltersProvider>
    </DataProvider>
  );
}
