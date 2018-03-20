function setValidTextInput(inputContainer) {
  const input = inputContainer.querySelectorAll('input')[0];
  const errorContainer = inputContainer.querySelectorAll('.sprk-b-ErrorText')[0];

  input.classList.remove('sprk-b-TextInput--error');
  input.setAttribute('aria-invalid', 'false');
  errorContainer.textContent = '';
}

export { setValidTextInput as default };
