function setInvalidSelect(inputContainer, defaultErrorMessage) {
  const overrideErrorMessage = inputContainer.getAttribute('data-sprk-input-invalid-content');
  const select = inputContainer.querySelector('select');
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorText');

  select.setAttribute('aria-describedby', errorContainer.getAttribute('id'));
  errorContainer.textContent = overrideErrorMessage || defaultErrorMessage;
}

export { setInvalidSelect as default };
