import { useContext } from 'react';

import { categoriesOptions } from '@/constants';
import { FiltersContext } from '@/context/FiltersProvider';

export const Sidebar = () => {
  const { categorySelected, setCategorySelected } = useContext(FiltersContext);

  return (
    <div className="flex flex-col w-56 shadow-xl text-blue-800 font-semibold">
      {categoriesOptions.map((category) => {
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
