import Link from 'next/link';

export const Nav = () => {
  return (
    <div className="flex border-2 justify-between p-5">
      <span>LOGO</span>
      <div className="flex gap-5">
        <Link href="/" className="border-b-2">
          Inicio
        </Link>
        <Link href="/new">Alta</Link>
        <Link href="/favorites">Favoritos</Link>
      </div>
      <p>Luis Orlando Ortega</p>
    </div>
  );
};
