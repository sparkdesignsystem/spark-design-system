import getElements from '../utilities/getElements';

const bindUIEvents = (element) => {
  element.addEventListener('input', () => {
    if (element.value !== '') {
      element.classList.add('sprk-b-TextInput--has-value');
    } else {
      element.classList.remove('sprk-b-TextInput--has-value');
    }
  });

  element.addEventListener('focusin', () => {
    element.classList.remove('sprk-b-TextInput--focusout');
    element.classList.add('sprk-b-TextInput--focusin');
  });

  element.addEventListener('focusout', () => {
    element.classList.remove('sprk-b-TextInput--focusin');
    element.classList.add('sprk-b-TextInput--focusout');
  });
};


const textInput = () => {
  getElements('[data-sprk-input="text"]', (element) => {
    bindUIEvents(element);
  });
};

export { textInput, bindUIEvents };
