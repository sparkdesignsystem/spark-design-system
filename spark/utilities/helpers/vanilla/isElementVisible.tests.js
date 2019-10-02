/* global document describe it */
import { expect } from 'chai';
import isElementVisible from './isElementVisible';

describe('isElementVisible tests', () => {
  let main;
  let elementVisible;

  beforeEach(() => {
    main = document.createElement('div');
    main.classList.add('sprk-main');

    document.body.appendChild(main);
  });

  it('should return false if the style is visibility:hidden', () => {
    main.setAttribute('style', 'visibility:hidden');
    elementVisible = isElementVisible('.sprk-main');
    expect(elementVisible).eql(false);
  });

  it('should return false if the style is display: none', () => {
    main.setAttribute('style', 'display: none');
    elementVisible = isElementVisible('.sprk-main');
    expect(elementVisible).eql(false);
  });
});