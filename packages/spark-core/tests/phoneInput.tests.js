/* global document describe before it */
import { formatPhone, runValidation } from '../base/phoneInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('formatPhone tests', () => {
  it('should format the Phone in the (XXX) XXX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatPhone(div.value)).eql('(123) 456-7890');
  });
});

describe('phone runValidation tests', () => {
  let inputContainer;
  let input;

  before(() => {
    inputContainer = document.createElement('div');
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
  });

  it('should return true if the validation passes', () => {
    input.value = '1234567890';
    expect(runValidation(inputContainer)).eql(true);
  });
  it('should return false if the validation fails', () => {
    input.value = '12345678';
    expect(runValidation(inputContainer)).eql(false);
  });
});
