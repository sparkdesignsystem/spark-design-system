/* global */
import getElements from '../utilities/getElements';

/**
 * Takes in the step to select.
 * Add selected CSS classes.
 * Sets aria-selected to true.
 * @param {HTMLElement} step - The step to select.
 */
const selectStep = (step) => {
  const description = step.querySelector('[data-sprk-stepper="description"]');

  step.classList.add('sprk-c-Stepper__step--selected');
  step.setAttribute('aria-selected', 'true');

  if (description) {
    description.classList.remove('sprk-u-HideWhenJs');
  }
};

/**
 * Takes in all the steps.
 * Finds the selected step.
 * Removes selected CSS classes.
 * Sets aria-selected to false.
 * @param {NodeList} steps - Collection of steps in the stepper.
 */
const deselectSteps = (steps) => {
  steps.forEach((step) => {
    const isSelected = step.classList.contains('sprk-c-Stepper__step--selected');
    const description = step.querySelector('[data-sprk-stepper="description"]');

    if (isSelected) {
      step.classList.remove('sprk-c-Stepper__step--selected');
      step.setAttribute('aria-selected', 'false');
      if (description) {
        description.classList.add('sprk-u-HideWhenJs');
      }
    }
  });
};

/**
 * Takes in all the steps.
 * Finds the current selected step.
 * Returns the index of that step.
 * @param {NodeList} steps - Collection of steps in the stepper.
 */
const getSelectedStepIndex = (steps) => {
  let selected = null;
  steps.forEach((step, index) => {
    if (step.classList.contains('sprk-c-Stepper__step--selected')) {
      selected = index;
    }
  });

  return selected;
};

/**
 * Takes in all the steps.
 * Finds the current selected step.
 * Selects the next step.
 * @param {NodeList} steps - Collection of steps in the stepper.
*/
const nextStep = (steps) => {
  const selectedStepIndex = getSelectedStepIndex(steps);
  deselectSteps(steps);

  if (selectedStepIndex + 1 <= steps.length - 1) {
    selectStep(steps[selectedStepIndex + 1]);
  } else {
    selectStep(steps[0]);
  }
};

/**
 * Takes in all the steps.
 * Finds the current selected step.
 * Selects the previous step.
 * @param {NodeList} steps - Collection of steps in the stepper.
*/
const previousStep = (steps) => {
  const selectedStepIndex = getSelectedStepIndex(steps);

  deselectSteps(steps);

  if (selectedStepIndex - 1 === -1) {
    selectStep(steps[steps.length - 1]);
  } else {
    selectStep(steps[selectedStepIndex - 1]);
  }
};

/**
 * Takes in the stepper container.
 * Gets all the steps in container.
 * Binds click listener to each step.
 * @param {NodeList} stepper - Collection of stepper container.
*/
const bindUIEvents = (stepper) => {
  // Get all the steps
  const steps = stepper.querySelectorAll('[data-sprk-stepper="step"]');
  selectStep(steps[getSelectedStepIndex(steps)]);
  // go through each step and attach click handlers to steps
  steps.forEach((step) => {
    const trigger = step.querySelector('[data-sprk-stepper="trigger"]');
    // Show active step
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      deselectSteps(steps);
      selectStep(step);
    });
  });
};

const stepper = () => {
  getElements('[data-sprk-stepper="container"]', bindUIEvents);
};

export {
  stepper,
  selectStep,
  nextStep,
  previousStep,
  deselectSteps,
  getSelectedStepIndex,
  bindUIEvents,
};
