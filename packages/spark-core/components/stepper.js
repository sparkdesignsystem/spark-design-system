/* global */
import getElements from '../utilities/getElements';
import {
  handleTabKeydown,
  resetTabs,
  setActiveTab,
} from './tabs';

/**
 * Takes in the stepper container.
 * Gets all the steps in container.
 * Binds click listener to each step.
 * Binds keydown listener to each step.
 * @param {NodeList} stepper - Collection of stepper container.
*/
const bindUIEvents = (stepper) => {
  const steps = stepper.querySelectorAll('[data-sprk-stepper="step"]');
  const stepPanels = stepper.querySelectorAll('[role="tabpanel"]');
  const activeClass = 'sprk-c-Stepper__step--selected';

  steps.forEach((step, index) => {
    const stepTrigger = step.querySelector('[role="tab"]');

    stepTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      resetTabs(steps, stepPanels, activeClass);
      setActiveTab(step, stepPanels[index], activeClass);
    });
  });

  stepper.addEventListener('keydown', (event) => {
    handleTabKeydown(event, steps, stepPanels, activeClass);
  });
};

const stepper = () => {
  getElements('[data-sprk-stepper="container"]', bindUIEvents);
};

export {
  stepper,
  bindUIEvents,
};
