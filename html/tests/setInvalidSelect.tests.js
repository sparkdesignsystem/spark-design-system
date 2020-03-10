/* global document describe beforeEach it */
import setInvalidSelect from '../utilities/validation/setInvalidSelect';

describe('setInvalidSelect tests', () => {
  let inputContainer;
  let select;
  let option1;
  let option2;
  let errorContainer;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required', 'select');
    errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorContainer');

    select = document.createElement('select');
    option1 = document.createElement('option');
    option1.setAttribute('value', 'not-selected');
    option2 = document.createElement('option');
    option2.setAttribute('value', 'choice1');

    select.appendChild(option1);
    select.appendChild(option2);

    inputContainer.appendChild(select);
  });

  it('should set the errorContainer text', () => {
    inputContainer.appendChild(errorContainer);
    const error = 'This is an error message';
    setInvalidSelect(inputContainer, error);
    expect(errorContainer.textContent).toEqual(error);
  });

  it('should not error if there is no errorContainer', () => {
    setInvalidSelect(inputContainer, 'oops.');
    expect(select.getAttribute('aria-invalid')).toBe('true');
  });

  it('should support overriding the error message', () => {
    inputContainer.appendChild(errorContainer);
    const defaultError = 'This is an error message';
    const newError = 'This is my custom error.';
    inputContainer.setAttribute('data-sprk-input-invalid-content', newError);
    setInvalidSelect(inputContainer, defaultError);
    expect(errorContainer.textContent).toEqual(newError);
  });
});
