/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkFormatSSN from './sprkFormatSSN';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkFormatSSN tests', () => {
  it('should format the ssn in the XXX-XX-XXXX style', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '123456789';
    expect(sprkFormatSSN(input.value)).toBe('123-45-6789');
  });
});
