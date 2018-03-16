import {toggleValue} from '../utilities/toggleValue';
import {getElements} from '../utilities/getElements';

function passwordInput () {
  getElements('[data-sprk-input="password"]', bindUIEvents);
}

function bindUIEvents (element) {
  const field = element.querySelectorAll('input')[0];
  const checkbox = element.querySelectorAll('input[type=checkbox]')[0];

  // set up the 'show password' button
  checkbox.addEventListener('change', () => {
    field.setAttribute('type', toggleValue(field.getAttribute('type'), 'text', 'password'));
  });
}

export {
  passwordInput
};
