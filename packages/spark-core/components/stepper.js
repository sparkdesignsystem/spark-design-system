/* global document */
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
  if (!steps) {return;}
  const stepPanels = stepper.querySelectorAll('[role="tabpanel"]');
  const activeClass = 'sprk-c-Stepper__step--selected';
  const hasSlideEffect = stepper.querySelector('[data-sprk-stepper="description"]');
  let sliderEl;

  steps[0].classList.add('sprk-c-Stepper__step--first');
  steps[(steps.length - 1)].classList.add('sprk-c-Stepper__step--last');

  // If the stepper has stepper descriptions then build slider
  if (hasSlideEffect) {
    sliderEl = document.createElement('li');
    sliderEl.classList.add('sprk-c-Stepper__slider');
    sliderEl.setAttribute('data-sprk-stepper', 'slider');
    stepper.prepend(sliderEl);
  }

  steps.forEach((step, index) => {
    const stepTrigger = step.querySelector('[role="tab"]');
    if (!stepTrigger) { return; }
    if (hasSlideEffect) step.classList.add('sprk-c-Stepper__step--has-slider');

    stepTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      resetTabs(steps, stepPanels, activeClass, sliderEl);
      setActiveTab(step, stepPanels[index], activeClass, sliderEl);
    });
  });

  stepper.addEventListener('keydown', (event) => {
    console.log(handleTabKeydown);
    handleTabKeydown(event, steps, stepPanels, activeClass, sliderEl);
  });
};

const stepper = () => {
  getElements('[data-sprk-stepper="container"]', bindUIEvents);
};

export {
  stepper,
  bindUIEvents,
};
