import {getElements} from '../utilities/getElements';
import {isValidDate} from '../utilities/validation/isValidDate';
import {setValidTextInput} from '../utilities/validation/setValidTextInput';
import {setInvalidTextInput} from '../utilities/validation/setInvalidTextInput';

function dateInput () {
  getElements('[data-sprk-input="date"]', bindUIEvents);
}

function bindUIEvents (element) {
  const field = element.querySelectorAll('input')[0];

  field.addEventListener('keyup', () => {
    runValidation(element);
  });

  field.addEventListener('blur', () => {
    if (runValidation(element)) {
      field.value = formatDate(field.value);
    }
  });
}

function runValidation (element) {
  const field = element.querySelectorAll('input')[0];
  const validTest = isValidDate(field.value);
  if (validTest) {
    setValidTextInput(element);
  } else {
    setInvalidTextInput(element, 'There is an error on this field.');
  }
  return validTest;
}

function formatDate (value) {
  let newValue = "";
  const cleanValue = value.replace(/[\/-]/g, '');
  for (let i = 0; i < cleanValue.length; i++) {
    if (i === 1 || i === 3) {
      newValue += `${cleanValue[i]}/`;
    } else {
      newValue += cleanValue[i];
    }
  }
  return newValue;
}

export {
  dateInput,
  formatDate,
  runValidation
};
