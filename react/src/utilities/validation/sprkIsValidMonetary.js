const sprkIsValidMonetary = (value) => {
  const expression = /(^\$?(\d+|\d{1,3}(,\d{3})*)(\.\d+)?$)|^$/;
  return expression.test(value);
};

export { sprkIsValidMonetary as default };
