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

const bindUIEvents = (field) => {
  const element = field.parentNode;

  field.addEventListener('blur', () => {
    runValidation(element);
  });

  field.addEventListener('input', () => {
    runValidation(element);
  });
};

const requiredTextInput = () => {
  getElements(
    '.sprk-b-InputContainer:not([data-sprk-input]) input:not([type="radio"]):not([type="checkbox"])[required]',
    bindUIEvents,
  );
};

export { requiredTextInput, runValidation };
