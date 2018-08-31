/* global window */
import getElements from '../utilities/getElements';

const valueTest = (element) => {
  if (element.value !== '') {
    element.classList.add('sprk-b-TextInput--has-value');
  } else {
    element.classList.remove('sprk-b-TextInput--has-value');
  }
};

const bindUIEvents = (element) => {
  element.addEventListener('input', () => {
    valueTest(element);
  });

  element.addEventListener('blur', () => {
    valueTest(element);
  });

  element.addEventListener('focusin', () => {
    element.classList.remove('sprk-b-TextInput--focusout');
    element.classList.add('sprk-b-TextInput--focusin');
  });

  element.addEventListener('blur', () => {
    element.classList.remove('sprk-b-TextInput--focusin');
    element.classList.add('sprk-b-TextInput--focusout');
  });
};

const textInput = () => {
  window.addEventListener('load', () => {
    getElements('[data-sprk-input="text"]', (element) => {
      bindUIEvents(element);

      // for failed form submits / back button
      if (element.value !== '') {
        element.classList.add('sprk-b-TextInput--has-value');
        element.classList.add('sprk-b-TextInput--focusout');
      }
    });
  });
};

export { textInput, bindUIEvents };
