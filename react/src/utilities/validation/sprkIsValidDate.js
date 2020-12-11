const sprkIsValidDate = (value) => {
  // eslint-disable-next-line max-len,no-useless-escape
  const expression = /^(((0[1358]|1[02])([\/-]?)(0[1-9]|[12]\d|3[01])|(0[469]|11)([\/-]?)(0[1-9]|[12]\d|30)|02(\/?)((0?\d)|[12]\d))(\4|\7|\9)[12]\d{3})?$/;
  return expression.test(value);
};

export { sprkIsValidDate as default };
