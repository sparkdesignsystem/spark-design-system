const isValidEmail = (value, expression = /([^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+)/gm ) => {
  const trimmedValue = value.trim();
  const matches = trimmedValue.match(expression);
  const isValid = matches ? (matches[0] === trimmedValue) : false;
  return isValid;
}

export { isValidEmail as default };