import getElements from '../utilities/getElements';
import toggleClassWithValue from '../utilities/toggleClassWithValue';
import addClassIfNotEmpty from '../utilities/addClassIfNotEmpty';

/*
 * TODO: Deprecate the code below
 * that adds the class of `sprk-b-TextInput--float-label`
 * in favor of the more universal `sprk-b-Input--has-floating-label`.
 */
const bindUIEvents = element => {
  toggleClassWithValue(element, 'sprk-b-TextInput--float-label', 'input');
};

const bindUIEventsHugeInput = element => {
  if (element.tagName === 'SELECT') {
    toggleClassWithValue(element, 'sprk-b-Input--has-floating-label', 'change');
  } else {
    toggleClassWithValue(element, 'sprk-b-Input--has-floating-label', 'input');
  }
};

const hugeInput = () => {
  const oldSelector = '[data-sprk-input="hugeTextInput"]';
  const newSelector = '[data-sprk-input="huge"]';
  window.addEventListener('load', () => {
    const oldInputs = document.querySelectorAll(oldSelector);
    const newInputs = document.querySelectorAll(newSelector);
    if (oldInputs.length > 0) {
      oldInputs.forEach(input => {
        addClassIfNotEmpty(input, 'sprk-b-TextInput--float-label');
      });
    }
    if (newInputs.length > 0) {
      newInputs.forEach(input => {
        addClassIfNotEmpty(input, 'sprk-b-Input--has-floating-label');
      });
    }
  });
  /*
   * TODO: Deprecate the code below
   * that gets elements with `data-sprk-input="hugeTextInput"`
   * in favor of the more universal `data-sprk-input="huge"`.
   */
  getElements(oldSelector, bindUIEvents);

  getElements(newSelector, bindUIEventsHugeInput);
};

export { hugeInput, bindUIEventsHugeInput, bindUIEvents };
