/* global window document describe beforeEach it afterEach sinon */
import {
  requiredTick,
  runValidation,
  bindUIEvents,
} from '../base/inputs/requiredTick';

describe('requiredTick init', () => {
  afterEach(() => {
    document.querySelectorAll.restore();
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    requiredTick();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-required-only="tick"]',
    );
  });
});

describe('requiredTick runValidation tests', () => {
  let inputContainer;
  let selectionContainer1;
  let radio1;
  let selectionContainer2;
  let radio2;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required-only', 'tick');
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorContainer');

    selectionContainer1 = document.createElement('div');
    selectionContainer1.classList.add('sprk-b-SelectionContainer');
    radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'radio-test');
    radio1.setAttribute('required', 'required');
    selectionContainer1.append(radio1);

    selectionContainer2 = document.createElement('div');
    selectionContainer2.classList.add('sprk-b-SelectionContainer');
    radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'radio-test');
    selectionContainer2.append(radio1);

    inputContainer.appendChild(selectionContainer1);
    inputContainer.appendChild(selectionContainer2);
    inputContainer.appendChild(errorContainer);
  });

  it('should return true if the validation passes', () => {
    radio1.checked = true;
    expect(runValidation(inputContainer)).toBe(true);
  });

  it('should return false if the validation fails', () => {
    radio1.checked = false;
    expect(runValidation(inputContainer)).toBe(false);
  });
});

describe('requiredTextInput UI Events tests', () => {
  let inputContainer;
  let selectionContainer1;
  let radio1;
  let selectionContainer2;
  let radio2;
  let errorContainer;
  let event;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    inputContainer.setAttribute('data-sprk-required', 'tick');
    sinon.spy(inputContainer, 'addEventListener');
    errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorContainer');

    selectionContainer1 = document.createElement('div');
    selectionContainer1.classList.add('sprk-b-SelectionContainer');
    radio1 = document.createElement('input');
    radio1.setAttribute('type', 'radio');
    radio1.setAttribute('name', 'radio-test');
    radio1.setAttribute('required', 'required');
    selectionContainer1.append(radio1);

    selectionContainer2 = document.createElement('div');
    selectionContainer2.classList.add('sprk-b-SelectionContainer');
    radio2 = document.createElement('input');
    radio2.setAttribute('type', 'radio');
    radio2.setAttribute('name', 'radio-test');
    selectionContainer2.append(radio1);

    inputContainer.appendChild(selectionContainer1);
    inputContainer.appendChild(selectionContainer2);
    inputContainer.appendChild(errorContainer);

    bindUIEvents(inputContainer);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    inputContainer.addEventListener.restore();
  });

  it('should bind the change event', () => {
    expect(inputContainer.addEventListener.getCall(0).args[0]).toBe('change');
  });

  it(`should mark error when change is 
      triggered with no selected inputs`, () => {
    event = new window.Event('change');
    inputContainer.dispatchEvent(event);
    expect(errorContainer.textContent).toBe('This field is required.');
  });

  it('should run validation on focusout', () => {
    event = new window.Event('focusout');
    inputContainer.dispatchEvent(event);
    expect(errorContainer.textContent).toBe('This field is required.');
  });

  it('should mark valid when input is triggered with a value', () => {
    radio1.checked = true;
    event = new window.Event('change');
    inputContainer.dispatchEvent(event);
    expect(errorContainer.textContent).toBe('');
  });
});
