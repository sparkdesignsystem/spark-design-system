/* global document describe before it */
import { expect } from 'chai';
import setInvalidSelect from '../utilities/validation/setInvalidSelect';

describe('setInvalidSelect tests', () => {
  let inputContainer;
  let select;
  let option1;
  let option2;
  let errorContainer;

  before(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required', 'select');
    errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');

    select = document.createElement('select');
    option1 = document.createElement('option');
    option1.setAttribute('value', 'not-selected');
    option2 = document.createElement('option');
    option2.setAttribute('value', 'choice1');

    select.appendChild(option1);
    select.appendChild(option2);

    inputContainer.appendChild(select);
    inputContainer.appendChild(errorContainer);
  });

  it('should set the errorContainer text', () => {
    const error = 'This is an error message';
    setInvalidSelect(inputContainer, error);
    expect(errorContainer.textContent).eql(error);
  });
  it('should support overriding the error message', () => {
    const defaultError = 'This is an error message';
    const newError = 'This is my custom error.';
    inputContainer.setAttribute('data-sprk-input-invalid-content', newError);
    setInvalidSelect(inputContainer, defaultError);
    expect(errorContainer.textContent).eql(newError);
  });
});
