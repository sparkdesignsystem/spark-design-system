/* global document describe before it */
import { expect } from 'chai';
import { runValidation } from '../base/requiredTextInput';

describe('required runValidation tests', () => {
  let inputContainer;
  let input;

  before(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required', 'true');
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    input.setAttribute('required', 'required');
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
  });

  it('should return true if the validation passes', () => {
    input.value = 'anything';
    expect(runValidation(inputContainer)).eql(true);
  });

  it('should return false if the validation fails', () => {
    input.value = '';
    expect(runValidation(inputContainer)).eql(false);
  });
});
