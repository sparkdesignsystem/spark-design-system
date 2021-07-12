/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkFormatDate from './sprkFormatDate';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';
import SprkInput from '../../base/inputs/SprkInput/SprkInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkFormatDate tests', () => {
  it('should format the date in the XX/XX/XXXX style', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '12312020';
    expect(sprkFormatDate(input.value)).toBe('12/31/2020');
  });

  it(`
      should format the date in the
      XX/XX/XXXX style with new SprkInput
    `, () => {
    const wrapper = mount(<SprkInput id="test-id" />);
    const input = wrapper.find('input');
    input.value = '12312020';
    expect(sprkFormatDate(input.value)).toBe('12/31/2020');
  });
});
