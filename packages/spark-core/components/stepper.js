/* global document */
import getElements from '../utilities/getElements';
import {
  handleTabKeydown,
  resetTabs,
  setActiveTab,
} from './tabs';

const setActiveTabAndSlide = (step, stepPanel, sliderEl, activeClass) => {
  const stepPanel1 = stepPanel;
  const tabTrigger = step.querySelector('[role="tab"]');
  const stepContent = step.querySelector('.sprk-c-Stepper__step-content');
  const sliderTopValue = step.offsetTop;
  const slider = sliderEl;
  slider.classList.add(activeClass);
  step.classList.add(activeClass);
  if (stepPanel1) {
    stepPanel1.classList.remove('sprk-u-HideWhenJs');
  }
  tabTrigger.setAttribute('aria-selected', 'true');
  const stepInnerHTML = step.innerHTML;
  stepContent.classList.add('sprk-u-Visibility--hidden');
  stepContent.classList.add('sprk-u-Visibility--hidden');
  slider.innerHTML = stepInnerHTML;
  slider.style.top = `${sliderTopValue}px`;
  tabTrigger.focus();
};

const resetVisibility = (steps) => {
  steps.forEach((step) => {
    const stepContent = step.querySelector('.sprk-c-Stepper__step-content');
    if (stepContent.classList.contains('sprk-u-Visibility--hidden')) {
      stepContent.classList.remove('sprk-u-Visibility--hidden');
    }
  });
};

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
  const hasSlideEffect = stepper.querySelector('.sprk-c-Stepper__step-description');
  let sliderEl;

  // If the stepper has stepper descriptions then build slider
  if (hasSlideEffect) {
    sliderEl = document.createElement('li');
    sliderEl.classList.add('sprk-c-Stepper__slider');
    stepper.prepend(sliderEl);
  }

  steps.forEach((step, index) => {
    const stepTrigger = step.querySelector('[role="tab"]');
    if (hasSlideEffect) step.classList.add('sprk-c-Stepper__step--has-slider');

    stepTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      resetTabs(steps, stepPanels, activeClass);
      if (hasSlideEffect) {
        resetVisibility(steps);
        setActiveTabAndSlide(step, stepPanels[index], sliderEl, activeClass);
      } else {
        setActiveTab(step, stepPanels[index], activeClass);
      }
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
