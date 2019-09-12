import getElements from '../utilities/getElements';
import toggleClassWithValue from '../utilities/toggleClassWithValue';

/*
 * TODO: Deprecate the code below
 * that adds the class of `sprk-b-TextInput--float-label`
 * in favor of the more universal `sprk-b-Input--has-floating-label`.
 */
const bindUIEvents = element => {
  toggleClassWithValue(element, 'sprk-b-TextInput--float-label');
};

const bindUIEventsHugeInput = element => {
  toggleClassWithValue(element, 'sprk-b-Input--has-floating-label');
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
