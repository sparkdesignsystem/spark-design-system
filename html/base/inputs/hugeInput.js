import getElements from '../../utilities/getElements';
import toggleClassWithValue from '../../utilities/toggleClassWithValue';
import addClassIfNotEmpty from '../../utilities/addClassIfNotEmpty';

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
  const oldClassName = 'sprk-b-TextInput--float-label';
  const newSelector = '[data-sprk-input="huge"]';
  const newClassName = 'sprk-b-Input--has-floating-label';

  window.addEventListener('load', () => {
    getElements(oldSelector, element => {
      addClassIfNotEmpty(element, oldClassName);
    });
    getElements(newSelector, element => {
      addClassIfNotEmpty(element, newClassName);
    });
  });
  /*
   * TODO: Deprecate the code below
   * that gets elements with the oldSelector
   * in favor of the more universal newSelector.
   */
  getElements(oldSelector, bindUIEvents);

  getElements(newSelector, bindUIEventsHugeInput);
};

export { hugeInput, bindUIEventsHugeInput, bindUIEvents };
