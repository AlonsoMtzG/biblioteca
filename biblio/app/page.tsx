'use client';
import { FiltersProvider } from '@/context/FiltersProvider';

import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';
import { useContext } from 'react';
import { DataContext } from '@/context/DataProvider';

export default function Home() {
  const { dataState } = useContext(DataContext);

  return (
    <FiltersProvider>
      <div className="w-full h-full flex gap-12">
        <Sidebar />
        <Table data={dataState} showActions />
      </div>
    </FiltersProvider>
  );
}
