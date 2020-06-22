import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkRadioGroup from './SprkRadioGroup';
import SprkRadio from '../SprkRadio/SprkRadio';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkRadioGroup:', () => {
  it('should render SprkRadio inside of it', () => {
    const wrapper = shallow(
      <SprkRadioGroup>
        <SprkRadio>Label</SprkRadio>
        <SprkRadio>Label</SprkRadio>
        <SprkRadio>Label</SprkRadio>
      </SprkRadioGroup>,
    );
    expect(wrapper.find('SprkRadio').length).toBe(3);
  });

  it('should have container styles', () => {
    const wrapper = shallow(<SprkRadioGroup />);
    expect(
      wrapper.find('.sprk-b-InputContainer').hasClass('sprk-b-InputContainer'),
    ).toBe(true);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = shallow(<SprkRadioGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkRadioGroup variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkRadioGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkRadioGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });
});
