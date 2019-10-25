import getElements from '../../../utilities/helpers/vanilla/getElements';
import
setValidTextInput
  from '../../../utilities/validation/vanilla/setValidTextInput';
import
setInvalidTextInput
  from '../../../utilities/validation/vanilla/setInvalidTextInput';
import
runValidation from '../../../utilities/validation/vanilla/validation-runner';

const formatDate = (value) => {
  let newValue = '';
  const cleanValue = value.replace(/[/-]/g, '');
  for (let i = 0; i < cleanValue.length; i += 1) {
    if (i === 1 || i === 3) {
      newValue += `${cleanValue[i]}/`;
    } else {
      newValue += cleanValue[i];
    }
  }
  return newValue;
};

const bindUIEvents = (element) => {
  const field = element.querySelector('input');

  field.addEventListener('input', () => {
    if (runValidation(element, field, setValidTextInput, setInvalidTextInput)) {
      field.value = formatDate(field.value);
    }
  });

  field.addEventListener('blur', () => {
    if (runValidation(element, field, setValidTextInput, setInvalidTextInput)) {
      field.value = formatDate(field.value);
    }
  });
};

const dateInput = () => {
  getElements('[data-sprk-input="date"]', bindUIEvents);
};

export { dateInput, formatDate, bindUIEvents };
