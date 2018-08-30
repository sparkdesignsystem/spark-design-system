/* global document */
const detectJS = () => {
  document.getElementsByTagName('html')[0].classList.add('sprk-u-Javascript');
};

export { detectJS as default };
