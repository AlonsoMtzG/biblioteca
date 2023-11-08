import { categories } from '@/constants';
import { useState } from 'react';

export const FilterSelect = () => {
  const [categorySelected, setCategorySelected] = useState();

  const handleCategory = (e: any) => {
    setCategorySelected(e.target.value);
  };

  return (
    <div className="flex gap-2 items-center mr-10">
      <label>Filtrar por:</label>
      <select
        className="bg-gray-100 rounded-lg px-2 py-1 focus:outline-gray-300"
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
  );
};
