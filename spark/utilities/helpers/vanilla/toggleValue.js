function toggleValue(currentValue, value1, value2) {
  if (currentValue === value1) {
    return value2;
  }

  return value1;
}

export { toggleValue as default };
