/* global document describe beforeEach it */
import setInvalidTick from '../utilities/validation/setInvalidTick';

describe('setInvalidTick tests', () => {
  let inputContainer;
  let selectionContainer1;
  let radio1;
  let selectionContainer2;
  let radio2;
  let errorContainer;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required', 'tick');
    errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorContainer');

    selectionContainer1 = document.createElement('div');
    selectionContainer1.classList.add('sprk-b-SelectionContainer');
    radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'radio-test');
    radio1.setAttribute('required', 'required');
    selectionContainer1.append(radio1);

    selectionContainer2 = document.createElement('div');
    selectionContainer2.classList.add('sprk-b-SelectionContainer');
    radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'radio-test');
    selectionContainer2.append(radio1);

    inputContainer.appendChild(selectionContainer1);
    inputContainer.appendChild(selectionContainer2);
    inputContainer.appendChild(errorContainer);
  });

  it('should set the errorContainer text', () => {
    const error = 'This is an error message';
    setInvalidTick(inputContainer, error);
    expect(errorContainer.textContent).toEqual(error);
  });
  it('should support overriding the error message', () => {
    const defaultError = 'This is an error message';
    const newError = 'This is my custom error.';
    inputContainer.setAttribute('data-sprk-input-invalid-content', newError);
    setInvalidTick(inputContainer, defaultError);
    expect(errorContainer.textContent).toEqual(newError);
  });
});
