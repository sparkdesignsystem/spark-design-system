/* global document */
// Get all focusable elements in a container
const getFocusableEls = (container) => {
  const focusEls = container.querySelectorAll(
    'a[href], area[href],' +
      'input:not([disabled]),' +
      'select:not([disabled]),' +
      'textarea:not([disabled]),' +
      'button:not([disabled]), [tabindex="0"]',
  );
  return focusEls;
};

// Focus first element in a container
const focusFirstEl = (container) => {
  const focusEls = getFocusableEls(container);
  if (focusEls.length > 0) {
    focusEls[0].focus();
  }
};

// Check if passed in element is the currently active element
const isActiveElement = (element) => document.activeElement === element;

export { getFocusableEls, focusFirstEl, isActiveElement };
