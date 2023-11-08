import { CategorySelect } from '@/interfaces';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
//  Context's value type
type CategoryContextType = {
  categorySelected: CategorySelect;
  setCategorySelected: Dispatch<SetStateAction<CategorySelect>>;
};

export const CategoryContext = createContext<CategoryContextType>({
  categorySelected: 'Todos',
  setCategorySelected: () => {},
});

//Props type for the provider component
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

// Provider to handle the state of the category selected
export const CategoryProvider = ({ children }: Props) => {
  const [categorySelected, setCategorySelected] =
    useState<CategorySelect>('Todos');

  return (
    <CategoryContext.Provider value={{ categorySelected, setCategorySelected }}>
      {children}
    </CategoryContext.Provider>
  );
};
