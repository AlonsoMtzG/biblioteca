export type Status = 'Por Leer' | 'Leído' | 'Leyendo';

export type StatusSelect = 'Todos' | Status;

export type Category =
  | 'Terror'
  | 'Finanzas'
  | 'Ciencia Ficción'
  | 'Comedia'
  | 'Infantiles';

export type CategorySelect = 'Todos' | Category;

export interface Book {
  id: string;
  name: string;
  author: string;
  category: Category;
  description: string;
  status: Status;
  favorite: boolean;
}
