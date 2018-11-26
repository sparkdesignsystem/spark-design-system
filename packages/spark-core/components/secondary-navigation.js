/* global document */
import getElements from '../utilities/getElements';

const showDropDown = (container) => {
  const subNavContainer = container.querySelector('.sprk-c-SecondaryNavigation__sub-menu-container');
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
  const subNavContainers = document.querySelectorAll('.sprk-c-SecondaryNavigation__sub-menu-container');
  const expandableListItems = document.querySelectorAll('.sprk-c-SecondaryNavigation [aria-expanded]');

  element.addEventListener('focusin', (e) => {
    e.stopPropagation();
    hideAllDropDowns(subNavContainers, expandableListItems);
    showDropDown(element);
  });
  element.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    if (e.target.querySelector('.sprk-c-SecondaryNavigation--sub')) {
      e.target.classList.add('sprk-c-SecondaryNavigation__item--open');
      hideAllDropDowns(subNavContainers, expandableListItems);
      showDropDown(element);
    }
  });
  element.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    if (e.target.querySelector('.sprk-c-SecondaryNavigation--sub')) {
      e.target.classList.remove('sprk-c-SecondaryNavigation__item--open');
      hideAllDropDowns(subNavContainers, expandableListItems);
    }
  });
};

const SecondaryNavigation = () => {
  getElements('[data-sprk-navigation="secondary"] > .sprk-c-SecondaryNavigation__item', bindUIEvents);
};

export {
  SecondaryNavigation, showDropDown, hideAllDropDowns, bindUIEvents,
};
