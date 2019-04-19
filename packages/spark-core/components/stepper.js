import getElements from '../utilities/getElements';
import { resetTabs, setActiveTab } from './tabs';

const resetSlider = (steps, activeClass, slider) => {
  if (!slider) return;
  steps.forEach(step => {
    const stepDescription = step.querySelector(
      '[data-sprk-stepper="description"]',
    );
    const stepHeading = step.querySelector('.sprk-c-Stepper__step-heading');
    const stepContent = step.querySelector('.sprk-c-Stepper__step-content');

    step.classList.remove(activeClass);
    slider.classList.remove(activeClass);

    stepHeading.classList.remove('sprk-u-Visibility--hidden');

    if (stepDescription) {
      stepDescription.classList.remove('sprk-u-Visibility--hidden');
    }

    stepContent.classList.remove('sprk-c-Stepper__step-content--hidden');
  });
};

const positionSlider = (step, content, slider, activeClass) => {
  if (!slider) return;
  const stepDescription = step.querySelector(
    '[data-sprk-stepper="description"]',
  );
  const stepHeading = step.querySelector('[data-sprk-stepper="heading"]');
  const stepContent = step.querySelector('.sprk-c-Stepper__step-content');
  const sliderTopValue = step.offsetTop;
  const sliderEl = slider;
  // Add active class to new step
  step.classList.add(activeClass);

  if (content) {
    content.classList.remove('sprk-u-HideWhenJs');
  }
  // Show new step panel
  // Create binding for old step HTML
  const stepInnerHTML = step.innerHTML;
  // Update slider with step's HTML
  sliderEl.innerHTML = stepInnerHTML;
  // Hide the icon in the slider to use icon in original step
  const sliderElIcon = sliderEl.querySelector('.sprk-c-Stepper__step-icon');
  sliderElIcon.classList.add('sprk-u-Visibility--hidden');
  // Hide old step content
  if (stepDescription) {
    stepDescription.classList.add('sprk-u-Visibility--hidden');
  }
  stepHeading.classList.add('sprk-u-Visibility--hidden');
  stepContent.classList.add('sprk-c-Stepper__step-content--hidden');
  // Move slider
  sliderEl.style.top = `${sliderTopValue}px`;
  // Add active class to slider
  window.requestAnimationFrame(() => {
    slider.classList.add(activeClass);
  });
  // Set aria selected in slider
  const stepTrigger = slider.querySelector('[role="tab"]');
  stepTrigger.setAttribute('aria-selected', 'true');
  stepTrigger.addEventListener('click', e => {
    e.preventDefault();
  });
};

const bindUIEvents = stepContainer => {
  const steps = stepContainer.querySelectorAll('[data-sprk-stepper="step"]');
  const descriptions = stepContainer.querySelectorAll(
    '[data-sprk-stepper="description"]',
  );
  const activeClass = 'sprk-c-Stepper__step--selected';
  const stepLinks = stepContainer.querySelectorAll('[role="tab"]');
  let sliderEl;

  if (descriptions.length > 0) {
    sliderEl = document.createElement('li');
    sliderEl.classList.add('sprk-c-Stepper__slider');
    sliderEl.setAttribute('data-sprk-stepper', 'slider');
    stepContainer.prepend(sliderEl);
  }

  stepLinks.forEach((stepLink, index) => {
    stepLink.addEventListener('click', e => {
      e.preventDefault();
      resetTabs(steps, descriptions, activeClass);
      setActiveTab(steps[index], descriptions[index], activeClass);
      resetSlider(steps, activeClass, sliderEl);
      positionSlider(steps[index], descriptions[index], sliderEl, activeClass);
    });
  });
};

const stepper = () => {
  getElements('[data-sprk-stepper="container"]', bindUIEvents);
};

export { stepper, positionSlider, resetSlider };
