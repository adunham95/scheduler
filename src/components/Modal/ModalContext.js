import { createContext } from 'react';
// eslint-disable-next-line import/no-cycle
import Modal from './Modal';
import useModal from './useModal';

const ModalContext = createContext([{}, () => {}]);

const ModalProvider = ({ children }) => {
  const { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
