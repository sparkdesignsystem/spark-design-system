const sprkFormatSSN = (value) => {
  let val = value.trim().replace(/-/g, '');
  let newVal = '';
  const sizes = [3, 2, 4];

  sizes.forEach((size) => {
    if (val.length > size) {
      newVal += `${val.substr(0, size)}-`;
      val = val.substr(size);
    }
  });

  newVal += val;
  return newVal;
};

export { sprkFormatSSN as default };
