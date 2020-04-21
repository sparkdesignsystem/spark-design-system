/* global document describe it */
import {
  checkbox,
  generateIdForCheckbox,
  bindCheckboxUIEvents
} from '../base/inputs/checkbox';

global.console = {
  warn: jest.fn(),
}

describe('Checkbox tests', () => {
  let container;
  let inputEl;
  let labelEl;

  beforeEach(() => {
    container = document.createElement('div');
    inputEl = document.createElement('input');
    inputEl.type = 'checkbox';
    labelEl = document.createElement('label');
    container.appendChild(inputEl);
    inputEl.insertAdjacentElement('afterend', labelEl);
    bindCheckboxUIEvents(inputEl);
  })

  it('should call getElements once with the correct selector', () => {
    sinon.spy(document, 'querySelectorAll');
    checkbox();
    expect(document.querySelectorAll.getCall(0).args[0]).toBe('.sprk-b-SelectionContainer input[type="checkbox"]');
  });

  it('should generate values if neither for nor id is present', () => {
    generateIdForCheckbox(inputEl);
    expect(labelEl.htmlFor).toMatch(/sprk_checkbox_input_\d/);
    expect(inputEl.hasAttribute('id')).toEqual(true);
    expect(labelEl.htmlFor).toEqual(inputEl.getAttribute('id'));
  });

  it('should console.warn if for exists but the id does not', () => {
    inputEl.removeAttribute('id');
    labelEl.htmlFor = 'test';
    expect(inputEl.hasAttribute('id')).toEqual(false);
    expect(labelEl.htmlFor).toMatch('test');

    generateIdForCheckbox(inputEl);
    expect(global.console.warn).toHaveBeenCalledWith(
      'Spark Design System Warning - The value of \'for\' (test) on the label expects a matching \'id\' on the input.'
    )
  });

  it('should console.warn if for and id both exist but don\'t match', () => {
    labelEl.htmlFor = 'test';
    inputEl.setAttribute('id', 'test-1');
    expect(labelEl.htmlFor).toMatch('test');
    expect(inputEl.id).toMatch('test-1');

    generateIdForCheckbox(inputEl);
    expect(global.console.warn).toHaveBeenCalledWith(
      'Spark Design System Warning - The value of \'for\' (test) on the label should match the \'id\' on the input (test-1).'
    )
  });
});
