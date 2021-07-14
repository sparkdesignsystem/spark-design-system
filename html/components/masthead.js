/* global document window */
import { throttle } from 'lodash';
import getElements from '../utilities/getElements';
import { focusFirstEl } from '../utilities/elementState';
import { isEscPressed } from '../utilities/keypress';
import isElementVisible from '../utilities/isElementVisible';
import scrollYDirection from '../utilities/scrollYDirection';
import { hideDropDown, showDropDown } from './dropdown';
import toggleAriaExpanded from '../utilities/toggleAriaExpanded';
import generateAriaControls from '../utilities/generateAriaControls';

const addClassOnScroll = (element, scrollPos, scrollPoint, classToToggle) => {
  // If user scrolls past the scrollPoint then add class
  if (scrollPos >= scrollPoint) {
    element.classList.add(classToToggle);
  } else {
    element.classList.remove(classToToggle);
  }
};

/*
 * Add or remove the class depending
 * on if the user is scrolling up or down
 */
let direction = scrollYDirection();
const toggleMenu = (scrollDirection) => {
  const masthead = document.querySelector('[data-sprk-masthead]');
  if (scrollDirection === 'down') {
    masthead.classList.add('sprk-c-Masthead--is-hidden');
  } else {
    masthead.classList.remove('sprk-c-Masthead--is-hidden');
  }
};

/*
 * Set initial scroll direction
 * If the scroll direction changes
 * toggle the masthead visibility
 */
const checkScrollDirection = throttle(() => {
  const newDirection = scrollYDirection();
  if (direction !== newDirection) {
    toggleMenu(newDirection);
  }
  direction = newDirection;
}, 500);

/*
 * If the mobile menu is visible
 * add the check scroll event listener
 * otherwise remove it
 */
const toggleScrollEvent = (isMenuVisible) => {
  let attached = false;
  if (!isMenuVisible) {
    const masthead = document.querySelector('[data-sprk-masthead]');
    if (masthead) {
      masthead.classList.remove('sprk-c-Masthead--is-hidden');
    }
  }
  if (isMenuVisible) {
    window.addEventListener('scroll', checkScrollDirection);
    attached = true;
  } else {
    window.removeEventListener('scroll', checkScrollDirection, false);
    attached = false;
  }
  return attached;
};

const toggleMobileNav = (iconContainer, nav, masthead) => {
  document.body.classList.toggle('sprk-u-Overflow--hidden');
  // Don't add height: 100% if site's html &
  // body el already have it (reapplying makes page jump)
  document.documentElement.classList.toggle('sprk-u-Overflow--hidden');
  if (document.documentElement.style.height !== '100%') {
    document.documentElement.classList.add('sprk-u-Height--100');
  }
  if (document.body.style.height !== '100%') {
    document.body.classList.add('sprk-u-Height--100');
  }
  masthead.classList.toggle('sprk-c-Masthead--open');
  iconContainer
    .querySelector('svg')
    .classList.toggle('sprk-c-Menu__icon--open');
  nav.classList.toggle('sprk-c-Masthead__nav-collapsible--is-collapsed');

  toggleAriaExpanded(iconContainer);
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
    item.classList.add('sprk-c-Masthead__nav-collapsible--is-collapsed');
  });
  getElements('.sprk-c-Menu__icon--open', (item) => {
    item.classList.remove('sprk-c-Menu__icon--open');
  });
  getElements('.sprk-c-Masthead--open', (item) => {
    item.classList.remove('sprk-c-Masthead--open');
  });
};

const hideSelectorMask = (mastheadSelectorMask) => {
  mastheadSelectorMask.classList.remove('sprk-c-MastheadMask');
};

const showSelectorMask = (mastheadSelectorMask) => {
  mastheadSelectorMask.classList.add('sprk-c-MastheadMask');
};

