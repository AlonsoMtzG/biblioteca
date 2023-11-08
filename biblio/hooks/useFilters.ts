import { useEffect, useState } from 'react';
import { filterByProperty } from '@/utils/filterByProperty';

type Filter = {
  property: string;
  state: string;
};

// Custom hook to filter data by multiple filters
export const useFilters = (initialState: any[], filters: Filter[]) => {
  const [filteredData, setFilteredData] = useState<any[]>(initialState);

  // Dependency list based on filter states
  const filterStates = filters.map((filter) => filter.state);

  // Filter data by filters
  useEffect(() => {
    let updatedData = initialState;

    filters.forEach((filter) => {
      if (filter.state !== 'Todos') {
        updatedData = filterByProperty(
          filter.property,
          filter.state,
          updatedData
        );
      }
    });

    setFilteredData(updatedData);
  }, filterStates);

  return { filteredData };
};
