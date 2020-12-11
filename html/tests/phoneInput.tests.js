/* global beforeEach afterEach window document describe it  sinon */
import {
  phoneInput,
  formatPhone,
  bindUIEvents,
} from '../base/inputs/phoneInput';

describe('phoneInput init', () => {
  let div;

  beforeEach(() => {
    div = document.createElement('div');
    div.setAttribute('data-sprk-input', 'monetary');
  });

  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    global.document = window.document;
    sinon.spy(document, 'querySelectorAll');
    phoneInput();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-input="phone"]',
    );
  });
});

describe('formatPhone tests', () => {
  let element;
  let field;
  let event;

  beforeEach(() => {
    element = document.createElement('div');
    field = document.createElement('input');
    field.setAttribute(
      'pattern',
      '(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d' +
        '{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$',
    );
    element.appendChild(field);
    field.value = '3133733000';
  });

  it('should format the Phone in the (XXX) XXX-XXXX style', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatPhone(div.value)).toBe('(123) 456-7890');
  });

  it('should return null on invalid input', () => {
    const div = document.createElement('input');
    div.value = 'asdf';
    expect(formatPhone(div.value)).toBe(null);
  });

  it('should bind the input event', () => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(element);
    expect(field.addEventListener.getCall(0).args[0]).toBe('input');
  });

  it(`should validate and format when 
      input is triggered with valid input`, () => {
    bindUIEvents(element);
    event = new window.Event('input');
    field.dispatchEvent(event);
    expect(field.getAttribute('aria-invalid')).toBe('false');
    expect(field.value).toBe('(313) 373-3000');
  });

  it('should do nothing when input is triggered with invalid input', () => {
    bindUIEvents(element);
    field.value = 'asdf';
    event = new window.Event('input');
    field.dispatchEvent(event);
    expect(field.getAttribute('aria-invalid')).toBe('true');
    expect(field.value).toBe('asdf');
  });

  it('should bind the blur event', () => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(element);
    expect(field.addEventListener.getCall(1).args[0]).toBe('blur');
  });

  it('should validate and format when blur is triggered', (done) => {
    bindUIEvents(element);
    field.value = '3133733000';
    event = new window.Event('blur');
    field.dispatchEvent(event);
    expect(field.getAttribute('aria-invalid')).toBe('false');
    done();
    expect(field.value).toBe('(313) 373-3000');
  });

  it('should do nothing when blur is triggered with invalid input', () => {
    bindUIEvents(element);
    field.value = 'asdf';
    event = new window.Event('blur');
    field.dispatchEvent(event);
    expect(field.getAttribute('aria-invalid')).toBe('true');
    expect(field.value).toBe('asdf');
  });
});
