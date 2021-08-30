/* global document */
import getElements from '../utilities/getElements';
import { isEscPressed } from '../utilities/keypress';

const hideDropDown = (dropdown) => {
  dropdown.classList.remove('sprk-c-Dropdown--open');
  dropdown.classList.add('sprk-c-Dropdown--is-hidden');
};

const showDropDown = (dropdown) => {
  dropdown.classList.add('sprk-c-Dropdown--open');
  dropdown.classList.remove('sprk-c-Dropdown--is-hidden');
};

const removeActiveStatus = (choices) => {
  choices.forEach((choice) => {
    choice.classList.remove('sprk-c-Dropdown__link--active');
  });
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
  const triggerText = dropdownTrigger.querySelector(
    '[data-sprk-dropdown-trigger-text-container]',
  );
  const dropdownElement = document.querySelector(
    `[data-sprk-dropdown="${id}"]`,
  );
  const dropdownChoices = dropdownElement.querySelectorAll(
    '[data-sprk-dropdown-choice]',
  );

  dropdownTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropDown(dropdownElement);
  });

  document.addEventListener('click', (e) => {
    if (
      !(
        dropdownElement.contains(e.target) || dropdownTrigger.contains(e.target)
      )
    ) {
      hideDropDown(dropdownElement);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideDropDown(dropdownElement);
    }
  });

  document.addEventListener('focusin', (e) => {
    /* istanbul ignore else: jsdom cant fire focusin on an element */
    if (!dropdownElement.contains(e.target)) {
      hideDropDown(dropdownElement);
    }
  });

  dropdownChoices.forEach((choice) => {
    const value = choice.getAttribute('data-sprk-dropdown-choice');
    choice.addEventListener('click', (e) => {
      e.preventDefault();
      if (triggerText) {
        triggerText.textContent = value;
      }
      removeActiveStatus(dropdownChoices);
      choice.classList.add('sprk-c-Dropdown__link--active');
      hideDropDown(dropdownElement);
    });
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
  removeActiveStatus,
};
