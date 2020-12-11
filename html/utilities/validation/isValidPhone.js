const isValidPhone = (value) => {
  // eslint-disable-next-line max-len
  const expression = /(^(\+\d{1,2}\s)?((\(\d{3}\))|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$)|^$/;
  return expression.test(value);
};

export { isValidPhone as default };
