import getElements from '../utilities/getElements';
import isValidDate from '../utilities/validation/isValidDate';
import setValidTextInput from '../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../utilities/validation/setInvalidTextInput';

const runValidation = (element) => {
  const field = element.querySelector('input');
  const validTest = isValidDate(field.value);
  if (validTest) {
    setValidTextInput(element);
  } else {
    setInvalidTextInput(element, 'There is an error on this field.');
  }
  return validTest;
};

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

  field.addEventListener('keyup', () => {
    runValidation(element);
  });

  field.addEventListener('blur', () => {
    if (runValidation(element)) {
      field.value = formatDate(field.value);
    }
  });
};

const dateInput = () => {
  getElements('[data-sprk-input="date"]', bindUIEvents);
};

export { dateInput, formatDate, runValidation };
