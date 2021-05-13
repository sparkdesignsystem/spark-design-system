const isSprkInput = (elem) => {
  return (
    elem.type.name === 'SprkInput' ||
    elem.type.name === 'SprkSelect' ||
    elem.type.name === 'SprkDatePicker'
  );
};

export { isSprkInput as default };
