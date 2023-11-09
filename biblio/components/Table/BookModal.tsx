import React from 'react';

interface Props {
  children?: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onClose: () => void;
}

export const BookModal = ({ children, isOpen, onClose }: Props) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col gap-3 justify-center items-center">
        {children}
        <button
          type="button"
          className="bg-red-500 px-7 py-1 rounded-lg text-white font-semibold"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    )
  );
};
