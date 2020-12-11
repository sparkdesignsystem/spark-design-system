/* global document describe it beforeEach afterEach window sinon */
import { formatSSN, ssnInput, bindUIEvents } from '../base/inputs/ssnInput';

describe('ssnInput init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    ssnInput();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-input="ssn"]',
    );
  });
});

describe('formatSSN tests', () => {
  it('should format the ssn in the XXX-XX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '123456789';
    expect(formatSSN(div.value)).toBe('123-45-6789');
  });
});

describe('ssnInput UI Events tests', () => {
  let inputContainer;
  let input;
  let checkbox;
  let errorContainer;
  let event;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    input = document.createElement('input');
    input.type = 'password';
    input.setAttribute(
      'pattern',
      '(^(?!666|000|9\\d{2})' +
        '\\d{3}([- ]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$',
    );
    sinon.spy(input, 'addEventListener');
    checkbox = document.createElement('input');
    sinon.spy(checkbox, 'addEventListener');
    checkbox.type = 'checkbox';
    errorContainer = document.createElement('div');
    inputContainer.appendChild(input);
    inputContainer.appendChild(checkbox);
    inputContainer.appendChild(errorContainer);
    document.body.appendChild(inputContainer);
    bindUIEvents(inputContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    input.addEventListener.restore();
    checkbox.addEventListener.restore();
  });

  it('should bind the input event', () => {
    expect(input.addEventListener.getCall(0).args[0]).toBe('input');
  });

  it('should format when input is triggered', () => {
    input.value = '123456789';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).toBe('false');
    expect(input.value).toBe('123-45-6789');
  });

  it('should not format when input is triggered with invalid data', () => {
    input.value = 'asdf';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.value).toBe('asdf');
  });

  it('should bind the blur event', () => {
    expect(input.addEventListener.getCall(1).args[0]).toBe('blur');
  });

  it('should format when blur is triggered with valid data', () => {
    input.value = '123456789';
    event = new window.Event('blur');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).toBe('false');
    expect(input.value).toBe('123-45-6789');
  });

  it('should not format when blur is triggered with invalid data', () => {
    input.value = 'asdf';
    event = new window.Event('blur');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.value).toBe('asdf');
  });

  it('should bind the change event to the checkbox', () => {
    expect(checkbox.addEventListener.calledOnce).toBe(true);
    expect(checkbox.addEventListener.getCall(0).args[0]).toBe('change');
  });

  it('should change the type of input when the checkbox is changed', () => {
    expect(input.type).toBe('password');
    event = new window.Event('change');
    checkbox.dispatchEvent(event);
    expect(input.type).toBe('text');
  });
});
