'use client';
import { initialData } from '@/data';
import { Book } from '@/interfaces';
import React, { useReducer, createContext, useMemo } from 'react';

// Context's value type
type DataContextType = {
  dataState: Book[];
  favorites: Book[];
  dispatch: React.Dispatch<Action>;
};

export const DataContext = createContext<DataContextType>({
  dataState: [],
  favorites: [],
  dispatch: () => null,
});

// Action types for the reducer
type Action =
  | { type: 'ADD_BOOK'; book: Book }
  | { type: 'UPDATE_BOOK'; book: Book }
  | { type: 'DELETE_BOOK'; id: string }
  | { type: 'TOGGLE_FAVORITE'; id: string };

// Reducer function
function booksReducer(state: Book[], action: Action): Book[] {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'UPDATE_BOOK':
      return state.map((book) =>
        book.id === action.book.id ? { ...action.book } : book
      );
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.id);
    case 'TOGGLE_FAVORITE':
      return state.map((book) =>
        book.id === action.id ? { ...book, favorite: !book.favorite } : book
      );
    default:
      return state;
  }
}

// Props type for the provider component
interface Props {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: Props) => {
  const [dataState, dispatch] = useReducer(booksReducer, initialData);

  // Get the favorites from the state
  const favorites = useMemo(
    () => dataState.filter((book) => book.favorite),
    [dataState]
  );

  const contextValue = useMemo(
    () => ({
      dataState,
      favorites,
      dispatch,
    }),
    [dataState, favorites]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};
