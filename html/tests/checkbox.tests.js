/* global document describe it sinon */
import { checkbox, bindCheckboxUIEvents } from '../base/inputs/checkbox';

describe('Checkbox tests', () => {
  let container;
  let inputElement;
  let labelElement;

  beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('data-sprk-input', 'checkbox');
    inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    labelElement = document.createElement('label');
    container.appendChild(inputElement);
    inputElement.insertAdjacentElement('afterend', labelElement);
    bindCheckboxUIEvents(container);
  });

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    checkbox();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe(
      '[data-sprk-input="checkbox"]',
    );
  });
});
