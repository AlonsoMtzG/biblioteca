export const categories = [
  'Terror',
  'Finanzas',
  'Ciencia Ficción',
  'Comedia',
  'Infantiles',
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col">
      {categories.map((category) => {
        return (
          <button key={category} className="p-2 border-2">
            {category}
          </button>
        );
      })}
    </div>
  );
};
