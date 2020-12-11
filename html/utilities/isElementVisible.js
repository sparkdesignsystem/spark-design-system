/* global document */

const isElementVisible = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return;
  const elementDisplayValue = window.getComputedStyle(element).display;
  const elementVisibilityValue = window.getComputedStyle(element).visibility;
  const elementIsVisible = !(
    elementDisplayValue === 'none' || elementVisibilityValue === 'hidden'
  );
  return elementIsVisible;
};

export { isElementVisible as default };
