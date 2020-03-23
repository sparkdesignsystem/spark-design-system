/* global document describe beforeEach it */
import getArrowClass from '../utilities/getArrowClass';

describe('datepicker getArrowClass tests', () => {
  let inputContainer;
  let input;

  beforeEach(() => {
    inputContainer = document.createElement('div');
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
  });

  it('should return dp-below-top when there is room', () => {
    const rect = inputContainer.getBoundingClientRect();
    const scrollTop = 0;
    const innerHeight = 500;
    expect(getArrowClass(rect, scrollTop, innerHeight)).toBe('dp-below-top');
  });

  it('should return dp-above-top when there is no room at the bottom', () => {
    const rect = inputContainer.getBoundingClientRect();
    rect.height = 100;
    const scrollTop = 400;
    const innerHeight = 300;
    expect(getArrowClass(rect, scrollTop, innerHeight)).toBe('dp-above-top');
  });
});
