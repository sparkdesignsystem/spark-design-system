/* global document window */
import getElements from '../utilities/getElements';
import { focusFirstEl } from '../utilities/elementState';

const addClassOnScroll = (masthead) => {
  // Get scroll position
  const scrollPos = window.scrollY;
  // Get height of the masthead
  const mastheadHeight = masthead.offsetHeight;

  // If user scrolls past the masthead then add class
  if (scrollPos >= mastheadHeight) {
    masthead.classList.add('sprk-c-Masthead--scroll');
  } else {
    masthead.classList.remove('sprk-c-Masthead--scroll');
  }
};

const toggleMobileNav = (iconContainer, nav, masthead) => {
  document.body.classList.toggle('sprk-u-Overflow--hidden');
  // Don't add height: 100% if site's html & body el already have it (reapplying makes page jump)
  document.documentElement.classList.toggle('sprk-u-Overflow--hidden');
  if (document.documentElement.style.height !== '100%') {
    document.documentElement.classList.add('sprk-u-Height--100');
  }
  if (document.body.style.height !== '100%') {
    document.body.classList.add('sprk-u-Height--100');
  }
  masthead.classList.toggle('sprk-c-Masthead--open');
  iconContainer.querySelector('svg').classList.toggle('sprk-c-Menu__icon--open');
  nav.classList.toggle('sprk-u-Display--none');
};

const focusTrap = (isOpen, nav) => {
  if (isOpen) {
    focusFirstEl(nav);
  }
};

const hideMobileNavs = () => {
  document.body.classList.remove('sprk-u-Overflow--hidden');
  document.documentElement.classList.remove('sprk-u-Overflow--hidden');
  document.body.classList.remove('sprk-u-Height--100');
  document.documentElement.classList.remove('sprk-u-Height--100');
  getElements('[data-sprk-mobile-nav]', (item) => {
    item.classList.add('sprk-u-Display--none');
  });
  getElements('.sprk-c-Menu__icon--open', (item) => {
    item.classList.remove('sprk-c-Menu__icon--open');
  });
  getElements('.sprk-c-Masthead--open', (item) => {
    item.classList.remove('sprk-c-Masthead--open');
  });
};

const bindUIEvents = () => {
  getElements('[data-sprk-mobile-nav-trigger]', (element) => {
    const mainLayout = document.querySelector('[data-sprk-main]');
    const masthead = document.querySelector('[data-sprk-masthead]');
    const nav = document.querySelector(
      `[data-sprk-mobile-nav="${element.getAttribute('data-sprk-mobile-nav-trigger')}"]`,
    );

    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMobileNav(element, nav, masthead);
    });

    window.addEventListener('scroll', () => {
      addClassOnScroll(masthead);
    });

    mainLayout.addEventListener('focusin', () => {
      const isOpen = !document
        .querySelector('.sprk-c-Masthead__narrow-nav')
        .classList.contains('sprk-u-HideWhenJs');
      focusTrap(isOpen, nav);
    });
  });
};

const masthead = () => {
  window.addEventListener('orientationchange', () => {
    hideMobileNavs();
  });
  bindUIEvents();
};

export {
  masthead,
  toggleMobileNav,
  hideMobileNavs,
  focusTrap,
  bindUIEvents,
};
