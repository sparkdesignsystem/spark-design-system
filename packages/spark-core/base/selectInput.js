/* global window */
import getElements from '../utilities/getElements';

const bindUIEvents = (element) => {
  element.addEventListener('focusin', () => {
    element.classList.remove('sprk-b-Select--focusout');
    element.classList.add('sprk-b-Select--focusin');
  });

  element.addEventListener('blur', () => {
    element.classList.remove('sprk-b-Select--focusin');
    element.classList.add('sprk-b-Select--focusout');
  });
};

const selectInput = () => {
  window.addEventListener('load', () => {
    getElements('[data-sprk-input="select"]', (element) => {
      bindUIEvents(element);
    });
  });
};

export { selectInput, bindUIEvents };
