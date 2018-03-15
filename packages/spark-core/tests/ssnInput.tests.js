/* global describe before it*/
const jsdom = require("jsdom");
import {formatSSN, runValidation} from '../base/ssnInput';

const expect = require('chai').expect;

const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;

describe('formatSSN tests', () => {
  it('should format the ssn in the XXX-XX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '123456789';
    expect(formatSSN(div.value)).eql('123-45-6789');
  });
});

describe('runValidation tests', () => {
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
    input.value = '123456789';
    expect(runValidation(inputContainer)).eql(true);
  });
  it('should return false if the validation fails', () => {
    input.value = '12345678';
    expect(runValidation(inputContainer)).eql(false);
  });
});
