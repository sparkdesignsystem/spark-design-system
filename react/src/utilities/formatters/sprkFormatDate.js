const sprkFormatDate = (value) => {
  let newValue = '';
  const cleanValue = value.replace(/[/-]/g, '');
  for (let i = 0; i < cleanValue.length; i += 1) {
    if (i === 1 || i === 3) {
      newValue += `${cleanValue[i]}/`;
    } else {
      newValue += cleanValue[i];
    }
  }
  return newValue;
};

export { sprkFormatDate as default };
