import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckboxGroup from './SprkCheckboxGroup';
import SprkCheckboxItem from '../SprkCheckboxItem/SprkCheckboxItem';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCheckboxGroup:', () => {
  it('should render SprkCheckbox inside of it', () => {
    const wrapper = shallow(
      <SprkCheckboxGroup>
        <SprkCheckboxItem>Label</SprkCheckboxItem>
        <SprkCheckboxItem>Label</SprkCheckboxItem>
        <SprkCheckboxItem>Label</SprkCheckboxItem>
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find('SprkCheckboxItem').length).toBe(3);
  });

  it('should have container styles', () => {
    const wrapper = shallow(<SprkCheckboxGroup />);
    expect(
      wrapper.find('.sprk-b-InputContainer').hasClass('sprk-b-InputContainer'),
    ).toBe(true);
  });

  it('should apply additionalClasses', () => {
    const expected = 'test';
    const wrapper = shallow(<SprkCheckboxGroup additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').hasClass(expected)).toBe(
      true,
    );
  });

  it('should apply huge container class', () => {
    const wrapper = shallow(<SprkCheckboxGroup variant="huge" />);
    expect(
      wrapper
        .find('.sprk-b-InputContainer')
        .hasClass('sprk-b-InputContainer--huge'),
    ).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkCheckboxGroup analyticsString={expected} />);
    expect(
      wrapper.find('.sprk-b-InputContainer').prop('data-analytics'),
    ).toEqual(expected);
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkCheckboxGroup idString={expected} />);
    expect(wrapper.find('.sprk-b-InputContainer').prop('data-id')).toEqual(
      expected,
    );
  });
});
