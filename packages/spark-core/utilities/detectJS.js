/* global document */
const detectJS = () => {
  document.getElementsByTagName('html')[0].classList.add('sprk-u-JavaScript');
};

export { detectJS as default };
