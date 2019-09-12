import getElements from '../utilities/getElements';
import toggleClassWithValue from '../utilities/toggleClassWithValue';
import addClassIfNotEmpty from '../utilities/addClassIfNotEmpty';

/*
 * TODO: Deprecate the code below
 * that adds the class of `sprk-b-TextInput--float-label`
 * in favor of the more universal `sprk-b-Input--has-floating-label`.
 */
const bindUIEvents = element => {
  addClassIfNotEmpty(element, 'sprk-b-TextInput--float-label');
  toggleClassWithValue(element, 'sprk-b-TextInput--float-label', 'input');
};

const bindUIEventsHugeInput = element => {
  addClassIfNotEmpty(element, 'sprk-b-Input--has-floating-label');
  if (element.tagName === 'SELECT') {
    toggleClassWithValue(element, 'sprk-b-Input--has-floating-label', 'change');
  } else {
    toggleClassWithValue(element, 'sprk-b-Input--has-floating-label', 'input');
  }
};

const hugeTextInput = () => {
  /*
   * TODO: Deprecate the code below
   * that gets elements with `data-sprk-input="hugeTextInput"`
   * in favor of the more universal `data-sprk-input="huge"`.
   */
  getElements('[data-sprk-input="hugeTextInput"]', bindUIEvents);

  getElements('[data-sprk-input="huge"]', bindUIEventsHugeInput);
};

export { hugeTextInput, bindUIEventsHugeInput, bindUIEvents };
