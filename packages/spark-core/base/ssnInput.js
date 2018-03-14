import {toggleValue} from '../utilities/toggleValue';
import {getElements} from '../utilities/getElements';
import {isValidSSN} from '../utilities/validation/isValidSSN';
import {setValidTextInput} from '../utilities/validation/setValidTextInput';
import {setInvalidTextInput} from '../utilities/validation/setInvalidTextInput';

function ssnInput () {
  getElements('[data-sprk-input="ssn"]', bindUIEvents);
}

function bindUIEvents (element) {
  const field = element.querySelectorAll('input')[0];
  const checkbox = element.querySelectorAll('input[type=checkbox]')[0];

  // set up the 'show ssn' button
  checkbox.addEventListener('change', () => {
    field.setAttribute('type', toggleValue(field.getAttribute('type'), 'text', 'password'));
  });

  // set up the validation and formatter
  field.addEventListener('keyup', () => {
    if (isValidSSN(field.value)) {
      field.value = formatSSN(field.value);
      setValidTextInput(element);
    } else {
      // set Invalid
      setInvalidTextInput(element, 'There is an error on this field.');
    }
  });
}

function formatSSN (value) {
  let val = value.replace(/-/g, '');
  let newVal = '';
  const sizes = [3, 2, 4];

  for (const i in sizes) {
    if (val.length > sizes[i]) {
      newVal += `${val.substr(0, sizes[i])}-`;
      val = val.substr(sizes[i]);
    } else {
      break;
    }
  }

  newVal += val;
  return newVal;
}

export {
  ssnInput,
  formatSSN
};
