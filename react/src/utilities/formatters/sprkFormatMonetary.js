const sprkFormatMonetary = (value) =>
  Number(value.replace(/,/g, ''))
    .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    .replace(/\$/g, '');

export { sprkFormatMonetary as default };
