import React from 'react';

export const Nav = () => {
  return (
    <div className="flex border-2 justify-between p-5">
      <span>LOGO</span>
      <div className="flex gap-5">
        <a href="/" className="border-b-2">
          Inicio
        </a>
        <a href="/">Alta</a>
        <a href="/">Favoritos</a>
      </div>
      <p>Luis Orlando Ortega</p>
    </div>
  );
};
