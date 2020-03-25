import 'dom-slider';
import getElements from '../utilities/getElements';
import { uniqueId } from 'lodash';

/**
 *  Toggle JS
 *  If `data-sprk-toggle="container"`
 *  elements are available in the DOM
 *  we listen for clicks on the trigger and
 *  call slideToggle to slide the content up or down.
 *  To support non JS scenarios we only hide the content
 *  if JS is detected.
 */

// Toggle the icon type
const toggleIconType = (toggleIcon, toggleIconUse, openIcon, closeIcon) => {
  // set xlink:href attribute to be the filled icon.
  if (toggleIcon.classList.contains('sprk-c-Icon--open')) {
    toggleIconUse.setAttribute('xlink:href', `#${openIcon}`);
  } else {
    toggleIconUse.setAttribute('xlink:href', `#${closeIcon}`);
  }
};

// Toggle the aria expanded attribute
// TODO - deprecate this and use the one in html/utilities
const toggleAriaExpanded = (toggleTrigger) => {
  // If the trigger has the attr then determine toggle state
  if (toggleTrigger.hasAttribute('aria-expanded')) {
    const isExpanded = toggleTrigger.getAttribute('aria-expanded');
    toggleTrigger.setAttribute('aria-expanded', isExpanded === 'false' ? 'true' : 'false');
  } else {
    // If it doesn't have it then set it to false initially
    toggleTrigger.setAttribute('aria-expanded', 'false');
  }
};

const handleToggleClick = (toggleContent, toggleIcon, toggleIconUse, element) => {
  const trigger = element;
  let isAccordion;
  let isMastheadAccordion;

  if (trigger.hasAttribute('data-sprk-toggle-type')) {
    isAccordion = trigger.getAttribute('data-sprk-toggle-type').includes('accordion');
    isMastheadAccordion = trigger.getAttribute('data-sprk-toggle-type') === 'masthead-accordion';
  }

  // Rotate the Icon
  if (toggleIcon) toggleIcon.classList.toggle('sprk-c-Icon--open');

  // Swap icon name based on if open or closed
  if (isAccordion && toggleIconUse) {
    toggleIconType(
      toggleIcon,
      toggleIconUse,
      'chevron-up-circle-two-color',
      'chevron-up-circle-two-color',
    );
  }

  if (isAccordion && !isMastheadAccordion) toggleContent.parentElement.classList.toggle('sprk-c-Accordion__item--open');
  if (isMastheadAccordion) toggleContent.parentElement.classList.toggle('sprk-c-MastheadAccordion__item--open');

  toggleContent.slideToggle(300).then(() => {
    // Enable clicks after animation runs
    trigger.style.pointerEvents = 'auto';
  });

  // Set aria expanded to true
  toggleAriaExpanded(element);
};

const bindToggleUIEvents = (element) => {
  // Get the toggle's trigger and content elements
  const toggleTrigger = element.querySelector('[data-sprk-toggle="trigger"]');
  const toggleContent = element.querySelector('[data-sprk-toggle="content"]');
  const toggleIcon = element.querySelector('[data-sprk-toggle="icon"]');
  const toggleIconUse = element.querySelector('[data-sprk-toggle="accordionIconUseElement"]');

  console.log(toggleContent, 'toggleContent');

  const toggleContentId = toggleContent.getAttribute('id');
  const toggleTriggerAriaControls = toggleTrigger.getAttribute('aria-controls');

  // If neither toggleTrigger or toggleContent has
  // id nor aria-controls, the set them with uniqueId
  if (!toggleContentId && !toggleTriggerAriaControls) {
    const ariaToggleId = uniqueId('toggle-content-');
    toggleContent.setAttribute('id', ariaToggleId);
    toggleTrigger.setAttribute('aria-controls', ariaToggleId);
  }

  // If toggle content has an id but its trigger doesn't have aria-controls,
  // add it to the trigger.
  if (toggleContentId && !toggleTriggerAriaControls) {
    toggleTrigger.setAttribute('aria-controls', toggleContentId);
  }

  // Warn if aria-controls and id doesn't match
  if (toggleContentId !== toggleTriggerAriaControls) {
    console.warn('Toggle Trigger id and Content Trigger aria-controls do not match.');
  }

  // Warn if aria-controls exist, but trigger doesn't have matching id
  if (toggleTriggerAriaControls && !toggleContentId) {
    console.warn('Toggle Trigger id and Content Trigger aria-controls do not match.');
  }

  // Hide details content, initially shown for no-JS scenarios
  toggleContent.style.display = 'none';

  // Set aria-expanded to false initially
  toggleAriaExpanded(toggleTrigger);

  // Add click event listener to trigger for each toggle collection we find
  toggleTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    // Disable clicks till animation runs
    e.currentTarget.style.pointerEvents = 'none';
    handleToggleClick(toggleContent, toggleIcon, toggleIconUse, e.currentTarget);
  });
};

const toggle = () => {
  getElements('[data-sprk-toggle="container"]', bindToggleUIEvents);
};

export {
  toggle, toggleIconType, toggleAriaExpanded, handleToggleClick, bindToggleUIEvents,
};
