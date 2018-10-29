/* global document */
import getElements from '../utilities/getElements';

const showDropDown = (container) => {
  const subNavContainer = container.querySelector('.sprk-c-WideNavigation__sub-menu-container');
  if (subNavContainer) {
    subNavContainer.classList.remove('sprk-u-Display--none');
    container.setAttribute('aria-expanded', 'true');
  }
};

const hideAllDropDowns = (subNavs, listItems) => {
  subNavs.forEach((item) => {
    item.classList.add('sprk-u-Display--none');
  });
  listItems.forEach((item) => {
    item.setAttribute('aria-expanded', 'false');
  });
};

const bindUIEvents = (element) => {
  const subNavContainers = document.querySelectorAll('.sprk-c-WideNavigation__sub-menu-container');
  const expandableListItems = document.querySelectorAll('.sprk-c-WideNavigation [aria-expanded]');

  element.addEventListener('focusin', (e) => {
    e.stopPropagation();
    if (e.target.querySelector('.sprk-c-WideNavigation--sub')) {
      e.target.classList.add('sprk-c-WideNavigation__item--open');
      hideAllDropDowns(subNavContainers, expandableListItems);
      showDropDown(element);
    }
  });
  element.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    if (e.target.querySelector('.sprk-c-WideNavigation--sub')) {
      e.target.classList.add('sprk-c-WideNavigation__item--open');
      hideAllDropDowns(subNavContainers, expandableListItems);
      showDropDown(element);
    }
  });
  element.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    if (e.target.querySelector('.sprk-c-WideNavigation--sub')) {
      e.target.classList.remove('sprk-c-WideNavigation__item--open');
      hideAllDropDowns(subNavContainers, expandableListItems);
    }
  });
};

const WideNavigation = () => {
  getElements('[data-sprk-navigation="wide"] > .sprk-c-WideNavigation__item', bindUIEvents);
};

export {
  WideNavigation, showDropDown, hideAllDropDowns, bindUIEvents,
};
