import { useContext } from 'react';

import { DataContext } from '@/context/DataProvider';
import { CategoryContext } from '@/context/CategoryProvider';

import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';
import { FavoriteButton } from '../FavoriteButton';

export const Table = () => {
  const { dataState, setDataState } = useContext(DataContext);
  const { categorySelected, setCategorySelected } = useContext(CategoryContext);

  const columns = ['ID', 'Nombre', 'Categoría', 'Estado', 'Favoritos'];

  const handleFavorite = (idx: number) => {
    const newData = [...dataState];
    newData[idx].favorite = !newData[idx].favorite;
    setDataState(newData);
  };

  return (
    <div>
      <div className="flex mb-5">
        <FilterSelect
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
        />
        <SearchInput />
      </div>
      <table className="table-auto shadow-lg">
        <thead className="border-b-2 border-blue-900">
          <tr>
            {columns.map((title) => {
              return (
                <td key={title} className="text-gray-700 px-10 py-2">
                  {title}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataState.map(({ id, name, category, status, favorite }, idx) => {
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
                    onClick={() => handleFavorite(idx)}
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
