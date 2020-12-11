/* global window document describe it beforeEach afterEach sinon */
import {
  monetaryInput,
  formatMonetary,
  bindUIEvents,
} from '../base/inputs/monetaryInput';

describe('monetaryInput init', () => {
  let div;

  beforeEach(() => {
    div = document.createElement('div');
    div.setAttribute('data-sprk-input', 'monetary');
  });

  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    monetaryInput();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-input="monetary"]',
    );
  });
});

describe('formatMonetary tests', () => {
  it('one digit', () => {
    const div = document.createElement('input');
    div.value = '1';
    expect(formatMonetary(div.value)).toBe('1.00');
  });
  it('4 digits', () => {
    const div = document.createElement('input');
    div.value = '1234';
    expect(formatMonetary(div.value)).toBe('1,234.00');
  });
  it('7 digits', () => {
    const div = document.createElement('input');
    div.value = '1234567';
    expect(formatMonetary(div.value)).toBe('1,234,567.00');
  });
  it('10 digits', () => {
    const div = document.createElement('input');
    div.value = '1234567890';
    expect(formatMonetary(div.value)).toBe('1,234,567,890.00');
  });
  it('contains decimal', () => {
    const div = document.createElement('input');
    div.value = '0.10';
    expect(formatMonetary(div.value)).toBe('0.10');
  });
  it('contains decimal with more than 2 places, should round', () => {
    const div = document.createElement('input');
    div.value = '0.115';
    expect(formatMonetary(div.value)).toBe('0.12');
  });
});

describe('bindUIEvents', () => {
  let div;
  let field;
  let event;

  beforeEach(() => {
    div = document.createElement('div');
    field = document.createElement('input');
    field.setAttribute(
      'pattern',
      '(^\\$?(\\d+|\\d{1,3}(,\\d{3})*)(\\.\\d+)?$)|^$',
    );
    field.value = '123';
    div.appendChild(field);
  });

  it('should bind the input event', () => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(div);
    expect(field.addEventListener.getCall(0).args[0]).toBe('input');
  });

  it('should validate when input is triggered', () => {
    bindUIEvents(div);
    event = new window.Event('input');
    field.dispatchEvent(event);
    expect(field.getAttribute('aria-invalid')).toBe('false');
  });

  it('should bind the blur event', () => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(div);
    expect(field.addEventListener.getCall(1).args[0]).toBe('blur');
  });

  it('should format when blur is triggered with valid input', (done) => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(div);
    event = new window.Event('blur');
    field.dispatchEvent(event);
    done();
    expect(field.value).toBe('123.00');
  });

  it('should not format when blur is triggered with no value', (done) => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(div);
    field.value = '';
    event = new window.Event('blur');
    field.dispatchEvent(event);
    done();
    expect(field.value).toBe('');
  });

  it('should not format when blur is triggered with invalid input', (done) => {
    sinon.spy(field, 'addEventListener');
    bindUIEvents(div);
    field.value = 'abc';
    event = new window.Event('blur');
    field.dispatchEvent(event);
    done();
    expect(field.value).toBe('abc');
  });
});
