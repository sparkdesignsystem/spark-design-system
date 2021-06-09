const sprkFormatPhone = (value) => {
  const newValue = `${value}`.replace(/\D/g, '');
  const m = newValue.match(/^(\d{3})(\d{3})(\d{4})$/);
  return m === false || m === null ? '' : `(${m[1]}) ${m[2]}-${m[3]}`;
};

export { sprkFormatPhone as default };
