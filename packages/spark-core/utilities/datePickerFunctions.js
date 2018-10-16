/* global window document */
import getArrowClass from './getArrowClass';

const open = (input) => {
  const rect = input.getBoundingClientRect();
  const cal = document.querySelector('.dp');

  cal.classList.remove('dp-above-top');
  cal.classList.remove('dp-below-top');
  cal.classList.add(getArrowClass(rect, window.pageYOffset, window.innerHeight));
};

const select = (input) => {
  input.dispatchEvent(new window.Event('input'));
  input.focus();
};

export { open, select };
