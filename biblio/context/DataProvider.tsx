'use client';
import { initialData } from '@/data';
import { Book } from '@/interfaces';
import { createContext, useMemo, useState } from 'react';

//  Context's value type
type DataContextType = {
  dataState: Book[];
  favorites: Book[];
  addBook: (newBook: Book) => void;
  updateBook: (updatedBook: Book) => void;
  toggleFavorite: (id: string) => void;
};

export const DataContext = createContext<DataContextType>({
  dataState: [],
  favorites: [],
  addBook: () => {},
  updateBook: () => {},
  toggleFavorite: () => {},
});

//Props type for the provider component
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const DataProvider = ({ children }: Props) => {
  const [dataState, setDataState] = useState<Book[]>(initialData);

  // Get the favorites from the state
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
    setDataState((prevDataState) => {
      return prevDataState.map((item) =>
        item.id === updatedBook.id ? { ...updatedBook } : item
      );
    });
  };

  // Delete a book from the state
  const deleteBook = (id: string) => {
    setDataState((prev) => prev.filter((book) => book.id !== id));
  };

  // Toggle the favorite status of a book
  const toggleFavorite = (id: string) => {
    setDataState((prevDataState) =>
      prevDataState.map((book) =>
        book.id === id ? { ...book, favorite: !book.favorite } : book
      )
    );
  };

  const contextValue = useMemo(
    () => ({
      dataState,
      favorites,
      addBook,
      updateBook,
      toggleFavorite,
    }),
    [dataState, favorites]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
