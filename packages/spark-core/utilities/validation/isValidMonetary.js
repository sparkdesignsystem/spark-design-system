function isValidMonetary (value) {
  const expression = /^[0-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
  return expression.test(value);
}

export {
  isValidMonetary
};
