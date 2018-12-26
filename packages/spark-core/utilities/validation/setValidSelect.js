function setValidSelect(inputContainer) {
  const select = inputContainer.querySelector('select');
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorContainer');

  select.classList.remove('sprk-b-Select--error');
  select.setAttribute('aria-invalid', 'false');
  if (errorContainer) {
    errorContainer.innerHTML = '';
  }
}

export { setValidSelect as default };
