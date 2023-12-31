import { CategorySelect, StatusSelect } from '@/interfaces';

export const categoriesOptions: CategorySelect[] = [
  'Todos',
  'Terror',
  'Finanzas',
  'Ciencia Ficción',
  'Comedia',
  'Infantiles',
];

export const statusOptions: StatusSelect[] = [
  'Todos',
  'Por Leer',
  'Leído',
  'Leyendo',
];

export const tableColumns = ['ID', 'Nombre', 'Categoría', 'Estado', 'Acciones'];
