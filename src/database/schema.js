import { generateID } from '../utils/utils';

export const BlockSchema = {
  id: generateID(),
  name: 'Default Block',
  color: '#000000',
  locked: false,
  scheduled: false,
  days: [],
  availability: [
    { day: 'Monday', start: '11:00', end: '1300' },
  ],
  lengthTime: 60,
};

export const dbNames = {
  meta: 'blockMeta',
};
