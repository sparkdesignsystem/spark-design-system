/* global document describe before it */
import { expect } from 'chai';
import { runValidation } from '../base/requiredTick';

describe('requiredTick runValidation tests', () => {
  let inputContainer;
  let selectionContainer1;
  let radio1;
  let selectionContainer2;
  let radio2;

  before(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required', 'tick');
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');

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

  it('should return true if the validation passes', () => {
    radio1.checked = true;
    expect(runValidation(inputContainer)).eql(true);
  });

  it('should return false if the validation fails', () => {
    radio1.checked = false;
    expect(runValidation(inputContainer)).eql(false);
  });
});
