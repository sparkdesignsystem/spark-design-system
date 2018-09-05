/* global document describe beforeEach afterEach it window */
import { expect } from 'chai';
import { textInput, valueTest } from '../base/textInput';

describe('textInput tests', () => {
  let input;
  beforeEach(() => {
    input = document.createElement('input');
    input.setAttribute('data-sprk-input', 'text');
    input.type = 'text';
    input.value = '';
    document.body.appendChild(input);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should add appropriate classes if the input has a value when bound', () => {
    input.value = 'this is a value';
    textInput();
    expect(input.classList.contains('sprk-b-TextInput--has-value')).eql(true);
    expect(input.classList.contains('sprk-b-TextInput--focusout')).eql(true);
  });

  it('should test if element has a value and add a class when needed', () => {
    input.value = '';
    valueTest(input);
    expect(input.classList.contains('sprk-b-TextInput--has-value')).eql(false);

    input.value = 'value';
    valueTest(input);
    expect(input.classList.contains('sprk-b-TextInput--has-value')).eql(true);
  });

  it('should set classes if input event is dispatched and input has value', () => {
    textInput();
    input.value = 'value';
    const inputEvent = new window.Event('input');
    input.dispatchEvent(inputEvent);
    expect(input.classList.contains('sprk-b-TextInput--has-value')).eql(true);
  });

  it('should set classes for focusin and blur', () => {
    textInput();
    input.dispatchEvent(new window.Event('focusin'));
    expect(input.classList.contains('sprk-b-TextInput--focusin')).eql(true);
    input.dispatchEvent(new window.Event('blur'));
    expect(input.classList.contains('sprk-b-TextInput--focusin')).eql(false);
    expect(input.classList.contains('sprk-b-TextInput--focusout')).eql(true);
  });
});
