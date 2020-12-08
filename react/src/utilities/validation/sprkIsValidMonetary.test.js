/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkIsValidMonetary from './sprkIsValidMonetary';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkIsValidMonetary tests', () => {
  it('should return true when value is a phone number', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1234567899';
    expect(sprkIsValidMonetary(input.value)).toBe(true);
  });

  it('should return false when value is not a phone number', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = 'Letter Test';
    expect(sprkIsValidMonetary(input.value)).toBe(false);
  });
});
