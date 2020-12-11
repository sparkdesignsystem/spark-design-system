import toggleValue from '../../utilities/toggleValue';
import getElements from '../../utilities/getElements';
import setValidTextInput from '../../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../../utilities/validation/setInvalidTextInput';
import runValidation from '../../utilities/validation/validation-runner';

const formatSSN = (value) => {
  let val = value.trim().replace(/-/g, '');
  let newVal = '';
  const sizes = [3, 2, 4];

  sizes.forEach((size) => {
    if (val.length > size) {
      newVal += `${val.substr(0, size)}-`;
      val = val.substr(size);
    }
  });

  newVal += val;
  return newVal;
};

const bindUIEvents = (element) => {
  const field = element.querySelector('input');
  const checkbox = element.querySelector('input[type=checkbox]');

  // set up the 'show ssn' button
  checkbox.addEventListener('change', () => {
    field.setAttribute(
      'type',
      toggleValue(field.getAttribute('type'), 'text', 'password'),
    );
  });

  // set up the validation and formatter
  field.addEventListener('input', () => {
    if (runValidation(element, field, setValidTextInput, setInvalidTextInput)) {
      field.value = formatSSN(field.value);
    }
  });

  // set up the validation and formatter
  field.addEventListener('blur', () => {
    if (runValidation(element, field, setValidTextInput, setInvalidTextInput)) {
      field.value = formatSSN(field.value);
    }
  });
};

const ssnInput = () => {
  getElements('[data-sprk-input="ssn"]', bindUIEvents);
};

export { ssnInput, formatSSN, bindUIEvents };
