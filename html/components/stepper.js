import getElements from '../utilities/getElements';
import {
  advanceTab,
  getActiveTabIndex,
  resetTabs,
  retreatTab,
  setActiveTab,
} from './tabs';
import { carousel } from './carousel';

const resetSlider = (steps, slider) => {
  if (!slider) return;
  steps.forEach((step) => {
    const stepDescription = step.querySelector(
      '[data-sprk-stepper="description"]',
    );
    const stepHeading = step.querySelector('.sprk-c-Stepper__step-heading');
    const stepContent = step.querySelector('.sprk-c-Stepper__step-content');

    stepHeading.classList.remove('sprk-u-Visibility--hidden');

    if (stepDescription) {
      stepDescription.classList.remove('sprk-u-Visibility--hidden');
    }

    stepContent.classList.remove('sprk-c-Stepper__step-content--hidden');
  });
  slider.classList.remove('sprk-c-Stepper__slider--active');
};

const positionSlider = (step, content, slider) => {
  if (!slider) return;
  const stepDescription = step.querySelector(
    '[data-sprk-stepper="description"]',
  );
  const stepHeading = step.querySelector('[data-sprk-stepper="heading"]');
  const stepContent = step.querySelector('.sprk-c-Stepper__step-content');
  const sliderTopValue = step.offsetTop;
  const sliderEl = slider;

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
    slider.classList.add('sprk-c-Stepper__slider--active');
  });
  // Set aria selected in slider
  step.setAttribute('aria-selected', 'true');
};

const bindUIEvents = (stepContainer, carouselContainer) => {
  let carouselInstance;
  let windowWidth = window.innerWidth;
  const steps = stepContainer.querySelectorAll('[data-sprk-stepper="step"]');

  steps[0].classList.add('sprk-c-Stepper__step--first');
  steps[steps.length - 1].classList.add('sprk-c-Stepper__step--last');

  const descriptions = stepContainer.querySelectorAll(
    '[data-sprk-stepper="description"]',
  );
  const activeClass = 'sprk-c-Stepper__step--selected';
  let sliderEl;

  if (carouselContainer) {
    carouselInstance = carousel(carouselContainer);
    carouselContainer.addEventListener('sprk.carousel.slide', (e) => {
      e.preventDefault();
      const { index } = e.detail;
      const currentActiveIndex = getActiveTabIndex(steps, activeClass);
      resetTabs(steps, descriptions, activeClass);
      setActiveTab(steps[index], descriptions[index], activeClass, sliderEl);
      resetSlider(steps, sliderEl);
      positionSlider(
        steps[getActiveTabIndex(steps, activeClass)],
        descriptions[getActiveTabIndex(steps, activeClass)],
        sliderEl,
        activeClass,
      );
      if (
        carouselInstance &&
        currentActiveIndex !== getActiveTabIndex(steps, activeClass)
      ) {
        carouselInstance.slideTo(getActiveTabIndex(steps, activeClass));
      }
    });
  }

  if (descriptions.length > 0) {
    sliderEl = document.createElement('li');
    sliderEl.classList.add('sprk-c-Stepper__slider');
    sliderEl.setAttribute('data-sprk-stepper', 'slider');
    stepContainer.prepend(sliderEl);
  }

  // set the active tab
  let indexOfActiveStep = 0;
  steps.forEach((step, index) => {
    if (step.classList.contains('sprk-c-Stepper__step--selected')) {
      indexOfActiveStep = index;
    }
  });

  resetTabs(steps, descriptions, activeClass);
  setActiveTab(
    steps[indexOfActiveStep],
    descriptions[indexOfActiveStep],
    activeClass,
    sliderEl,
  );
  resetSlider(steps, sliderEl);
  positionSlider(
    steps[indexOfActiveStep],
    descriptions[indexOfActiveStep],
    sliderEl,
  );

  steps.forEach((step, index) => {
    step.addEventListener('click', (e) => {
      e.preventDefault();
      resetTabs(steps, descriptions, activeClass);
      setActiveTab(steps[index], descriptions[index], activeClass);
      resetSlider(steps, sliderEl);
      positionSlider(steps[index], descriptions[index], sliderEl, activeClass);

      if (carouselInstance) {
        carouselInstance.slideTo(getActiveTabIndex(steps, activeClass));
      }
    });

    window.addEventListener('resize', () => {
      const activeStep = getActiveTabIndex(steps, activeClass);
      const newViewportWidth = window.innerWidth;
      const sliderBreakpoint = 1279;

      if (
        windowWidth < sliderBreakpoint &&
        newViewportWidth > sliderBreakpoint
      ) {
        resetTabs(steps, descriptions, activeClass);
        setActiveTab(steps[activeStep], descriptions[activeStep], activeClass);
        resetSlider(steps, sliderEl);
        positionSlider(steps[activeStep], descriptions[activeStep], sliderEl);
      }

      if (carouselInstance) {
        carouselInstance.slideTo(getActiveTabIndex(steps, activeClass));
      }

      windowWidth = newViewportWidth;
    });

    step.addEventListener('keydown', (event) => {
      const keys = {
        end: 35,
        home: 36,
        left: 37,
        right: 39,
        up: 38,
        down: 40,
      };

      // if the key pressed isnt in the list of keys, return
      if (
        !Object.keys(keys).some((key) => {
          return keys[key] === event.keyCode;
        })
      ) {
        return;
      }

      if (event.keyCode === keys.left || event.keyCode === keys.up) {
        event.preventDefault();
        retreatTab(steps, descriptions, activeClass);
      } else if (event.keyCode === keys.right || event.keyCode === keys.down) {
        event.preventDefault();
        advanceTab(steps, descriptions, activeClass);
      } else if (event.keyCode === keys.home) {
        event.preventDefault();
        resetTabs(steps, descriptions, activeClass);
        setActiveTab(steps[0], descriptions[0], activeClass);
      } else if (event.keyCode === keys.end) {
        event.preventDefault();
        resetTabs(steps, descriptions, activeClass);
        setActiveTab(
          steps[steps.length - 1],
          descriptions[descriptions.length - 1],
          activeClass,
        );
      }

      resetSlider(steps, sliderEl);
      positionSlider(
        steps[getActiveTabIndex(steps, activeClass)],
        descriptions[getActiveTabIndex(steps, activeClass)],
        sliderEl,
      );

      if (carouselInstance) {
        carouselInstance.slideTo(getActiveTabIndex(steps, activeClass));
      }
    });
  });
};

const stepper = () => {
  getElements('[data-sprk-stepper="container"]', (item) => {
    let carouselContainer;
    const partnerCarouselID = item.getAttribute('data-sprk-stepper-carousel');
    if (partnerCarouselID) {
      carouselContainer = document.querySelector(
        `[data-sprk-carousel=${partnerCarouselID}]`,
      );
    }
    bindUIEvents(item, carouselContainer);
  });
};

export { stepper, bindUIEvents, positionSlider, resetSlider };
