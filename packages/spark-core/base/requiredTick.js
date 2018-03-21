import getElements from '../utilities/getElements';
import setInvalidTick from '../utilities/validation/setInvalidTick';
import setValidTick from '../utilities/validation/setValidTick';

const runValidation = (element) => {
  const inputs = element.querySelectorAll('input');
  let selectionMade = false;

  inputs.forEach((input) => {
    if (input.checked) {
      selectionMade = true;
    }
  });

  if (selectionMade) {
    setValidTick(element);
  } else {
    setInvalidTick(element, 'This field is required.');
  }

  return selectionMade;
};

// cant really cause keyup without making a choice, but an app can trigger keyup on submission of a
// form to test for validity
const bindUIEvents = (element) => {
  element.addEventListener('keyup', () => {
    runValidation(element);
  });
};

const requiredTick = () => {
  getElements('[data-sprk-required="tick"]', bindUIEvents);
};

export { requiredTick, runValidation };
