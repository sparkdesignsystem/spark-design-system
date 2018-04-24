/* global window document */
import getElements from '../utilities/getElements';

const toggleMobileNav = (iconContainer, nav) => {
  document.body.classList.toggle('sprk-u-OverflowHidden');
  iconContainer.querySelector('svg').classList.toggle('sprk-c-Hamburger__icon--open');
  nav.classList.toggle('sprk-u-Hide');
};

const hideMobileNavs = () => {
  document.body.classList.remove('sprk-u-OverflowHidden');
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
      const nav = document.querySelector(`[data-sprk-mobile-nav="${element.getAttribute('data-sprk-mobile-nav-trigger')}"]`);
      toggleMobileNav(element, nav);
    });
  });
};

const masthead = () => {
  bindUIEvents();
  window.addEventListener('resize', hideMobileNavs);
};

export { masthead, toggleMobileNav, hideMobileNavs };
