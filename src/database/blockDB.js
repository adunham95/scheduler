import { generateID } from '../utils/utils';
import { getFromLocal, saveToLocal } from './localDB';
import { BlockSchema, dbNames } from './schema';

export function saveBlock(newBlockData) {
  // Gets the metadata
  const meta = getFromLocal(dbNames.meta);
  // Creates the block from the schema
  const newBlock = { ...BlockSchema, ...newBlockData, id: generateID() };
  console.log(newBlock);
  // Adds the id to the list of block
  meta.push(newBlock.id);
  // Saves metadata
  saveToLocal(dbNames.meta, meta);
  // Saves block
  saveToLocal(newBlock.id, newBlock);
}

export function getAllBlocks() {
  // Gets the metadata
  const meta = getFromLocal(dbNames.meta);
  const allBlocks = meta.map((id) => ({ ...BlockSchema, ...getFromLocal(id) }));
  console.log(allBlocks);
  return allBlocks;
}
