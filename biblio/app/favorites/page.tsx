'use client';
import { Sidebar } from '@/components/Sidebar';
import { Table } from '@/components/Table';
import { DataContext } from '@/context/DataProvider';
import { FiltersProvider } from '@/context/FiltersProvider';
import { useContext } from 'react';

export default function Favorites() {
  const { favorites } = useContext(DataContext);

  return (
    <FiltersProvider>
      <div className="w-full h-full flex gap-12">
        <Sidebar />
        <Table data={favorites} />
      </div>
    </FiltersProvider>
  );
}
