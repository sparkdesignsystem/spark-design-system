/* global window */
import getElements from '../utilities/getElements';

const resetSliderVisibility = (tab, activeClass, slider) => {
  const stepDescription = tab.querySelector('[data-sprk-stepper="description"]');
  const stepHeading = tab.querySelector('.sprk-c-Stepper__step-heading');
  const stepContent = tab.querySelector('.sprk-c-Stepper__step-content');

  if (tab.classList.contains(activeClass)) {
    tab.classList.remove(activeClass);
  }

  if (slider.classList.contains(activeClass)) {
    slider.classList.remove(activeClass);
  }

  if (stepDescription.classList.contains('sprk-u-Visibility--hidden')) {
    stepDescription.classList.remove('sprk-u-Visibility--hidden');
  }

  if (stepHeading.classList.contains('sprk-u-Visibility--hidden')) {
    stepHeading.classList.remove('sprk-u-Visibility--hidden');
  }

  if (stepContent.classList.contains('sprk-c-Stepper__step-content--hidden')) {
    stepContent.classList.remove('sprk-c-Stepper__step-content--hidden');
  }
};

// all the role=tab get aria-selected=false, get active class removed, hide all panels
const resetTabs = (tabs, tabpanels, activeClass, slider) => {
  tabs.forEach((tab) => {
    const isStepper = tab.hasAttribute('data-sprk-stepper');
    tab.classList.remove(activeClass);
    if (isStepper) {
      const tabTrigger = tab.querySelector('[role="tab"]');
      tabTrigger.setAttribute('aria-selected', 'false');
    } else {
      tab.setAttribute('aria-selected', 'false');
    }
    tabpanels.forEach((panel) => {
      panel.classList.add('sprk-u-HideWhenJs');
    });
    if (slider) resetSliderVisibility(tab, activeClass, slider);
  });
};

// correct role=tab get aria-selected=true, get active class added, show correct panel
const setActiveTab = (tab, tabpanel, activeClass, slider, isInit) => {
  if (slider) {
    const stepDescription = tab.querySelector('[data-sprk-stepper="description"]');
    const stepHeading = tab.querySelector('[data-sprk-stepper="heading"]');
    const stepContent = tab.querySelector('.sprk-c-Stepper__step-content');
    const sliderTopValue = tab.offsetTop;
    const sliderEl = slider;
    // Add active class to new step
    tab.classList.add(activeClass);
    // Show new step panel
    tabpanel.classList.remove('sprk-u-HideWhenJs');
    // Create binding for old step HTML
    const stepInnerHTML = tab.innerHTML;
    // Update slider with step's HTML
    sliderEl.innerHTML = stepInnerHTML;
    // Hide the icon in the slider to use icon in original step
    const sliderElIcon = sliderEl.querySelector('.sprk-c-Stepper__step-icon');
    sliderElIcon.classList.add('sprk-u-Visibility--hidden');
    // Hide old step content
    stepDescription.classList.add('sprk-u-Visibility--hidden');
    stepHeading.classList.add('sprk-u-Visibility--hidden');
    stepContent.classList.add('sprk-c-Stepper__step-content--hidden');
    // Move slider
    sliderEl.style.top = `${sliderTopValue}px`;
    // Add active class to slider
    window.requestAnimationFrame(()=> {
      slider.classList.add(activeClass)
    });
    // Set aria selected in slider
    const stepTrigger = slider.querySelector('[role="tab"]');
    stepTrigger.setAttribute('aria-selected', 'true');
    stepTrigger.addEventListener('click', (e) => {
      e.preventDefault();
    });
    if (!isInit) stepTrigger.focus();
  } else {
    const isStepper = tab.hasAttribute('data-sprk-stepper');
    tab.classList.add(activeClass);
    if (tabpanel) tabpanel.classList.remove('sprk-u-HideWhenJs');

    if (isStepper) {
      const tabTrigger = tab.querySelector('[role="tab"]');
      tabTrigger.setAttribute('aria-selected', 'true');
      if (!isInit) tabTrigger.focus();
    } else {
      tab.setAttribute('aria-selected', 'true');
      if (!isInit) tab.focus();
    }
  }
};

