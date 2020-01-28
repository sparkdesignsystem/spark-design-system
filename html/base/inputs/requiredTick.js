import getElements from '../../utilities/getElements';
import setInvalidTick from '../../utilities/validation/setInvalidTick';
import setValidTick from '../../utilities/validation/setValidTick';

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

const bindUIEvents = (element) => {
  element.addEventListener('change', () => {
    runValidation(element);
  });

  element.addEventListener('focusout', () => {
    runValidation(element);
  });
};

const requiredTick = () => {
  getElements('[data-sprk-required-only="tick"]', bindUIEvents);
};

export { requiredTick, runValidation, bindUIEvents };
