/* global document window */
import { focusFirstEl } from '../../../../../packages/spark-core/utilities/elementState';

const hideMobileNav = (nav) => {
  document.body.classList.remove('sprk-u-Overflow--hidden');
  nav.classList.remove('is-active');
};

const focusTrap = (nav, mainNav) => {
  if (nav.classList.contains('is-active')) {
    focusFirstEl(mainNav);
  }
};

const bindUIEvents = () => {
  const nav = document.querySelector('.drizzle-o-Layout__nav');
  if (nav === null) return;
  const mainNav = nav.querySelector('.drizzle-c-Navigation__main');
  const mainLayout = document.querySelector('.drizzle-o-Layout__main');

  window.addEventListener('resize', () => {
    hideMobileNav(nav);
  });

  mainLayout.addEventListener('focusin', () => {
    focusTrap(nav, mainNav);
  });
};

const mobileNav = () => {
  bindUIEvents();
};

export { mobileNav, hideMobileNav, focusTrap };
