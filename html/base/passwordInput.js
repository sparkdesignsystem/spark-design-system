import toggleValue from '../../../utilities/helpers/vanilla/toggleValue';
import getElements from '../../../utilities/helpers/vanilla/getElements';

const bindUIEvents = (element) => {
  const field = element.querySelector('input');
  const checkbox = element.querySelector('input[type=checkbox]');

  // set up the 'show password' button
  checkbox.addEventListener('change', () => {
    field.setAttribute('type', toggleValue(field
      .getAttribute('type'), 'text', 'password'));
  });
};

const passwordInput = () => {
  getElements('[data-sprk-input="password"]', bindUIEvents);
};

export { passwordInput as default };
