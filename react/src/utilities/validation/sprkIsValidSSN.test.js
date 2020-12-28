/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkIsValidSSN from './sprkIsValidSSN';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkIsValidSSN tests', () => {
  it('should return true when value is SSN', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '123456789';
    expect(sprkIsValidSSN(input.value)).toBe(true);
  });

  it('should return false when value is not SSN', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '00000000';
    expect(sprkIsValidSSN(input.value)).toBe(false);
  });
});
