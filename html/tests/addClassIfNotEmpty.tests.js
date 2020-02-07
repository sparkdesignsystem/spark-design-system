/* global document describe before it */
import { expect } from 'chai';
import addClassIfNotEmpty from '../utilities/addClassIfNotEmpty';

describe('addClassIfNotEmpty tests', () => {
  let input;

  before(() => {
    input = document.createElement('input');
  });

  it('should add the class to the element if value is not empty', () => {
    input.value = 'has-value';
    addClassIfNotEmpty(input, 'test-class');
    expect(input.classList.contains('test-class')).eql(true);
  });

  it('should not add the class to the element if value is empty', () => {
    input.value = '';
    input.classList.remove('test-class');
    addClassIfNotEmpty(input, 'test-class');
    expect(input.classList.contains('test-class')).eql(false);
  });
});
