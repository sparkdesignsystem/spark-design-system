import getElements from '../utilities/getElements';
import setValidTextInput from '../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../utilities/validation/setInvalidTextInput';

const runValidation = (element) => {
  const field = element.querySelector('input');
  const hasValue = field.value.trim() !== '';

  if (hasValue) {
    setValidTextInput(element);
  } else {
    setInvalidTextInput(element, 'This field is required.');
  }

  return hasValue;
};

const bindUIEvents = (element) => {
  const field = element.querySelector('input');

  field.addEventListener('blur', () => {
    runValidation(element);
  });

  field.addEventListener('keyup', () => {
    runValidation(element);
  });
};

const requiredTextInput = () => {
  getElements('[data-sprk-required="text"]', bindUIEvents);
};

export { requiredTextInput, runValidation };
