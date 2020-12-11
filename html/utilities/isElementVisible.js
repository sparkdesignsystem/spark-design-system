/* global document */

const isElementVisible = (selector, container = document) => {
  const element = container.querySelector(selector);
  if (!element) return;
  const elementDisplayValue = window.getComputedStyle(element).display;
  const elementVisibilityValue = window.getComputedStyle(element).visibility;
  const elementIsVisible = !(
    elementDisplayValue === 'none' || elementVisibilityValue === 'hidden'
  );
  // eslint-disable-next-line consistent-return
  return elementIsVisible;
};

export { isElementVisible as default };
