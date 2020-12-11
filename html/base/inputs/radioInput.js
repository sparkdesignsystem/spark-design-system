import getElements from '../../utilities/getElements';
import generateIdForInput from '../../utilities/generateIdForInput';

const bindRadioUIEvents = (element) => {
  const inputElement = element.querySelector('input[type="radio"]');
  const labelElement = element.querySelector('label');
  generateIdForInput(inputElement, labelElement, 'radio');
};

const radioInput = () => {
  getElements('[data-sprk-input="radio"]', bindRadioUIEvents);
};

export { radioInput, bindRadioUIEvents };
