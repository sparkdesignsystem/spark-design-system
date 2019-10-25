const runValidation = (element, field, validFunction, invalidFunction) => {
  const validTest = field.validity.valid;
  if (field.validity.valid) {
    validFunction(element);
  } else if (field.validity.valueMissing) {
    invalidFunction(element, 'This field is required.');
  } else {
    invalidFunction(element, 'There is an error on this field.');
  }
  return validTest;
};

export { runValidation as default };
