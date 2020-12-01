import getElements from '../../utilities/getElements';
import setValidTextInput from '../../utilities/validation/setValidTextInput';
import setInvalidTextInput from '../../utilities/validation/setInvalidTextInput';

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

  field.addEventListener('input', () => {
    runValidation(element);
  });

  field.addEventListener('blur', () => {
    runValidation(element);
  });
};

const requiredTextInput = () => {
  getElements('[data-sprk-required-only="text"]', bindUIEvents);
};

export { requiredTextInput, runValidation, bindUIEvents };
