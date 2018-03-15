import {getElements} from '../utilities/getElements';
import {isValidMonetary} from '../utilities/validation/isValidMonetary';
import {setValidTextInput} from '../utilities/validation/setValidTextInput';
import {setInvalidTextInput} from '../utilities/validation/setInvalidTextInput';

function monetaryInputs () {
  getElements('[data-sprk-input="monetary"]', bindUIEvents);
}

function bindUIEvents (element) {
  const field = element.querySelectorAll('input')[0];

  field.addEventListener('keyup', () => {
    runValidation(element);
  });

  field.addEventListener('blur', () => {
    if (runValidation(element)) {
      field.value = formatMonetary(field.value);
    }
  });
}

function runValidation (element) {
  const field = element.querySelectorAll('input')[0];
  const validTest = isValidMonetary(field.value);
  if (validTest) {
    setValidTextInput(element);
  } else {
    setInvalidTextInput(element, 'There is an error on this field.');
  }
  return validTest;
}

function formatMonetary (value) {
  return Number(value.replace(/,/g, ''))
    .toLocaleString('en-US', {style: 'currency', currency: 'USD'})
    .replace(/\$/g, '');
}

export {
  monetaryInputs,
  formatMonetary,
  runValidation
};
