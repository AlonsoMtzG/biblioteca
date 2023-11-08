import { categories } from '@/constants';

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-56 shadow-xl text-blue-800 font-semibold">
      {categories.map((category) => {
        return (
          <button key={category} className="p-2 text-left hover:bg-blue-100">
            {category}
          </button>
        );
      })}
    </div>
  );
};
