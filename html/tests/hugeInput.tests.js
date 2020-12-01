/* global document describe beforeEach it sinon */
import {
  hugeInput,
  bindUIEventsHugeInput,
  bindUIEvents,
} from '../base/inputs/hugeInput';

describe('hugeInput tests', () => {
  let input;
  let inputNew;
  let select;
  let container;
  let selectOption;
  let selectOptionDefault;

  beforeEach(() => {
    container = document.createElement('div');
    input = document.createElement('input');
    input.setAttribute('data-sprk-input', 'hugeTextInput');
    input.classList.add('sprk-b-TextInput');
    inputNew = document.createElement('input');
    inputNew.setAttribute('data-sprk-input', 'huge');
    select = document.createElement('select');
    selectOptionDefault = document.createElement('option');
    selectOptionDefault.value = '';
    selectOptionDefault.selected = true;
    selectOption = document.createElement('option');
    selectOption.value = 'test-value';
    select.setAttribute('data-sprk-input', 'huge');
    select.appendChild(selectOptionDefault);
    select.appendChild(selectOption);
    input.value = '';
    input.classList = '';
    container.appendChild(input);
    select.value = '';
    select.classList = '';
    container.appendChild(inputNew);
    container.appendChild(select);
    document.body.appendChild(container);
    sinon.spy(input, 'addEventListener');
    sinon.spy(inputNew, 'addEventListener');
    sinon.spy(select, 'addEventListener');
  });

  afterEach(() => {
    input.addEventListener.restore();
    inputNew.addEventListener.restore();
    select.addEventListener.restore();
  });

  it('should not add class to empty inputs', () => {
    input.value = '';
    hugeInput();
    expect(input.classList.contains('sprk-b-TextInput--float-label')).toBe(
      false,
    );
  });

  it('should bind the input event to the new input elements', () => {
    bindUIEventsHugeInput(inputNew);
    expect(inputNew.addEventListener.getCall(0).args[0]).toBe('input');
  });

  it('should bind the input event to the old input elements', () => {
    bindUIEvents(input);
    expect(input.addEventListener.getCall(0).args[0]).toBe('input');
  });

  it('should bind the change event to the new select elements', () => {
    bindUIEventsHugeInput(select);
    expect(select.addEventListener.getCall(0).args[0]).toBe('change');
  });

  it('should add class to select when change event fires and has value', () => {
    bindUIEventsHugeInput(select);
    select.value = 'test-value';
    const event = new window.Event('change');
    select.dispatchEvent(event);
    expect(select.classList.contains('sprk-b-Input--has-floating-label')).toBe(
      true,
    );
  });

  it('should not add class when change event fires and has no value', () => {
    bindUIEventsHugeInput(select);
    const event = new window.Event('change');
    select.dispatchEvent(event);
    expect(select.classList.contains('sprk-b-Input--has-floating-label')).toBe(
      false,
    );
  });

  it('should add a class to old inputs with values on load event', () => {
    hugeInput();
    input.value = 'test-value';
    const event = new window.Event('load');
    window.dispatchEvent(event);
    expect(input.classList.contains('sprk-b-TextInput--float-label')).toBe(
      true,
    );
  });

  it('should add a class to new inputs with values on load event', () => {
    hugeInput();
    inputNew.value = 'test-value';
    const event = new window.Event('load');
    window.dispatchEvent(event);
    expect(
      inputNew.classList.contains('sprk-b-Input--has-floating-label'),
    ).toBe(true);
  });

  it('should add a class to selects with values on load event', () => {
    hugeInput();
    select.value = 'test-value';
    const event = new window.Event('load');
    window.dispatchEvent(event);
    expect(select.classList.contains('sprk-b-Input--has-floating-label')).toBe(
      true,
    );
  });
});
