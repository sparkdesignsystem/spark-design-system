function setInvalidTextInput(inputContainer, defaultErrorMessage) {
  const overrideErrorMessage = inputContainer.getAttribute('data-sprk-input-invalid-content');
  const input = inputContainer.querySelector('input');
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorText');

  input.classList.add('sprk-b-TextInput--error');
  input.setAttribute('aria-invalid', 'true');

  if (errorContainer) {
    input.setAttribute('aria-describedby', errorContainer.getAttribute('id'));
    errorContainer.textContent = overrideErrorMessage || defaultErrorMessage;
  }
}

export { setInvalidTextInput as default };
