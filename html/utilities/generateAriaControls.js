import { uniqueId } from 'lodash';

// Copy the value of the id attribute on contentElement
// into the aria-controls attribute on triggerElement.
// Generate a unique ID if needed.
const generateAriaControls = (triggerElement, contentElement) => {
  const toggleTriggerAriaControls = triggerElement.getAttribute('aria-controls');
  const toggleContentId = contentElement.getAttribute('id');

  // If neither attribute has a value, generate an ID with lodash
  if (!toggleContentId && !toggleTriggerAriaControls) {
    const ariaToggleId = uniqueId('sprk_masthead_content_');
    contentElement.setAttribute('id', ariaToggleId);
    triggerElement.setAttribute('aria-controls', ariaToggleId);
  }

  // If content has an ID but trigger doesn't have aria-controls,
  // add the ID to the trigger
  if (toggleContentId && !toggleTriggerAriaControls) {
    triggerElement.setAttribute('aria-controls', toggleContentId);
  }

  // Warn if aria-controls and id don't match
  if (toggleContentId !== toggleTriggerAriaControls) {
    console.warn("Spark Design System Warning - these should have the same value");
  }

  // Warn if aria-controls exists but the ids don't match
  if (toggleTriggerAriaControls && !toggleContentId) {
    console.warn("Spark Design System Warning - aria-controls exists but id is missing")
  }
};

export { generateAriaControls };