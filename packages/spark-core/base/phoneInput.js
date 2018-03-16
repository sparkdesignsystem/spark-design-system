import {getElements} from '../utilities/getElements';
import {isValidPhone} from '../utilities/validation/isValidPhone';
import {setValidTextInput} from '../utilities/validation/setValidTextInput';
import {setInvalidTextInput} from '../utilities/validation/setInvalidTextInput';

function phoneInput () {
  getElements('[data-sprk-input="phone"]', bindUIEvents);
}

function bindUIEvents (element) {
  const field = element.querySelectorAll('input')[0];

  // set up the validation and formatter
  field.addEventListener('keyup', () => {
    if (runValidation(element)) {
      field.value = formatPhone(field.value);
    }
  });
}

function runValidation (element) {
  const field = element.querySelectorAll('input')[0];
  const validTest = isValidPhone(field.value);
  if (validTest) {
    setValidTextInput(element);
  } else {
    setInvalidTextInput(element, 'There is an error on this field.');
  }
  return validTest;
}

function formatPhone (value) {
  const newValue = (`${value}`).replace(/\D/g, '');
  const m = newValue.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (m === false) ? null : `(${m[1]}) ${m[2]}-${m[3]}`;
}

export {
  phoneInput,
  formatPhone,
  runValidation
};
