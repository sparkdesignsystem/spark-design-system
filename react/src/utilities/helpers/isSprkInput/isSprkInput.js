const isSprkInput = (elem) => {
  const isInput =
    elem.type &&
    (elem.type.name === 'SprkInput' ||
      elem.type.name === 'SprkSelect' ||
      elem.type.name === 'SprkDatePicker');
  return isInput;
};

export { isSprkInput as default };
