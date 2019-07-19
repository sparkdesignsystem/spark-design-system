import getElements from '../utilities/getElements';
import toggleClassWithFocus from '../utilities/toggleClassWithFocus';

const bindUIEvents = element => {
  toggleClassWithFocus(element, 'sprk-b-TextInput--float-label');
};
const hugeTextInput = () => {
  getElements('[data-sprk-input="hugeTextInput"]', bindUIEvents);
};

export { hugeTextInput, bindUIEvents };
