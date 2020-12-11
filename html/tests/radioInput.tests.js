/* global document describe it sinon */
import { radioInput, bindRadioUIEvents } from '../base/inputs/radioInput';

describe('Radio tests', () => {
  let container;
  let inputElement;
  let labelElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-input', 'radio');
    inputElement = document.createElement('input');
    inputElement.type = 'radio';
    labelElement = document.createElement('label');
    container.appendChild(inputElement);
    inputElement.insertAdjacentElement('afterend', labelElement);
    bindRadioUIEvents(container);
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    radioInput();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-input="radio"]',
    );
  });
});