const getActiveTabIndex = (tabs, activeClass) => {
  let activeIndex = null;
  tabs.forEach((tab, index) => {
    if (tab.classList.contains(activeClass)) {
      activeIndex = index;
    }
  });

  return activeIndex;
};

const advanceTab = (tabs, tabpanels, activeClass, slider) => {
  const activeIndex = getActiveTabIndex(tabs, activeClass);
  resetTabs(tabs, tabpanels, activeClass, slider);
  if (activeIndex + 1 <= tabs.length - 1) {
    setActiveTab(tabs[activeIndex + 1], tabpanels[activeIndex + 1], activeClass, slider);
  } else {
    setActiveTab(tabs[0], tabpanels[0], activeClass, slider);
  }
};

const retreatTab = (tabs, tabpanels, activeClass, slider) => {
  const activeIndex = getActiveTabIndex(tabs, activeClass);
  resetTabs(tabs, tabpanels, activeClass, slider);
  if (activeIndex - 1 === -1) {
    setActiveTab(tabs[tabs.length - 1], tabpanels[tabs.length - 1], activeClass, slider);
  } else {
    setActiveTab(tabs[activeIndex - 1], tabpanels[activeIndex - 1], activeClass, slider);
  }
};

const ariaOrientation = (width, element) => {
  // switch aria-orientation to vertical on mobile (based on _tabs.scss breakpoint)
  if (width <= 736) {
    element.setAttribute('aria-orientation', 'vertical');
  } else {
    element.setAttribute('aria-orientation', 'horizontal');
  }
};

const handleTabKeydown = (event, tabs, tabpanels, activeClass, slider) => {
  const keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    tab: 9,
  };

  if (event.keyCode === keys.left || event.keyCode === keys.up) {
    event.preventDefault();
    retreatTab(tabs, tabpanels, activeClass, slider);
  } else if (event.keyCode === keys.right || event.keyCode === keys.down) {
    event.preventDefault();
    advanceTab(tabs, tabpanels, activeClass, slider);
  } else if (event.keyCode === keys.tab) {
    event.preventDefault();
    if (tabpanels[0]) tabpanels[getActiveTabIndex(tabs, activeClass)].focus();
  } else if (event.keyCode === keys.home) {
    event.preventDefault();
    resetTabs(tabs, tabpanels, activeClass, slider);
    setActiveTab(tabs[0], tabpanels[0], activeClass, slider);
  } else if (event.keyCode === keys.end) {
    event.preventDefault();
    resetTabs(tabs, tabpanels, activeClass, slider);
    setActiveTab(tabs[tabs.length - 1], tabpanels[tabpanels.length - 1], activeClass, slider);
  }
};

const bindUIEvents = (element) => {
  ariaOrientation(window.innerWidth, element);

  const tabContainer = element.querySelector('.sprk-c-Tabs__buttons');
  const tabs = element.querySelectorAll('[role="tab"]');
  const tabpanels = element.querySelectorAll('[role="tabpanel"]');
  const activeClass = 'sprk-c-Tabs__button--active';

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      resetTabs(tabs, tabpanels, activeClass);
      setActiveTab(tab, tabpanels[index], activeClass);
    });
  });

  tabContainer.addEventListener('keydown', (event) => {
    handleTabKeydown(event, tabs, tabpanels, activeClass);
  });
};

const tabs = () => {
  getElements('[data-sprk-navigation="tabs"]', bindUIEvents);
};

export {
  tabs,
  bindUIEvents,
  ariaOrientation,
  resetTabs,
  setActiveTab,
  handleTabKeydown,
  advanceTab,
  retreatTab,
  getActiveTabIndex,
};
