'use client';
import { categories, statusOptions } from '@/constants';
import { useState } from 'react';
import { FavoriteButton } from './FavoriteButton';

export const BookRegister = () => {
  const [categorySelected, setCategorySelected] = useState();

  const handleCategory = (e: any) => {
    setCategorySelected(e.target.value);
  };

  return (
    <div className="flex flex-col md:w-5/12 2xl:w-4/12 bg-gray-100 p-5 rounded-md">
      <div className="flex justify-between mb-8">
        <h2 className="font-bold">Alta de Libro</h2>
        <div className="flex gap-2 items-center">
          <FavoriteButton
            size={25}
            status={false}
            onClick={() => console.log('hello world')}
          />
          <button className="bg-green-500 px-5 py-1 rounded-lg text-white font-semibold">
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
            id="author"
            type="text"
            placeholder="Ingresa el nombre del autor"
            className="px-2 py-1 rounded-md w-full focus:outline-gray-300 placeholder:text-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="title" className="w-1/4">
            Titulo:
          </label>
          <input
            id="title"
            type="text"
            placeholder="Escribe el título del libro"
            className="px-2 py-1 rounded-md w-full focus:outline-gray-300 placeholder:text-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="description" className="w-1/4">
            Descripción:
          </label>
          <textarea
            rows={8}
            id="description"
            placeholder="Proporciona una breve descripción"
            className="px-2 py-1 rounded-md w-full resize-none focus:outline-gray-300 placeholder:text-gray-300"
          ></textarea>
        </div>
        <div className="flex gap-2">
          <label htmlFor="category" className="w-1/4">
            Categoría:
          </label>
          <select
            id="category"
            className="rounded-md px-2 py-1 w-full  focus:outline-gray-300 "
            value={categorySelected}
            onChange={handleCategory}
          >
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex gap-2">
          <label htmlFor="category" className="w-1/4">
            Categoría:
          </label>
          <select
            id="category"
            className="rounded-md px-2 py-1 w-full focus:outline-gray-300"
            value={categorySelected}
            onChange={handleCategory}
          >
            {statusOptions.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};
