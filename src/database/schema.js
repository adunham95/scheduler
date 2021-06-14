import { generateID } from '../utils/utils';

export const BlockSchema = {
  id: generateID(),
  name: 'Default Block',
  color: '#58595C',
  locked: false,
};

export const dbNames = {
  meta: 'blockMeta',
};
