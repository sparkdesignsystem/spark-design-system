/* global document describe before it */
import { runValidation } from '../base/requiredTextInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

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
