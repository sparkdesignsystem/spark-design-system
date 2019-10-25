/* global document describe before it */
import { expect } from 'chai';
import setInvalidTextInput from '../utilities/validation/setInvalidTextInput';
import setValidTextInput from '../utilities/validation/setValidTextInput';

describe('setValidTextInput tests', () => {
  let inputContainer;
  let input;
  let errorText;
  let errorContainer;

  before(() => {
    inputContainer = document.createElement('div');
    errorContainer = document.createElement('div');
    errorContainer.classList.add('sprk-b-ErrorContainer');
    errorText = document.createElement('span');
    errorText.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    errorContainer.append(errorText);
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
    setInvalidTextInput(inputContainer, 'This is my error');
  });

  it('should remove the error class from the input element', () => {
    setValidTextInput(inputContainer);
    expect(input.classList.contains('sprk-b-TextInput--error')).eql(false);
  });
  it('should add the correct aria classes to the input', () => {
    setValidTextInput(inputContainer);
    expect(input.getAttribute('aria-invalid')).eql('false');
  });

  it('should set the errorContainer text', () => {
    setValidTextInput(inputContainer);
    expect(errorText.textContent).eql('');
  });
});
