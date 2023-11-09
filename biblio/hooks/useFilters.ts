import { useEffect, useState } from 'react';
import { filterByProperty } from '@/utils/filterByProperty';

type Filter = {
  property: string; // Property to filter
  state: string; // Filter state
};

// Custom hook to filter data by multiple filters
export const useFilters = (
  initialState: any[], // Initial data
  filters: Filter[], // Filters array
  keys: string[] // Properties to search
) => {
  const [filteredData, setFilteredData] = useState<any[]>(initialState);
  const [searchTerm, setSearchTerm] = useState('');

  // Dependency list based on filter states
  const filterStates = filters.map((filter) => filter.state).concat(searchTerm);

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

    // Search filter
    if (searchTerm) {
      updatedData = updatedData.filter((item) => {
        return keys.some((key) => {
          const value = item[key];

          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchTerm.toLowerCase());
          }

          return false;
        });
      });
    }

    setFilteredData(updatedData);
  }, filterStates);

  return { filteredData, searchTerm, setSearchTerm };
};
