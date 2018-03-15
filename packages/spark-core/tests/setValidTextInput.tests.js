/* global describe before it*/
const jsdom = require("jsdom");

const expect = require('chai').expect;

const {JSDOM} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.document = dom.window.document;

import {setInvalidTextInput} from '../utilities/validation/setInvalidTextInput';
import {setValidTextInput} from '../utilities/validation/setValidTextInput';

describe('setValidTextInput tests', () => {
  let inputContainer;
  let input;
  let errorContainer;

  before(() => {
    inputContainer = document.createElement('div');
    errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
    setInvalidTextInput(inputContainer, "This is my error");
  });

  it('should add the error class to the input element', () => {
    setValidTextInput(inputContainer);
    expect(input.classList.contains('sprk-b-TextInput--error')).eql(false);
  });
  it('should add the correct aria classes to the input', () => {
    setValidTextInput(inputContainer);
    expect(input.getAttribute('aria-invalid')).eql('false');
  });
  it('should set the errorContainer text', () => {
    setValidTextInput(inputContainer);
    expect(errorContainer.textContent).eql("");
  });
});
