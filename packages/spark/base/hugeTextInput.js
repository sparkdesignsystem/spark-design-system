import getElements from '../utilities/getElements';
import toggleClassWithValue from '../utilities/toggleClassWithValue';

const bindUIEvents = element => {
  toggleClassWithValue(element, 'sprk-b-TextInput--float-label');
};
const hugeTextInput = () => {
  getElements('[data-sprk-input="hugeTextInput"]', bindUIEvents);
};

export { hugeTextInput, bindUIEvents };
