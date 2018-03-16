/* global describe before it*/
const jsdom = require("jsdom");
import {formatDate, runValidation} from '../base/dateInput';

const expect = require('chai').expect;

const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;

describe('formatDate tests', () => {
  it('should format the date in the XX/XX/XXXX style', () => {
    const div = document.createElement('input');
    div.value = '12345678';
    expect(formatDate(div.value)).eql('12/34/5678');
  });
});

describe('date runValidation tests', () => {
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
    input.value = '12345678';
    expect(runValidation(inputContainer)).eql(true);
  });

  it('should return false if the validation fails', () => {
    input.value = '123456789999';
    expect(runValidation(inputContainer)).eql(false);
  });
});
