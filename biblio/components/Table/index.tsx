'use client';
import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';

const data = [
  {
    id: '5435435',
    name: 'Casa de campo',
    category: 'Casa',
    status: 'Leído',
    favorite: true,
  },
  {
    id: '4823494',
    name: 'Otro',
    category: 'Casa',
    status: 'Disponible',
    favorite: false,
  },
];

export const Table = () => {
  const columns = ['ID', 'Nombre', 'Categoría', 'Estado', 'Favoritos'];

  const [dataState, setDataState] = useState(data);

  const handleFavorite = (idx: number) => {
    console.log('handle');
    setDataState((prevState) => {
      let newData = [...prevState];
      newData[idx].favorite = !newData[idx].favorite;
      console.log(newData);

      return newData;
    });
  };

  return (
    <div>
      <div className="flex mb-5">
        <FilterSelect />
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
                  <button onClick={() => handleFavorite(idx)}>
                    {favorite ? 'SI' : 'NO'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
