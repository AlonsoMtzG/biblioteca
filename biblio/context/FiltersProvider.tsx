import { CategorySelect, StatusSelect } from '@/interfaces';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
//  Context's value type
type FiltersContextType = {
  categorySelected: CategorySelect;
  setCategorySelected: Dispatch<SetStateAction<CategorySelect>>;
  statusSelected: StatusSelect;
  setStatusSelected: Dispatch<SetStateAction<StatusSelect>>;
};

export const FiltersContext = createContext<FiltersContextType>({
  categorySelected: 'Todos',
  setCategorySelected: () => {},
  statusSelected: 'Todos',
  setStatusSelected: () => {},
});

//Props type for the provider component
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

// Provider to handle the state of the category selected
export const FiltersProvider = ({ children }: Props) => {
  const [categorySelected, setCategorySelected] =
    useState<CategorySelect>('Todos');

  const [statusSelected, setStatusSelected] = useState<StatusSelect>('Todos');

  return (
    <FiltersContext.Provider
      value={{
        categorySelected,
        setCategorySelected,
        statusSelected,
        setStatusSelected,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
