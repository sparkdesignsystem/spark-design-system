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

const formatPhone = (value) => {
  const newValue = `${value}`.replace(/\D/g, '');
  const m = newValue.match(/^(\d{3})(\d{3})(\d{4})$/);
  return m === false || m === null ? null : `(${m[1]}) ${m[2]}-${m[3]}`;
};

const bindUIEvents = (element) => {
  const field = element.querySelector('input');

  // set up the validation and formatter
  field.addEventListener('keyup', () => {
    if (runValidation(element)) {
      field.value = formatPhone(field.value);
    }
  });
};

const phoneInput = () => {
  getElements('[data-sprk-input="phone"]', bindUIEvents);
};

export { phoneInput, formatPhone };
