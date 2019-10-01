function setValidTextInput(inputContainer) {
  const input = inputContainer.querySelector('input');
  const errorContainer = inputContainer.querySelector('.sprk-b-ErrorContainer');

  input.classList.remove('sprk-b-TextInput--error');
  input.setAttribute('aria-invalid', 'false');
  if (errorContainer) {
    errorContainer.innerHTML = '';
  }
}

export { setValidTextInput as default };
