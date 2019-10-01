/* global document */
const getElements = (selector, functionToCallOnEachItem) => {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
    elements.forEach((element) => {
      functionToCallOnEachItem(element);
    });
  }
};

export { getElements as default };
