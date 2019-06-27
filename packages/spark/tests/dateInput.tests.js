/* global window document describe it beforeEach afterEach */
import sinon from 'sinon';
import { expect } from 'chai';
import { dateInput, formatDate, bindUIEvents } from '../base/dateInput';

describe('dateInput init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    dateInput();
    expect(document.querySelectorAll.getCall(0).args[0]).eql('[data-sprk-input="date"]');
  });
});

describe('dateInput UI Events tests', () => {
  let inputContainer;
  let input;
  let event;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    input = document.createElement('input');
    input.type = 'text';
    input.setAttribute(
      'pattern',
      '^(((0[13578]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02([\\/-]?)((0[1-9])|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$',
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

  it('should format when input is triggered', () => {
    input.value = '12252019';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('false');
    expect(input.value).eql('12/25/2019');
  });

  it('should not format when input is triggered with invalid data', () => {
    input.value = 'asdf';
    event = new window.Event('input');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('true');
    expect(input.value).eql('asdf');
  });

  it('should bind the blur event', () => {
    expect(input.addEventListener.getCall(1).args[0]).eql('blur');
  });

  it('should format when blur is triggered with valid data', () => {
    input.value = '12252019';
    event = new window.Event('blur');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('false');
    expect(input.value).eql('12/25/2019');
  });

  it('should not format when blur is triggered with invalid data', () => {
    input.value = 'asdf';
    event = new window.Event('blur');
    input.dispatchEvent(event);
    expect(input.getAttribute('aria-invalid')).eql('true');
    expect(input.value).eql('asdf');
  });
});

describe('formatDate tests', () => {
  it('should format the date in the XX/XX/XXXX style', () => {
    const div = document.createElement('input');
    div.value = '12345678';
    expect(formatDate(div.value)).eql('12/34/5678');
  });
});
