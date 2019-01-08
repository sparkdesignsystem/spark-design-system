/* global document window */
import getElements from '../utilities/getElements';
import { focusFirstEl } from '../utilities/elementState';
import { isEscPressed } from '../utilities/keypress';

const addClassOnScroll = (element, scrollPos, elementHeight, classToToggle) => {
  // If user scrolls past the element then add class
  if (scrollPos >= elementHeight) {
    element.classList.add(classToToggle);
  } else {
    element.classList.remove(classToToggle);
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

const hideSelectorMask = (mastheadSelectorMask, selectorIcon) => {
  mastheadSelectorMask.classList.remove('sprk-c-MastheadMask');
  selectorIcon.classList.remove('sprk-c-Icon--open');
};

const showSelectorMask = (mastheadSelectorMask, selectorIcon) => {
  mastheadSelectorMask.classList.add('sprk-c-MastheadMask');
  selectorIcon.classList.add('sprk-c-Icon--open');
};

const bindUIEvents = () => {
  getElements('[data-sprk-mobile-nav-trigger]', (element) => {
    const mainLayout = document.querySelector('[data-sprk-main]');
    const masthead = document.querySelector('[data-sprk-masthead]');
    const selectorDropdown = document.querySelector('[data-sprk-dropdown="dropdown-selector"]');
    const selectorTrigger = document.querySelector('[data-sprk-dropdown-trigger="dropdown-selector"]');
    const selectorIcon = selectorTrigger.querySelector('svg');
    const mastheadSelectorMask = document.querySelector('[data-sprk-masthead-mask]');
    const selectorDropdownChoices = selectorDropdown.querySelectorAll('[data-sprk-dropdown-choice]');

    const nav = document.querySelector(
      `[data-sprk-mobile-nav="${element.getAttribute('data-sprk-mobile-nav-trigger')}"]`,
    );

    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMobileNav(element, nav, masthead);
    });

    window.addEventListener('scroll', () => {
      addClassOnScroll(masthead, window.scrollY, masthead.offsetHeight, 'sprk-c-Masthead--scroll');
    });

    mainLayout.addEventListener('focusin', () => {
      const isOpen = !document
        .querySelector('.sprk-c-Masthead__narrow-nav')
        .classList.contains('sprk-u-HideWhenJs');
      focusTrap(isOpen, nav);
    });

    selectorTrigger.addEventListener('click', () => {
      const dropdownIsOpen = selectorDropdown.classList.contains('sprk-c-Dropdown--open');

      if (dropdownIsOpen) {
        hideSelectorMask(mastheadSelectorMask, selectorIcon);
      } else {
        showSelectorMask(mastheadSelectorMask, selectorIcon);
      }
    });

    selectorDropdownChoices.forEach((choice) => {
      choice.addEventListener('click', () => {
        hideSelectorMask(mastheadSelectorMask, selectorIcon);
      });
    });

    document.addEventListener('click', (e) => {
      if (!(selectorTrigger.contains(e.target) || selectorDropdown.contains(e.target))) {
        hideSelectorMask(mastheadSelectorMask, selectorIcon);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (isEscPressed(e)) {
        hideSelectorMask(mastheadSelectorMask, selectorIcon);
      }
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
  addClassOnScroll,
  hideSelectorMask,
  showSelectorMask
};
