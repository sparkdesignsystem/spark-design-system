/* global window document describe before beforeEach afterEach it */
import sinon from 'sinon';
import { expect } from 'chai';
import {
  requiredTextInput,
  runValidation,
  bindUIEvents,
} from '../base/requiredTextInput';

describe('requiredTextInput init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    requiredTextInput();
    expect(document.querySelectorAll
      .getCall(0).args[0]).eql('[data-sprk-required-only="text"]');
  });
});

describe('required runValidation tests', () => {
  let inputContainer;
  let input;

  before(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required-only', 'text');
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

describe('requiredTextInput UI Events tests', () => {
  let inputContainer;
  let input;
  let event;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    inputContainer
      .setAttribute('data-sprk-required-only', 'text');
    input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('required', null);
    input.setAttribute(
      'pattern',
      '(^(?!666|000|9\\d{2})\\d'
      + '{3}([- ]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$',
    );
    sinon.spy(input, 'addEventListener');
    inputContainer.appendChild(input);
    document.body.appendChild(inputContainer);
    bindUIEvents(inputContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    input.addEventListener.restore();
  });

  it('should bind the input event', () => {
    expect(input.addEventListener.getCall(0).args[0]).eql('input');
  });

  it('should mark error when input is triggered with no value', () => {
    input.value = '';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('true');
  });

  it('should mark valid when input is triggered with a value', () => {
    input.value = 'asdf';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('false');
    expect(input.value).eql('asdf');
  });

  it('should bind the blur event', () => {
    expect(input.addEventListener.getCall(1).args[0]).eql('blur');
  });

  it('should mark error when blur is triggered with no value', () => {
    input.value = '';
    event = new window.Event('blur');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('true');
  });

  it('should mark valid when blur is triggered with a value', () => {
    input.value = 'asdf';
    event = new window.Event('blur');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('false');
    expect(input.value).eql('asdf');
  });
});
