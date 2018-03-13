import {toggleValue} from '../utilities/toggleValue';
import {getElements} from '../utilities/getElements';

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

  // set up the autoformat
  field.addEventListener('blur', () => {
    field.value = formatSSN(field);
  });
}

function formatSSN (element) {
  let val = element.value;
  let newVal = '';
  const sizes = [3, 2, 4];

  if (!isNaN(val) && val.length === 9) {
    for (const i in sizes) {
      if (val.length > sizes[i]) {
        newVal += `${val.substr(0, sizes[i])}-`;
        val = val.substr(sizes[i]);
      } else {
        break;
      }
    }
  }

  newVal += val;
  return newVal;
}

export {
  ssnInput,
  formatSSN
};
