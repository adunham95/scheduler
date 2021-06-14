import React from 'react';
import { getAllBlocks } from '../../database/blockDB';
import { BlockCard } from './BlockCard';

export const BlockList = () => {
  const blockList = getAllBlocks();
  console.log(blockList);
  return (
    <div className="flex flex-wrap">
      {blockList.map((b) => <BlockCard block={b} />)}
    </div>
  );
};
