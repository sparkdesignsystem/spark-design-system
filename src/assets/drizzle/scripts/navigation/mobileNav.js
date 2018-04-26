/* global document window */
import { focusFirstEl } from '../../../../../packages/spark-core/utilities/elementState';

const hideMobileNav = (nav) => {
  document.body.classList.remove('sprk-u-OverflowHidden');
  nav.classList.remove('is-active');
};

const bindUIEvents = () => {
  const nav = document.querySelector('.drizzle-o-Layout__nav');
  const mainNav = nav.querySelector('.drizzle-c-Navigation__main');
  const mainLayout = document.querySelector('.drizzle-o-Layout__main');

  window.addEventListener('resize', () => {
    hideMobileNav(nav);
  });

  mainLayout.addEventListener('focusin', () => {
    if (nav.classList.contains('is-active')) {
      focusFirstEl(mainNav);
    }
  });
};

const mobileNav = () => {
  bindUIEvents();
};

export { mobileNav, hideMobileNav };
