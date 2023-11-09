import { Book } from '@/interfaces';

export const initialData: Book[] = [
  {
    id: '5435435',
    name: 'Casa de campo',
    author: 'Julio Verne',
    category: 'Terror',
    description: 'Un libro de terror',
    status: 'Leído',
    favorite: true,
  },
  {
    id: '4823494',
    name: 'Otro Libro',
    author: 'Otro Autor',
    category: 'Finanzas',
    description: 'Un libro de finanzas',
    status: 'Por Leer',
    favorite: false,
  },
  {
    id: '9846212',
    name: 'Un Nuevo Libro',
    author: 'Un Nuevo Autor',
    category: 'Ciencia Ficción',
    description: 'Un libro de ciencia ficción',
    status: 'Por Leer',
    favorite: true,
  },
  {
    id: '12345678',
    name: 'Libro 4',
    author: 'Autor 4',
    category: 'Infantiles',
    description: 'Un libro infantil',
    status: 'Leyendo',
    favorite: false,
  },
];
