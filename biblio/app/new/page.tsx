'use client';
import { BookRegister } from '@/components/BookRegister';
import { DataContext } from '@/context/DataProvider';
import { Book } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function New() {
  const router = useRouter();
  const { addBook } = useContext(DataContext);

  const handleAddBook = (data: Book) => {
    addBook(data);
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
