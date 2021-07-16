import { createContext, useContext, useState } from 'react';

const BlockContext = createContext(null);

const BlockProvider = ({ children }) => {
  const [blocks, setBlocks] = useState([]);
  return (
    <BlockContext.Provider value={{ blocks, setBlocks }}>
      {children}
    </BlockContext.Provider>
  );
};
function useBlock() {
  const context = useContext(BlockContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  const [blocks, setBlocks] = context;

  const addBlock = (newBlock) => setBlocks([...blocks, newBlock]);

  return {
    addBlock,
    blocks,
    setBlocks,
  };
}

export { BlockProvider, useBlock };
