/* global document describe it */
import generateIdForInput from '../utilities/generateIdForInput';

describe('generateIdForInput tests', () => {
  let inputElement;
  let labelElement;

  global.console = {
    warn: jest.fn(),
  };

  beforeEach(() => {
    inputElement = document.createElement('input');
    inputElement.type = 'checkbox';
    labelElement = document.createElement('label');
  });

  it('should generate values if neither for nor id is present', () => {
    expect(inputElement.hasAttribute('id')).toEqual(false);
    generateIdForInput(inputElement, labelElement, 'component');
    expect(labelElement.htmlFor).toMatch(/sprk_component_input_\d/);
    expect(inputElement.hasAttribute('id')).toEqual(true);
    expect(labelElement.htmlFor).toEqual(inputElement.getAttribute('id'));
  });

  it(`should not change values if for and id are both 
      present and have correct values`, () => {
    inputElement.setAttribute('id', 'test');
    labelElement.htmlFor = 'test';
    generateIdForInput(inputElement, labelElement, 'component');
    expect(labelElement.htmlFor).toMatch('test');
    expect(labelElement.htmlFor).toEqual(inputElement.getAttribute('id'));
  });

  it('should console.warn if for exists but the id does not', () => {
    labelElement.htmlFor = 'test';
    expect(inputElement.hasAttribute('id')).toEqual(false);
    expect(labelElement.htmlFor).toMatch('test');
    generateIdForInput(inputElement, labelElement, 'component');

    expect(global.console.warn).toHaveBeenCalledWith(
      `Spark Design System Warning - The value of 'for' (test) on the 
      label expects a matching 'id' on the input.`,
    );
  });

  it("should console.warn if for and id both exist but don't match", () => {
    labelElement.htmlFor = 'test';
    inputElement.setAttribute('id', 'test-1');
    expect(labelElement.htmlFor).toMatch('test');
    expect(inputElement.id).toMatch('test-1');
    generateIdForInput(inputElement, labelElement, 'component');

    expect(global.console.warn).toHaveBeenCalledWith(
      `Spark Design System Warning - The value of 'for' (test) on the 
      label should match the 'id' on the input (test-1).`,
    );
  });
});
