import { uniqueId } from 'lodash';

// Copy the value of the id attribute on contentElement
// into the aria-controls attribute on triggerElement.
// Generate a unique ID if needed.
const generateAriaControls = (
  triggerElement,
  contentElement,
  componentName,
) => {
  const triggerAriaControls = triggerElement.getAttribute('aria-controls');
  let contentId = contentElement.getAttribute('id');

  // Warn if aria-controls exists but the id does not
  if (triggerAriaControls && !contentId) {
    /* eslint-disable no-console */
    console.warn(
      `Spark Design System Warning - The component with 
      aria-controls="${triggerAriaControls}" expects a 
      matching id on the content element.`,
    );
    /* eslint-enable no-console */
    return;
  }

  // Warn if aria-controls and id both exist but don't match
  if (contentId && triggerAriaControls && contentId !== triggerAriaControls) {
    /* eslint-disable no-console */
    console.warn(
      `Spark Design System Warning - The value of aria-controls 
      ("${triggerAriaControls}") should match the id of the 
      content element ("${contentId}").`,
    );
    /* eslint-enable no-console */
    return;
  }

  // If we don't have a valid id, generate one with lodash
  if (!contentId) {
    contentId = uniqueId(`sprk_${componentName}_content_`);
    contentElement.setAttribute('id', contentId);
  }

  // set the value of aria-controls
  triggerElement.setAttribute('aria-controls', contentId);
};

export { generateAriaControls as default };
