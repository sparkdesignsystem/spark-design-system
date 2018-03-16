function isValidDate (value) {
  const expression = /(^\d{2}((\/)|-)\d{2}((\/)|-)\d{4}$)|(^\d{8}$)|^$/;
  return expression.test(value);
}

export {
  isValidDate
};
