function toggleClassWithFocus(element, className) {
  element.addEventListener('focusin', () => {
    element.classList.add(className);
  });

  element.addEventListener('focusout', () => {
    element.classList.remove(className);
  });
}

export { toggleClassWithFocus as default };
