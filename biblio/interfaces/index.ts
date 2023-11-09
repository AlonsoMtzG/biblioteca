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

export type BookAction =
  | { type: 'ADD_BOOK'; book: Book }
  | { type: 'UPDATE_BOOK'; book: Book }
  | { type: 'DELETE_BOOK'; id: string }
  | { type: 'TOGGLE_FAVORITE'; id: string };
