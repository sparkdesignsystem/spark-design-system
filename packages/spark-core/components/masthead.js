/* global window document */
import getElements from '../utilities/getElements';
import { focusFirstEl } from '../utilities/elementState';

const toggleMobileNav = (iconContainer, nav) => {
  document.body.classList.toggle('sprk-u-OverflowHidden');
  iconContainer.querySelector('svg').classList.toggle('sprk-c-Hamburger__icon--open');
  nav.classList.toggle('sprk-u-Hide');
};

const focusTrap = (isOpen, nav) => {
  if (isOpen) {
    focusFirstEl(nav);
  }
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
    const mainLayout = document.querySelector('[data-sprk-main]');
    const nav = document.querySelector(`[data-sprk-mobile-nav="${element.getAttribute('data-sprk-mobile-nav-trigger')}"]`);

    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMobileNav(element, nav);
    });

    mainLayout.addEventListener('focusin', () => {
      const isOpen = !document.querySelector('.sprk-c-Masthead__narrow-navigation-container').classList.contains('sprk-u-Hide');
      focusTrap(isOpen, nav);
    });
  });
};

const masthead = () => {
  bindUIEvents();
  window.addEventListener('resize', hideMobileNavs);
};

export { masthead, toggleMobileNav, hideMobileNavs };
