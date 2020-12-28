/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkIsValidPhone from './sprkIsValidPhone';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkIsValidPhone tests', () => {
  it('should return true when value is a phone number', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1234567899';
    expect(sprkIsValidPhone(input.value)).toBe(true);
  });

  it('should return false when value is not a phone number', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '00000000';
    expect(sprkIsValidPhone(input.value)).toBe(false);
  });
});
