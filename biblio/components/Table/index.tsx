import { useContext, useState } from 'react';

import { FiltersContext } from '@/context/FiltersProvider';
import { DataContext } from '@/context/DataProvider';

import { statusOptions, tableColumns } from '@/constants';
import { Book, StatusSelect } from '@/interfaces';
import { useFilters } from '@/hooks/useFilters';

import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';
import { BookRegister } from '../BookRegister';
import { BookRow } from './BookRow';
import { useBookActions } from '@/hooks/useBookActions';
import { BookModal } from './BookModal';

interface Props {
  data: Book[];
  showActions?: boolean;
}

export const Table = ({ data, showActions = false }: Props) => {
  const { categorySelected, statusSelected, setStatusSelected } =
    useContext(FiltersContext);
  const { toggleFavorite, updateBook, deleteBook } = useBookActions();

  const [modal, setModal] = useState({ isOpen: false, book: {} as Book });
  const [searchTerm, setSearchTerm] = useState('');

  // Filters to be applied
  const filters = [
    { property: 'category', state: categorySelected },
    { property: 'status', state: statusSelected },
  ];

  // Properties to be searched
  const searchKeys = ['name', 'author'];

  //  Filter the data based on the selected category and status
  const { filteredData } = useFilters(data, filters, searchKeys, searchTerm);

  // Handle the filter change
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusSelected(e.target.value as StatusSelect);
  };

  // Handle the search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex mb-5">
        <FilterSelect
          value={statusSelected}
          onChange={handleFilterChange}
          options={statusOptions}
        />
        <SearchInput value={searchTerm} onChange={handleSearchChange} />
      </div>
      <table className="table-auto shadow-lg">
        <thead className="border-b-2 border-blue-900">
          <tr>
            {tableColumns.map((title) => {
              return (
                <td key={title} className="text-gray-700 px-10 py-2">
                  {title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((book) => {
            return (
              <BookRow
                key={book.id}
                book={book}
                onEdit={() => setModal({ isOpen: true, book })}
                onDelete={deleteBook}
                onToggleFavorite={toggleFavorite}
                showActions={showActions}
              />
            );
          })}
        </tbody>
      </table>
      <BookModal
        onClose={() => setModal({ isOpen: false, book: {} as Book })}
        isOpen={modal.isOpen}
      >
        <BookRegister
          data={modal.book}
          saveAction={'edit'}
          onSubmit={(updatedBook) => {
            updateBook(updatedBook);
            setModal({ isOpen: false, book: {} as Book });
          }}
          onClose={() => setModal({ isOpen: false, book: {} as Book })}
        />
      </BookModal>
    </div>
  );
};
