import getElements from '../../utilities/getElements';
import generateIdForInput from '../../utilities/generateIdForInput';

const bindCheckboxUIEvents = (element) => {
  const inputElement = element.querySelector('input[type="checkbox"]');
  const labelElement = element.querySelector('label');
  generateIdForInput(inputElement, labelElement, 'checkbox');
};

const checkbox = () => {
  getElements('[data-sprk-input="checkbox"]', bindCheckboxUIEvents);
};

export {
  checkbox, bindCheckboxUIEvents
};