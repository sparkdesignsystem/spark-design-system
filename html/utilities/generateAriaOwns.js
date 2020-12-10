import { uniqueId } from 'lodash';

// Copy the value of the id attribute on contentElement
// into the aria-owns attribute on ownerElement.
// Generate a unique ID if needed.
const generateAriaOwns = (ownerElement, contentElement, componentName) => {
  const ownerAriaOwns = ownerElement.getAttribute('aria-owns');
  let contentId = contentElement.getAttribute('id');

  // Warn if aria-owns exists but the id does not
  if (ownerAriaOwns && !contentId) {
    /* eslint-disable no-console */
    console.warn(
      `Spark Design System Warning - The component with
      aria-owns="${ownerAriaOwns}" expects a
      matching id on the content element.`,
    );
    /* eslint-enable no-console */
    return;
  }

  // Warn if aria-owns and id both exist but don't match
  if (contentId && ownerAriaOwns && contentId !== ownerAriaOwns) {
    /* eslint-disable no-console */
    console.warn(
      `Spark Design System Warning - The value of aria-owns
      ("${ownerAriaOwns}") should match the id of the
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

  // set the value of aria-ownss
  ownerElement.setAttribute('aria-owns', contentId);
};

export { generateAriaOwns as default };
