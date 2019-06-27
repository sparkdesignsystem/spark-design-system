function isValidDate(value) {
  const expression = /^(((0[13578]|1[02])([/-]?)(0[1-9]|[12]\d|3[01])|(0[469]|11)([/-]?)(0[1-9]|[12]\d|30)|02([/-]?)((0[1-9])|[12]\d))(\4|\7|\9)[12]\d{3})?$/;
  return expression.test(value);
}

export { isValidDate as default };
