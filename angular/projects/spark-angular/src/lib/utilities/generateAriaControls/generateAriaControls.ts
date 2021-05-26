import { ElementRef, Renderer2 } from '@angular/core';
import { uniqueId } from 'lodash';

/**
 * @ignore
 * Copy the value of the id attribute on contentElement
 * into the aria-controls attribute on triggerElement.
 * Generate a unique ID if needed.
 * @param triggerElement The element that will receive the aria-controls attribute.
 * @param contentElement The element that will receive an id if needed.
 * @param componentName Used in the formatting of the unique id if generated.
 * "sprk_{componentName}_content_123"
 */
export const generateAriaControls = (
  triggerElement,
  contentElement,
  componentName = '',
) => {
  const triggerAriaControls = triggerElement.getAttribute('aria-controls');
  let contentId = contentElement.getAttribute('id');

  // Do nothing if aria-controls exists but the id does not
  if (triggerAriaControls && !contentId) {
    return;
  }

  // Do nothing if aria-controls and id both exist but don't match
  if (contentId && triggerAriaControls && contentId !== triggerAriaControls) {
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
