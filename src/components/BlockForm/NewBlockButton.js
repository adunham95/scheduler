import React, { useContext } from 'react';
import { ModalContext } from '../Modal/ModalContext';
import { BlockForm } from './BlockForm';

export const NewBlockButton = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <div className="rounded-md shadow">
      <button
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
        onClick={() => handleModal(<BlockForm />)}
      >
        Add New Block
      </button>
    </div>
  );
};
