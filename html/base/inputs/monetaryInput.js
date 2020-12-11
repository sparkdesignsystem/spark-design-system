/* global Number */
import getElements from '../../utilities/getElements';
import setValidTextInput from '../../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../../utilities/validation/setInvalidTextInput';
import runValidation from '../../utilities/validation/validation-runner';

const formatMonetary = (value) =>
  Number(value.replace(/,/g, ''))
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    .replace(/\$/g, '');

const bindUIEvents = (element) => {
  const field = element.querySelector('input');

  field.addEventListener('input', () => {
    runValidation(element, field, setValidTextInput, setInvalidTextInput);
  });

  field.addEventListener('blur', () => {
    if (
      runValidation(element, field, setValidTextInput, setInvalidTextInput) &&
      field.value !== ''
    ) {
      field.value = formatMonetary(field.value);
    }
  });
};

const monetaryInput = () => {
  getElements('[data-sprk-input="monetary"]', bindUIEvents);
};

export { monetaryInput, formatMonetary, bindUIEvents };
