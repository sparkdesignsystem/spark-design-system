import getElements from '../utilities/getElements';

const showDropDown = (container) => {
  const subNav = container.querySelector('.sprk-c-WideNavigation--sub');
  if (subNav) {
    subNav.classList.remove('sprk-u-Hide');
  }
};

const bindUIEvents = (element) => {
  element.addEventListener('focusin', (e) => {
    getElements('.sprk-c-WideNavigation--sub', (nav) => {
      nav.classList.add('sprk-u-Hide');
    });
    showDropDown(element);
    e.stopPropagation();
  });
};

const WideNavigation = () => {
  getElements('[data-sprk-navigation="wide"] > .sprk-c-WideNavigation__item', bindUIEvents);
};

export {
  WideNavigation,
  showDropDown,
};
