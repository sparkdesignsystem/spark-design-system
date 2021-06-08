/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkFormatMonetary from './sprkFormatMonetary';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';
import SprkInput from '../../base/inputs/SprkInput/SprkInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkFormatMonetary tests', () => {
  it('formats with one digit', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1';
    expect(sprkFormatMonetary(input.value)).toBe('1.00');
  });

  it('formats with one digit new SprkInput', () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '1';
    expect(sprkFormatMonetary(input.value)).toBe('1.00');
  });

  it('formats with 4 digits', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1234';
    expect(sprkFormatMonetary(input.value)).toBe('1,234.00');
  });

  it('formats with 4 digits with new SprkInput', () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '1234';
    expect(sprkFormatMonetary(input.value)).toBe('1,234.00');
  });

  it('formats with 7 digits', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1234567';
    expect(sprkFormatMonetary(input.value)).toBe('1,234,567.00');
  });

  it('formats with 7 digits with new SprkInput', () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '1234567';
    expect(sprkFormatMonetary(input.value)).toBe('1,234,567.00');
  });

  it('formats with 10 digits', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1234567890';
    expect(sprkFormatMonetary(input.value)).toBe('1,234,567,890.00');
  });

  it('formats with 10 digits with new SprkInput', () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '1234567890';
    expect(sprkFormatMonetary(input.value)).toBe('1,234,567,890.00');
  });

  it('formats when contains decimal', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '0.10';
    expect(sprkFormatMonetary(input.value)).toBe('0.10');
  });

  it('formats when contains decimal with new SprkInput', () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '0.10';
    expect(sprkFormatMonetary(input.value)).toBe('0.10');
  });

  it('should round when contains decimal with more than 2 places', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '0.115';
    expect(sprkFormatMonetary(input.value)).toBe('0.12');
  });

  it(`
      should round when contains decimal with
      more than 2 places with new SprkInput
    `, () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '0.115';
    expect(sprkFormatMonetary(input.value)).toBe('0.12');
  });
});
