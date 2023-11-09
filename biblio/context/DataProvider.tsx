'use client';
import { initialData } from '@/data';
import { Book } from '@/interfaces';
import { createContext, useMemo, useState } from 'react';

//  Context's value type
type DataContextType = {
  dataState: Book[];
  favorites: Book[];
  toggleFavorite: (id: string) => void;
};

export const DataContext = createContext<DataContextType>({
  dataState: [],
  favorites: [],
  toggleFavorite: () => {},
});

//Props type for the provider component
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const DataProvider = ({ children }: Props) => {
  const [dataState, setDataState] = useState<Book[]>(initialData);

  const favorites = useMemo(
    () => dataState.filter((book) => book.favorite),
    [dataState]
  );

  const toggleFavorite = (id: string) => {
    let newDataState = [...dataState];
    newDataState.map(
      (item) => item.id === id && (item.favorite = !item.favorite)
    );
    setDataState(newDataState);
  };

  const contextValue = useMemo(
    () => ({
      dataState,
      favorites,
      toggleFavorite,
    }),
    [dataState, favorites, toggleFavorite]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