const bindUIEvents = () => {
  getElements('[data-sprk-mobile-nav-trigger]', (element) => {
    const mainLayout = document.querySelector('[data-sprk-main]');
    const masthead = document.querySelector('[data-sprk-masthead]');
    const selectorDropdown = document.querySelector(
      '[data-sprk-dropdown="dropdown-selector"]',
    );
    const selectorTrigger = document.querySelector(
      '[data-sprk-dropdown-trigger="dropdown-selector"]',
    );

    const nav = document.querySelector(
      `[data-sprk-mobile-nav="${element.getAttribute(
        'data-sprk-mobile-nav-trigger',
      )}"]`,
    );

    // init aria-expanded
    if (!element.hasAttribute('aria-expanded')) {
      // If it doesn't have it then set it to the initial value
      const isOpen = !nav.classList.contains('sprk-c-Masthead__nav-collapsible--is-collapsed');

      if (isOpen) {
        element.setAttribute('aria-expanded', 'true');
      } else {
        element.setAttribute('aria-expanded', 'false');
      }
    }

    generateAriaControls(element, nav, 'masthead');

    /*
     * Check if the mobile menu is visible
     * on page and set scroll event
     */
    let isMenuVisible;
    window.addEventListener('load', () => {
      isMenuVisible = isElementVisible('.sprk-c-Masthead__menu');
      toggleScrollEvent(isMenuVisible);
    });
    /*
     * If the mobile menu visibility changes
     * toggle scroll event listener
     */
    window.addEventListener(
      'resize',
      throttle(() => {
        const newMenuVisibility = isElementVisible('.sprk-c-Masthead__menu');
        if (isMenuVisible !== newMenuVisibility) {
          toggleScrollEvent(newMenuVisibility);
        }
        isMenuVisible = newMenuVisibility;
      }, 500),
    );

    element.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMobileNav(element, nav, masthead);
    });

    window.addEventListener('scroll', () => {
      addClassOnScroll(masthead, window.scrollY, 10, 'sprk-c-Masthead--scroll');
    });

    mainLayout.addEventListener('focusin', () => {
      const isOpen = !document
        .querySelector('.sprk-c-Masthead__nav-collapsible')
        .classList.contains('sprk-u-HideWhenJs');
      focusTrap(isOpen, nav);
    });

    if (selectorTrigger && selectorDropdown) {
      const selectorTriggerInDropdown = document.querySelector(
        '[data-sprk-selector-dropdown-trigger="dropdown-selector"]',
      );
      const wideSelectorDropdown = document.querySelector(
        '[data-sprk-dropdown="dropdown-selector-wide"]',
      );
      const wideSelectorTriggerInDropdown = document.querySelector(
        '[data-sprk-selector-dropdown-trigger="dropdown-selector-wide"]',
      );
      const mastheadSelectorMask = document.querySelector(
        '[data-sprk-masthead-mask]',
      );
      const selectorDropdownChoices = selectorDropdown.querySelectorAll(
        '[data-sprk-dropdown-choice]',
      );

      selectorTrigger.addEventListener('click', () => {
        const dropdownIsOpen = selectorDropdown.classList.contains(
          'sprk-c-Dropdown--open',
        );
        if (dropdownIsOpen) {
          hideSelectorMask(mastheadSelectorMask);
        } else {
          showSelectorMask(mastheadSelectorMask);
        }
      });

      selectorTriggerInDropdown.addEventListener('click', () => {
        const dropdownIsOpen = selectorDropdown.classList.contains(
          'sprk-c-Dropdown--open',
        );
        if (dropdownIsOpen) {
          hideSelectorMask(mastheadSelectorMask);
          hideDropDown(selectorDropdown);
        } else {
          showSelectorMask(mastheadSelectorMask);
          showDropDown(selectorDropdown);
        }
      });

      selectorDropdownChoices.forEach((choice) => {
        choice.addEventListener('click', () => {
          hideSelectorMask(mastheadSelectorMask);
        });
      });

      wideSelectorTriggerInDropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const dropdownIsOpen = wideSelectorDropdown.classList.contains(
          'sprk-c-Dropdown--open',
        );
        if (dropdownIsOpen) {
          hideDropDown(wideSelectorDropdown);
        } else {
          showDropDown(wideSelectorDropdown);
        }
      });

      document.addEventListener('click', (e) => {
        if (
          !(
            selectorTrigger.contains(e.target) ||
            selectorDropdown.contains(e.target)
          )
        ) {
          hideSelectorMask(mastheadSelectorMask);
        }
      });

      document.addEventListener('focusin', (e) => {
        /* istanbul ignore else: jsdom cant fire focusin on an element */
        if (!selectorDropdown.contains(e.target)) {
          hideSelectorMask(mastheadSelectorMask);
          hideDropDown(selectorDropdown);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (isEscPressed(e)) {
          hideSelectorMask(mastheadSelectorMask);
        }
      });
    }
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
  showSelectorMask,
  toggleScrollEvent,
  checkScrollDirection,
  toggleMenu,
};
