/* global document describe beforeEach it */
import { expect } from 'chai';
import setValidSelect from '../utilities/validation/setValidSelect';

describe('setValidSelect tests', () => {
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
    errorContainer.textContent = 'This is an error.';

    select = document.createElement('select');
    option1 = document.createElement('option');
    option1.setAttribute('value', 'not-selected');
    option2 = document.createElement('option');
    option2.setAttribute('value', 'choice1');

    select.appendChild(option1);
    select.appendChild(option2);

    inputContainer.appendChild(select);
  });

  it('should empty the error container', () => {
    inputContainer.appendChild(errorContainer);
    setValidSelect(inputContainer);
    expect(errorContainer.textContent).eql('');
  });

  it('should not error if there is no error container', () => {
    setValidSelect(inputContainer);
    expect(select.getAttribute('aria-invalid')).eql('false');
  });
});
