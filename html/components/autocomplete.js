/* global document */
import getElements from '../utilities/getElements';
import { isEscPressed } from '../utilities/keypress';
import generateAriaControls from '../utilities/generateAriaControls';

const bindUIEvents = (autocompleteContainer) => {
  // TODO these should probably be data-sprk things
  const announcement = autocompleteContainer.querySelector('div');
  const input = autocompleteContainer.querySelector('input');
  const list = autocompleteContainer.querySelector('ul');

  generateAriaControls(input, list, 'autocomplete');

  // document.addEventListener('keydown', (e) => {
  //   if (isEscPressed(e)) {
  //     // hideDropDown(dropdownElement);
  //   }
  // });
};

const autocomplete = () => {
  getElements('[data-sprk-autocomplete]', bindUIEvents);
};

export { autocomplete, bindUIEvents };
