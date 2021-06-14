/* eslint-disable no-bitwise */
export function generateID(length = 4) {
  return [...Array(length)].map((i) => (~~(Math.random() * 36)).toString(36)).join('');
}
