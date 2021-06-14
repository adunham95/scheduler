/* eslint-disable no-bitwise */
function newID(length) {
  return [...Array(length)].map((i) => (~~(Math.random() * 36)).toString(36)).join('');
}

export function generateID(length = 4) {
  const id = newID(length);
  // TODO check for current value
  return id;
}

export function pickTextColorBasedOnBgColorSimple(bgColor, lightColor = 'text-white', darkColor = 'text-grey-900') {
  const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186)
    ? darkColor : lightColor;
}
