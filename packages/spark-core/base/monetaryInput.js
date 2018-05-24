import getElements from '../utilities/getElements';
import setValidTextInput from '../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../utilities/validation/setInvalidTextInput';

const runValidation = (element) => {
  const field = element.querySelector('input');
  const validTest = field.validity.valid;
  if (validTest) {
    setValidTextInput(element);
  } else {
    setInvalidTextInput(element, 'There is an error on this field.');
  }
  return validTest;
};

const formatMonetary = value =>
  Number(value.replace(/,/g, ''))
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    .replace(/\$/g, '');

const bindUIEvents = (element) => {
  const field = element.querySelector('input');

  field.addEventListener('input', () => {
    runValidation(element);
  });

  field.addEventListener('blur', () => {
    if (runValidation(element)) {
      field.value = formatMonetary(field.value);
    }
  });
};

const monetaryInput = () => {
  getElements('[data-sprk-input="monetary"]', bindUIEvents);
};

export { monetaryInput, formatMonetary };
