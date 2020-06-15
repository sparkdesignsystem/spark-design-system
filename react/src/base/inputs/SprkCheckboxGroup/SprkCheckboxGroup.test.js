import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkCheckboxGroup from './SprkCheckboxGroup';
import SprkCheckbox from '../SprkCheckbox/SprkCheckbox';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkCheckboxGroup:', () => {
  it('should render SprkCheckbox inside of it', () => {
    const wrapper = shallow(
      <SprkCheckboxGroup>
        <SprkCheckbox>Label</SprkCheckbox>
        <SprkCheckbox>Label</SprkCheckbox>
        <SprkCheckbox>Label</SprkCheckbox>
      </SprkCheckboxGroup>,
    );
    expect(wrapper.find('SprkCheckbox').length).toBe(3);
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

  it('should render helper text', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkCheckboxGroup helperText={expected} />);
    expect(wrapper.find('.sprk-b-HelperText').text()).toEqual(expected);
  });

  it('should render error container', () => {
    const expected = 'Error message test.';
    const wrapper = mount(
      <SprkCheckboxGroup valid={false} errorMessage={expected} />,
    );
    expect(wrapper.find('SprkErrorContainer').length).toEqual(1);
    expect(wrapper.find('.sprk-b-ErrorText').text()).toEqual(expected);
  });
});
