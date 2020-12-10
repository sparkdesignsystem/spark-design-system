/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkIsValidDate from './sprkIsValidDate';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkIsValidDate tests', () => {
  it('should return true when value is a date', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '12312020';
    expect(sprkIsValidDate(input.value)).toBe(true);
  });

  it('should return false when value is not a date', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '21312020';
    expect(sprkIsValidDate(input.value)).toBe(false);
  });
});
