/* global document describe beforeEach it */
import setInvalidTextInput from '../utilities/validation/setInvalidTextInput';

describe('setInvalidTextInput tests', () => {
  let inputContainer;
  let errorContainer;
  let input;
  let errorText;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    errorContainer = document.createElement('div');
    errorContainer.classList.add('sprk-b-ErrorContainer');
    errorText = document.createElement('span');
    errorText.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    inputContainer.appendChild(input);
    errorContainer.appendChild(errorText);
    inputContainer.append(errorContainer);
  });

  it('should add the error class to the input element', () => {
    setInvalidTextInput(inputContainer, 'This is an error message.');
    expect(input.classList.contains('sprk-b-TextInput--error')).toBe(true);
  });

  it('should add the correct aria classes to the input', () => {
    setInvalidTextInput(inputContainer, 'This is an error message.');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  it('should set the errorText text', () => {
    const error = 'This is an error message';
    setInvalidTextInput(inputContainer, error);
    errorText = inputContainer.querySelector('.sprk-b-ErrorText');
    expect(errorText.textContent).toEqual(error);
  });

  it('should support overriding the error message', () => {
    const defaultError = 'This is an error message';
    const newError = 'This is my custom error.';
    inputContainer.setAttribute('data-sprk-input-invalid-content', newError);
    setInvalidTextInput(inputContainer, defaultError);
    errorText = inputContainer.querySelector('.sprk-b-ErrorText');
    expect(errorText.textContent).toEqual(newError);
  });
});
