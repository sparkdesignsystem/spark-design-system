/* global document describe beforeEach it */
import { expect } from 'chai';
import setValidTick from './setValidTick';

describe('setValidTick tests', () => {
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
    errorContainer.textContent = 'This is an error.';

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
  });

  it('should empty the error container', () => {
    inputContainer.appendChild(errorContainer);
    setValidTick(inputContainer);
    expect(errorContainer.textContent).eql('');
  });

  it('should not error if there is no error container', () => {
    setValidTick(inputContainer);
    expect(inputContainer.querySelector('.sprk-b-ErrorContainer')).eql(null);
  });
});
