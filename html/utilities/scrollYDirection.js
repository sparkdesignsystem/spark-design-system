/* global */

let scrollPosition = 0;
const scrollYDirection = () => {
  const newScrollPos = window.scrollY;
  if (newScrollPos < 0) return;
  const diff = newScrollPos - scrollPosition;
  const direction = diff > 0 ? 'down' : 'up';
  scrollPosition = newScrollPos;
  return direction;
};

export { scrollYDirection as default };
