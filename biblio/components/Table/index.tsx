import { useContext, useState } from 'react';

import { FiltersContext } from '@/context/FiltersProvider';
import { DataContext } from '@/context/DataProvider';

import { statusOptions, tableColumns } from '@/constants';
import { Book, StatusSelect } from '@/interfaces';
import { useFilters } from '@/hooks/useFilters';

import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';
import { FavoriteButton } from '../FavoriteButton';
import { ActionButton } from './ActionButton';
import { BookRegister } from '../BookRegister';

interface Props {
  data: Book[];
  showActions?: boolean;
}

export const Table = ({ data, showActions = false }: Props) => {
  const { categorySelected, statusSelected, setStatusSelected } =
    useContext(FiltersContext);
  const { dispatch } = useContext(DataContext);

  const [modal, setModal] = useState({ state: false, book: {} as Book });

  const [searchTerm, setSearchTerm] = useState('');

  //  Filter the data based on the selected category and status
  const { filteredData } = useFilters(
    data,
    [
      {
        property: 'category',
        state: categorySelected,
      },
      {
        property: 'status',
        state: statusSelected,
      },
    ],
    ['name', 'id'],
    searchTerm
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusSelected(e.target.value as StatusSelect);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleFavorite = (bookId: string) => {
    dispatch({ type: 'TOGGLE_FAVORITE', id: bookId });
  };

  const handleEdit = (updatedBook: Book) => {
    dispatch({ type: 'UPDATE_BOOK', book: updatedBook });
  };

  const handleDelete = (bookId: string) => {
    dispatch({ type: 'DELETE_BOOK', id: bookId });
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
              <tr
                key={book.id}
                className="border-b-2 font-medium relative group"
              >
                <td className="px-10 py-2 font-normal">{book.id}</td>
                <td className="px-10 py-2 text-blue-900">{book.name}</td>
                <td className="px-10 py-2">{book.category}</td>
                <td className="px-10 py-2">{book.status}</td>
                <td className="px-10 py-2">
                  <div className="flex gap-2">
                    <FavoriteButton
                      size={25}
                      status={book.favorite}
                      onClick={() => handleToggleFavorite(book.id)}
                    />
                    {showActions && (
                      <>
                        <ActionButton
                          action="edit"
                          onClick={() => setModal({ state: true, book: book })}
                        />
                        <ActionButton
                          action="delete"
                          onClick={() => handleDelete(book.id)}
                        />
                      </>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {
        // Display the modal if modalOpened is true
        modal.state && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col gap-5 justify-center items-center">
            <BookRegister
              data={modal.book}
              saveAction={'edit'}
              onSubmit={handleEdit}
              onClose={() => setModal({ state: false, book: {} as Book })}
            />
            <button
              type="button"
              className="bg-red-500 px-7 py-1 rounded-lg text-white font-semibold"
              onClick={() => setModal({ state: false, book: {} as Book })}
            >
              Cancelar
            </button>
          </div>
        )
      }
    </div>
  );
};
