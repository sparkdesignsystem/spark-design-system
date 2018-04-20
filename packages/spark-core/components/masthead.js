/* global document */
import getElements from '../utilities/getElements';

const showMobileNav = (navId) => {
  console.log(navId);
  const nav = document.querySelector(`[data-sprk-mobile-nav="${navId}"]`);
  nav.classList.toggle('sprk-u-Hide');
};

const bindUIEvents = () => {
  getElements('[data-sprk-mobile-nav-trigger]', (element) => {
    element.classList.toggle('sprk-is-Open');
    showMobileNav(element.getAttribute('data-sprk-mobile-nav-trigger'));
  });
};

const masthead = () => {
  bindUIEvents();
};

export { masthead };
