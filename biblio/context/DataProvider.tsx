'use client';
import { initialData } from '@/data';
import { Book } from '@/interfaces';
import { createContext, useMemo, useState } from 'react';

//  Context's value type
type DataContextType = {
  dataState: Book[];
  favorites: Book[];
  addBook: (newBook: Book) => void;
  toggleFavorite: (id: string) => void;
};

export const DataContext = createContext<DataContextType>({
  dataState: [],
  favorites: [],
  addBook: () => {},
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

  // Add a new book to the state
  const addBook = async (newBook: Book) => {
    setDataState((prev) => [...prev, newBook]);
  };

  // Update a book in the state
  const updateBook = (updatedBook: Book) => {
    setDataState((prev) =>
      prev.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  // Delete a book from the state
  const deleteBook = (id: string) => {
    setDataState((prev) => prev.filter((book) => book.id !== id));
  };

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
      addBook,
      toggleFavorite,
    }),
    [dataState, favorites, addBook, toggleFavorite]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
