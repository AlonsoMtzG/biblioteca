import { useEffect, useState } from 'react';

type Filter = {
  property: string; // Property to filter
  state: string; // Filter state
};

// Custom hook to filter data by multiple filters
export const useFilters = (
  initialState: any[], // Initial data
  filters: Filter[], // Filters array
  keys: string[], // Properties to search
  searchTerm: string // Search term
) => {
  const [filteredData, setFilteredData] = useState<any[]>(initialState);

  useEffect(() => {
    // Update filtered data when initial data changes (change in the data context)
    setFilteredData(initialState);
  }, [initialState]);

  // Dependency list based on filter states
  const filterStates = filters.map((filter) => filter.state).concat(searchTerm);

  // Filter data by filters
  useEffect(() => {
    let data = initialState;

    // Apply filters
    data = filters.reduce((filtered, filter) => {
      return filter.state !== 'Todos'
        ? filtered.filter((item) => item[filter.property] === filter.state)
        : filtered;
    }, data);

    // Apply search term
    if (searchTerm) {
      data = data.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    setFilteredData(data);
  }, filterStates);

  return { filteredData };
};
