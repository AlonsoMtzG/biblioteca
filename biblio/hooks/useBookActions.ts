import { useContext, useCallback } from 'react';
import { DataContext } from '@/context/DataProvider';
import { Book, BookAction } from '@/interfaces';

export const useBookActions = () => {
  const { dispatch } = useContext(DataContext);

  const toggleFavorite = useCallback(
    (bookId: string) => {
      dispatch({ type: 'TOGGLE_FAVORITE', id: bookId } as BookAction);
    },
    [dispatch]
  );

  const updateBook = useCallback(
    (book: Book) => {
      dispatch({ type: 'UPDATE_BOOK', book } as BookAction);
    },
    [dispatch]
  );

  const deleteBook = useCallback(
    (bookId: string) => {
      dispatch({ type: 'DELETE_BOOK', id: bookId } as BookAction);
    },
    [dispatch]
  );

  return {
    toggleFavorite,
    updateBook,
    deleteBook,
  };
};
