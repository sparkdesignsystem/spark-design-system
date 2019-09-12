const toggleClassWithValue = (element, className) => {
  element.addEventListener('input', () => {
    const { value } = element;

    if (value) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
};

export { toggleClassWithValue as default };
