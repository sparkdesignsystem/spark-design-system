/* global describe it require */
import toggleValue from '../utilities/toggleValue';

const { expect } = require('chai');

describe('toggle value tests', () => {
  it('if the current value is equal to value 1, return value 2', () => {
    expect(toggleValue('value1', 'value1', 'value2')).eql('value2');
  });
  it('if the current value is equal to value 2, return value 1', () => {
    expect(toggleValue('value2', 'value1', 'value2')).eql('value1');
  });
  it('if the current value is not equal to value 1 or value 2, return value 1', () => {
    expect(toggleValue('value000', 'value1', 'value2')).eql('value1');
  });
});
