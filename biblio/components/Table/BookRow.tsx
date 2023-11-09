import React, { useCallback } from 'react';
import { Book } from '@/interfaces';
import { FavoriteButton } from '../FavoriteButton';
import { ActionButton } from './ActionButton';

interface Props {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (bookId: string) => void;
  onToggleFavorite: (bookId: string) => void;
  showActions: boolean;
}

// Memo component to avoid re-rendering
export const BookRow = React.memo(
  ({ book, onEdit, onDelete, onToggleFavorite, showActions }: Props) => {
    // Memoized functions to avoid re-rendering
    const handleToggleFavorite = useCallback(() => {
      onToggleFavorite(book.id);
    }, [book.id, onToggleFavorite]);

    const handleEditClick = useCallback(() => {
      onEdit(book);
    }, [book, onEdit]);

    const handleDeleteClick = useCallback(() => {
      onDelete(book.id);
    }, [book.id, onDelete]);

    return (
      <tr className="border-b-2 font-medium relative group">
        <td className="px-10 py-2 font-normal">{book.id}</td>
        <td className="px-10 py-2 text-blue-900">{book.name}</td>
        <td className="px-10 py-2">{book.category}</td>
        <td className="px-10 py-2">{book.status}</td>
        <td className="px-10 py-2">
          <div className="flex gap-2">
            <FavoriteButton
              size={25}
              status={book.favorite}
              onClick={handleToggleFavorite}
            />
            {showActions && (
              <>
                <ActionButton action="edit" onClick={handleEditClick} />
                <ActionButton action="delete" onClick={handleDeleteClick} />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  }
);
