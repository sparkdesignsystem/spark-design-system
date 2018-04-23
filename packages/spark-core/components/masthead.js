/* global window document */
import getElements from '../utilities/getElements';

const toggleMobileNav = (iconContainer, navId) => {
  iconContainer.querySelector('svg').classList.toggle('sprk-c-Hamburger__icon--open');
  const nav = document.querySelector(`[data-sprk-mobile-nav="${navId}"]`);
  nav.classList.toggle('sprk-u-Hide');
};

const hideMobileNavs = () => {
  getElements('[data-sprk-mobile-nav]', (item) => {
    item.classList.add('sprk-u-Hide');
  });
  getElements('.sprk-c-Hamburger__icon--open', (item) => {
    item.classList.remove('sprk-c-Hamburger__icon--open');
  });
};

const bindUIEvents = () => {
  getElements('[data-sprk-mobile-nav-trigger]', (element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMobileNav(element, element.getAttribute('data-sprk-mobile-nav-trigger'));
    });
  });
};

const masthead = () => {
  bindUIEvents();
  window.addEventListener('resize', hideMobileNavs);
};

export { masthead, toggleMobileNav, hideMobileNavs };
