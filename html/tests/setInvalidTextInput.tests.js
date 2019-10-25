/* global document describe before it */
import { expect } from 'chai';
import setInvalidTextInput from './setInvalidTextInput';

describe('setInvalidTextInput tests', () => {
  let inputContainer;
  let errorContainer;
  let input;
  let errorText;

  before(() => {
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
    expect(input.classList.contains('sprk-b-TextInput--error')).eql(true);
  });

  it('should add the correct aria classes to the input', () => {
    setInvalidTextInput(inputContainer, 'This is an error message.');
    expect(input.getAttribute('aria-invalid')).eql('true');
  });

  it('should set the errorText text', () => {
    const error = 'This is an error message';
    setInvalidTextInput(inputContainer, error);
    errorText = inputContainer.querySelector('.sprk-b-ErrorText');
    expect(errorText.textContent).eql(error);
  });

  it('should support overriding the error message', () => {
    const defaultError = 'This is an error message';
    const newError = 'This is my custom error.';
    inputContainer.setAttribute('data-sprk-input-invalid-content', newError);
    setInvalidTextInput(inputContainer, defaultError);
    errorText = inputContainer.querySelector('.sprk-b-ErrorText');
    expect(errorText.textContent).eql(newError);
  });
});
