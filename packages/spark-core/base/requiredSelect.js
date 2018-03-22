import getElements from '../utilities/getElements';
import setInvalidSelect from '../utilities/validation/setInvalidSelect';
import setValidSelect from '../utilities/validation/setValidSelect';

const runValidation = (element) => {
  const select = element.querySelector('select');
  let selectionMade = false;

  if (select.value && select.value !== 'not-selected') {
    selectionMade = true;
  }

  if (selectionMade) {
    setValidSelect(element);
  } else {
    setInvalidSelect(element, 'This field is required.');
  }

  return selectionMade;
};

// cant really cause keyup without making a choice, but an app can trigger keyup on submission of a
// form to test for validity
const bindUIEvents = (element) => {
  element.addEventListener('keyup', () => {
    runValidation(element);
  });
  element.addEventListener('change', () => {
    runValidation(element);
  });
};

const requiredSelect = () => {
  getElements('[data-sprk-required="select"]', bindUIEvents);
};

export { requiredSelect, runValidation };
