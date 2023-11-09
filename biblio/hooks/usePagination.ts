import { useState } from 'react';

interface UsePaginationProps {
  itemsPerPage: number;
  data: any[];
}

interface UsePaginationReturn {
  currentData: any[];
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export const usePagination = ({
  itemsPerPage,
  data,
}: UsePaginationProps): UsePaginationReturn => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  return { currentData, currentPage, totalPages, setPage };
};
