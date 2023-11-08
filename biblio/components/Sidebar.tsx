import { useContext } from 'react';

import { CategoryContext } from '@/context/CategoryProvider';
import { categories } from '@/constants';

export const Sidebar = () => {
  const { categorySelected, setCategorySelected } = useContext(CategoryContext);

  return (
    <div className="flex flex-col w-56 shadow-xl text-blue-800 font-semibold">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={`p-2 text-left hover:bg-blue-100 ${
              categorySelected === category && 'bg-blue-200'
            }`}
            onClick={() => setCategorySelected(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
