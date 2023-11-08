import { initialData } from '@/data';
import { Book } from '@/interfaces';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

//  Context's value type
type DataContextType = {
  dataState: Book[];
  setDataState: Dispatch<SetStateAction<Book[]>>;
};

export const DataContext = createContext<DataContextType>({
  dataState: [],
  setDataState: () => {},
});

//Props type for the provider component
interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const DataProvider = ({ children }: Props) => {
  const [dataState, setDataState] = useState<Book[]>(initialData);

  return (
    <DataContext.Provider value={{ dataState, setDataState }}>
      {children}
    </DataContext.Provider>
  );
};
