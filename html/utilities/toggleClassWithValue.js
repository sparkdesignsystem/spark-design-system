const toggleClassWithValue = (element, className, eventType = 'input') => {
  element.addEventListener(`${eventType}`, () => {
    const { value } = element;
    if (value) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  });
};

export { toggleClassWithValue as default };
