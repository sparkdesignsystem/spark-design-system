function setInvalidTextInput(inputContainer, defaultErrorMessage) {
  const overrideErrorMessage = inputContainer.getAttribute('data-sprk-input-invalid-ssn-content');
  const input = inputContainer.querySelectorAll('input')[0];
  const errorContainer = inputContainer.querySelectorAll('.sprk-b-ErrorText')[0];

  input.classList.add('sprk-b-TextInput--error');
  input.setAttribute('aria-invalid', 'true');
  input.setAttribute('aria-describedby', errorContainer.getAttribute('id'));
  errorContainer.textContent = overrideErrorMessage || defaultErrorMessage;
}

export { setInvalidTextInput as default };
