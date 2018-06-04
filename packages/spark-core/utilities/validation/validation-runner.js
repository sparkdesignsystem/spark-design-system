const runValidation = (element, field, validFunction, invalidFunction) => {
  const validTest = field.validity.valid;
  if (field.validity.valid) {
    validFunction(element);
    console.log('valid');
  } else {
    invalidFunction(element, 'There is an error on this field.');
    console.log('invalid');
  }
  return validTest;
};

export { runValidation as default };
