function setInvalidTick(inputContainer, defaultErrorMessage) {
  const overrideErrorMessage = inputContainer.getAttribute('data-sprk-input-invalid-content');
  const input = inputContainer.querySelector('input');
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorText');

  input.setAttribute('aria-describedby', errorContainer.getAttribute('id'));
  errorContainer.textContent = overrideErrorMessage || defaultErrorMessage;
}

export { setInvalidTick as default };
