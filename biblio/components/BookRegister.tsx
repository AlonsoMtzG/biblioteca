'use client';
import { useState } from 'react';

import { categoriesOptions, statusOptions } from '@/constants';
import { DataContext } from '@/context/DataProvider';
import { Book, Category, Status } from '@/interfaces';

import { FavoriteButton } from './FavoriteButton';

interface Props {
  data?: Book;
  saveAction: 'edit' | 'add';
  onSubmit: (book: Book) => void;
  onClose: () => void;
}

export const BookRegister = ({ data, onSubmit, onClose }: Props) => {
  const [author, setAuthor] = useState(data?.author || '');
  const [title, setTitle] = useState(data?.name || '');
  const [description, setDescription] = useState(data?.description || '');
  const [category, setCategory] = useState<Category>(
    data?.category || 'Ciencia Ficción'
  );
  const [status, setStatus] = useState<Status>(data?.status || 'Por Leer');
  const [favorite, setFavorite] = useState(data?.favorite || false);

  const handleSubmit = () => {
    onSubmit({
      id: data?.id || crypto.randomUUID(),
      author,
      name: title,
      description,
      category,
      status,
      favorite,
    });

    onClose();
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col md:w-5/12 2xl:w-4/12 bg-gray-100 p-5 rounded-md"
    >
      <div className="flex justify-between mb-8">
        <h2 className="font-bold">Alta de Libro</h2>
        <div className="flex gap-2 items-center">
          <input
            required
            type="checkbox"
            checked={favorite}
            name="favorite"
            id="favorite"
            className="hidden"
            readOnly
          />
          <FavoriteButton
            size={25}
            type="button"
            status={favorite}
            onClick={handleFavorite}
          />
          <button
            type="submit"
            value="submit"
            className="bg-green-500 px-5 py-1 rounded-lg text-white font-semibold"
          >
            Guardar
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-3">
        <div className="flex gap-2">
          <label htmlFor="author" className="w-1/4">
            Autor:
          </label>
          <input
            required
            id="author"
            name="author"
            type="text"
            placeholder="Ingresa el nombre del autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="px-2 py-1 rounded-md w-full focus:outline-gray-300 placeholder:text-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="title" className="w-1/4">
            Titulo:
          </label>
          <input
            required
            id="title"
            name="title"
            type="text"
            placeholder="Escribe el título del libro"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-2 py-1 rounded-md w-full focus:outline-gray-300 placeholder:text-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="description" className="w-1/4">
            Descripción:
          </label>
          <textarea
            required
            rows={8}
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Proporciona una breve descripción"
            className="px-2 py-1 rounded-md w-full resize-none focus:outline-gray-300 placeholder:text-gray-300"
          ></textarea>
        </div>
        <div className="flex gap-2">
          <label htmlFor="category" className="w-1/4">
            Categoría:
          </label>
          <select
            required
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            className="rounded-md px-2 py-1 w-full  focus:outline-gray-300 "
          >
            {categoriesOptions.slice(1).map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-2">
          <label htmlFor="status" className="w-1/4">
            Estado:
          </label>
          <select
            required
            id="status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
            className="rounded-md px-2 py-1 w-full focus:outline-gray-300"
          >
            {statusOptions.slice(1).map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </form>
  );
};
