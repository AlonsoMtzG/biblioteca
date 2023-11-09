'use client';
import { BookRegister } from '@/components/BookRegister';
import { DataContext } from '@/context/DataProvider';
import { Book } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function New() {
  const router = useRouter();
  const { dispatch } = useContext(DataContext);

  const handleAddBook = (newBook: Book) => {
    dispatch({ type: 'ADD_BOOK', book: newBook });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <BookRegister
        saveAction="add"
        onSubmit={handleAddBook}
        onClose={() => router.push('/')}
      />
    </div>
  );
}
