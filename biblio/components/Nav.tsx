'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { name: 'Inicio', path: '/' },
  { name: 'Alta', path: '/new' },
  { name: 'Favoritos', path: '/favorites' },
];

export const Nav = () => {
  const path = usePathname();

  return (
    <div className="flex justify-between w-full py-5 px-14 items-center shadow-lg">
      <span className="hidden md:flex">LOGO</span>
      <ul className="flex gap-5 justify-between">
        {routes.map((route) => (
          <li
            key={route.name}
            className={`w-36 p-2 justify-center flex font-bold ${
              path === route.path
                ? 'border-b-2 border-green-300 text-blue-900'
                : 'text-gray-400'
            }`}
          >
            <Link
              className="w-full h-full text-center cursor-pointer hover:text-blue-900"
              href={route.path}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="font-bold text-blue-900 hidden md:flex">
        Luis Orlando Ortega
      </p>
    </div>
  );
};
