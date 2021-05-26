import { ElementRef, Renderer2 } from '@angular/core';
import { uniqueId } from 'lodash';

/**
 * Copy the value of the id attribute on contentElement
 * into the aria-owns attribute on ownerElement.
 * Generate a unique ID if needed.
 * @param ownerElement The element that will receive the aria-owns attribute.
 * @param contentElement The element that will receive an id if needed.
 * @param componentName Used in the formatting of the unique id if generated.
 * "sprk_{componentName}_content_123"
 */
export const generateAriaOwns = (
  ownerElement,
  contentElement,
  componentName = '',
) => {
  const ownerAriaOwns = ownerElement.getAttribute('aria-owns');
  let contentId = contentElement.getAttribute('id');

  // Do nothing if aria-owns exists but the id does not
  if (ownerAriaOwns && !contentId) {
    return;
  }

  // Do nothing if aria-owns and id both exist but don't match
  if (contentId && ownerAriaOwns && contentId !== ownerAriaOwns) {
    return;
  }

  // If we don't have a valid id, generate one with lodash
  if (!contentId) {
    contentId = uniqueId(`sprk_${componentName}_content_`);
    contentElement.setAttribute('id', contentId);
  }

  // set the value of aria-owns
  ownerElement.setAttribute('aria-owns', contentId);
};
