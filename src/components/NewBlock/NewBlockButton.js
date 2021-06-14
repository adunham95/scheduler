import React, { useContext } from 'react';
import { ModalContext } from '../Modal/ModalContext';
import { NewBlock } from './NewBlock';

export const NewBlockButton = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <div>
      <button
        className="mt-6 rounded  bg-purple-700 text-purple-100 px-5 h-12"
        onClick={() => handleModal(<NewBlock />)}
      >
        open this modal!
      </button>
    </div>
  );
};
