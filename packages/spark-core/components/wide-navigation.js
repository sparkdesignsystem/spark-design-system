/* global document */
import getElements from '../utilities/getElements';

const showDropDown = (container) => {
  const subNav = container.querySelector('.sprk-c-WideNavigation--sub');
  if (subNav) {
    subNav.classList.remove('sprk-u-Display--none');
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
  const subNavs = document.querySelectorAll('.sprk-c-WideNavigation--sub');
  const expandableListItems = document.querySelectorAll('.sprk-c-WideNavigation [aria-expanded]');

  element.addEventListener('focusin', (e) => {
    e.stopPropagation();
    hideAllDropDowns(subNavs, expandableListItems);
    showDropDown(element);
  });
  element.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    hideAllDropDowns(subNavs, expandableListItems);
    showDropDown(element);
  });
  element.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    hideAllDropDowns(subNavs, expandableListItems);
  });
};

const WideNavigation = () => {
  getElements('[data-sprk-navigation="wide"] > .sprk-c-WideNavigation__item', bindUIEvents);
};

export {
  WideNavigation, showDropDown, hideAllDropDowns, bindUIEvents,
};
