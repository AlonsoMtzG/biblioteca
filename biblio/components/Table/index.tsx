'use client';
import { useState } from 'react';
import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';

const data = [
  {
    id: '5435435',
    name: 'Casa de campo',
    category: 'Casa',
    status: 'Disponible',
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
    <div className="border-2">
      <div className="flex">
        <FilterSelect />
        <SearchInput />
      </div>
      <div>
        <div className="flex border-b-2 justify-around">
          {columns.map((title) => {
            return <div key={title}>{title}</div>;
          })}
        </div>
        <div className="flex flex-col">
          {dataState.map(({ id, name, category, status, favorite }, idx) => {
            return (
              <div className="flex justify-around w-full" key={id}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{category}</div>
                <div>{status}</div>
                <button onClick={() => handleFavorite(idx)}>
                  {favorite ? 'SI' : 'NO'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
