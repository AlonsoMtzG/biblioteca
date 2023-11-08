export interface Book {
  id: string;
  name: string;
  category:
    | 'Terror'
    | 'Finanzas'
    | 'Ciencia Ficción'
    | 'Comedia'
    | 'Infantiles';
  status: 'Por Leer' | 'Leído' | 'Leyendo' | 'Favorito';
  favorite: boolean;
}
