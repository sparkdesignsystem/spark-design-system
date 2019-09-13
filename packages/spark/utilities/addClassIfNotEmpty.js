// Check if element has an initial value
const addClassIfNotEmpty = (element, className) => {
  const elementValue = element.value;
  if (elementValue !== '') {
    element.classList.add(className);
  }
  return element;
};

export { addClassIfNotEmpty as default };
