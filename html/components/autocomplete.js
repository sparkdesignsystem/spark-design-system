/* global document */
import getElements from '../utilities/getElements';
import { isEscPressed } from '../utilities/keypress';
import generateAriaControls from '../utilities/generateAriaControls';

const showAutocomplete = (list) => {
  // dropdown.classList.add('sprk-c-Dropdown--open');
  list.classList.remove('sprk-u-Display--none');
};

const hideAutocomplete = (list) => {
  // dropdown.classList.add('sprk-c-Dropdown--open');
  list.classList.add('sprk-u-Display--none');
};

const bindUIEvents = (autocompleteContainer) => {
  const announcement = autocompleteContainer.querySelector('div');
  const input = autocompleteContainer.querySelector('input');
  const list = autocompleteContainer.querySelector('ul');

  generateAriaControls(input, list, 'autocomplete');

  input.addEventListener('focusin', (e) => {
    // if we have recent searches
    showAutocomplete(list);
  });

  document.addEventListener('keydown', (e) => {
    if (isEscPressed(e)) {
      hideAutocomplete(list);
    }
  });

  document.addEventListener('click', (e) => {
    if (!(input.contains(e.target) || list.contains(e.target))) {
      hideAutocomplete(list);
    }
  });
};

const autocomplete = () => {
  getElements('[data-sprk-autocomplete]', bindUIEvents);
};

export { autocomplete, bindUIEvents };
