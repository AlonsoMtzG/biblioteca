import { useContext } from 'react';

import { FiltersContext } from '@/context/FiltersProvider';
import { DataContext } from '@/context/DataProvider';

import { statusOptions, tableColumns } from '@/constants';
import { Book, StatusSelect } from '@/interfaces';
import { useFilters } from '@/hooks/useFilters';

import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';
import { FavoriteButton } from '../FavoriteButton';

interface Props {
  data: Book[];
}

export const Table = ({ data }: Props) => {
  const { categorySelected, statusSelected, setStatusSelected } =
    useContext(FiltersContext);

  const { toggleFavorite } = useContext(DataContext);

  //  Filter the data based on the selected category and status
  const { filteredData, searchTerm, setSearchTerm } = useFilters(
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
    ['name', 'id']
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusSelected(e.target.value as StatusSelect);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id);
  };

  return (
    <div>
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
          {filteredData.map(({ id, name, category, status, favorite }) => {
            return (
              <tr key={id} className="border-b-2 font-medium">
                <td className="px-10 py-2 font-normal">{id}</td>
                <td className="px-10 py-2 text-blue-900">{name}</td>
                <td className="px-10 py-2">{category}</td>
                <td className="px-10 py-2">{status}</td>
                <td className="px-10 py-2">
                  <FavoriteButton
                    size={25}
                    status={favorite}
                    onClick={() => handleToggleFavorite(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
