/* global document */
import getElements from '../utilities/getElements';

const showDropDown = (dropdown) => {
  dropdown.classList.add('sprk-c-Dropdown--open');
  dropdown.classList.remove('sprk-u-Display--none');
};

const hideDropDown = (dropdown) => {
  dropdown.classList.remove('sprk-c-Dropdown--open');
  dropdown.classList.add('sprk-u-Display--none');
};

const toggleDropDown = (dropdown) => {
  if (dropdown.classList.contains('sprk-c-Dropdown--open')) {
    hideDropDown(dropdown);
  } else {
    showDropDown(dropdown);
  }
};

const bindUIEvents = (dropdownTrigger) => {
  const id = dropdownTrigger.getAttribute('data-sprk-dropdown-trigger');
  const dropdownElement = document.querySelector(`[data-sprk-dropdown="${id}"]`);
  dropdownTrigger.addEventListener('click', () => {
    toggleDropDown(dropdownElement);
  });
};

const dropdowns = () => {
  getElements('[data-sprk-dropdown-trigger]', bindUIEvents);
};

export {
  dropdowns,
  bindUIEvents,
  toggleDropDown,
  hideDropDown,
  showDropDown,
};
