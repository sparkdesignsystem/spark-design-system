// Check if element has an initial value
const addClassIfNotEmpty = (element, className) => {
  if (element.value !== '') element.classList.add(className);
  return element;
};

export { addClassIfNotEmpty as default };
