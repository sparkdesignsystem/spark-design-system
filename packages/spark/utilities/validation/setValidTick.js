function setValidTick(inputContainer) {
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorContainer');

  if (errorContainer) {
    errorContainer.innerHTML = '';
  }
}

export { setValidTick as default };
