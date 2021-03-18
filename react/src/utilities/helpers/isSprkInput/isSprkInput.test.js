import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import isSprkInput from './isSprkInput';
import SprkInput from '../../../base/inputs/SprkInput/SprkInput';
import SprkSelect from '../../../base/inputs/SprkSelect/SprkSelect';
import SprkDatePicker from '../../../base/inputs/SprkDatePicker/SprkDatePicker';

Enzyme.configure({ adapter: new Adapter() });

describe('isSprkInput:', () => {
  it('should return true if it is passed a SprkInput', () => {
    expect(isSprkInput(<SprkInput />)).toBe(true);
  });

  it('should return true if it is passed a SprkSelect', () => {
    expect(isSprkInput(<SprkSelect />)).toBe(true);
  });

  it('should return true if it is passed a SprkDatePicker', () => {
    expect(isSprkInput(<SprkDatePicker />)).toBe(true);
  });

  it('should return false if it is passed a non input', () => {
    expect(isSprkInput(<div />)).toBe(false);
  });
});
