import getElements from '../../utilities/getElements';
import setValidTextInput from '../../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../../utilities/validation/setInvalidTextInput';
import runValidation from '../../utilities/validation/validation-runner';

const formatPhone = (value) => {
  const newValue = `${value}`.replace(/\D/g, '');
  const m = newValue.match(/^(\d{3})(\d{3})(\d{4})$/);
  return m === false || m === null ? null : `(${m[1]}) ${m[2]}-${m[3]}`;
};

const bindUIEvents = (element) => {
  const field = element.querySelector('input');

  // set up the validation and formatter
  field.addEventListener('input', () => {
    if (runValidation(element, field, setValidTextInput, setInvalidTextInput)) {
      field.value = formatPhone(field.value);
    }
  });

  field.addEventListener('blur', () => {
    if (runValidation(element, field, setValidTextInput, setInvalidTextInput)) {
      field.value = formatPhone(field.value);
    }
  });
};

const phoneInput = () => {
  getElements('[data-sprk-input="phone"]', bindUIEvents);
};

export { phoneInput, formatPhone, bindUIEvents };
