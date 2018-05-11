/* global document */
const detectJS = () => {
  document.getElementsByTagName('html')[0].classList.add('js');
};

export { detectJS as default };
