import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkLegend from './SprkLegend';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkLegend:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkLegend additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-Legend').hasClass(expected)).toBe(true);
  });

  it('should apply disabled classes', () => {
    const wrapper = shallow(<SprkLegend isDisabled />);
    expect(
      wrapper.find('.sprk-b-Legend').hasClass('sprk-b-Label--disabled'),
    ).toEqual(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkLegend analyticsString={expected} />);
    expect(wrapper.find('.sprk-b-Legend').prop('data-analytics')).toEqual(
      expected,
    );
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkLegend idString={expected} />);
    expect(wrapper.find('.sprk-b-Legend').prop('data-id')).toEqual(expected);
  });
  it('should set aria-describedby attribute if value provided', () => {
    const wrapper = shallow(<SprkLegend ariaDescribedBy="error-id" />);
    expect(wrapper.find('.sprk-b-Legend').prop('aria-describedby')).toBe(
      'error-id',
    );
  });

  it('should not set aria-describedby attr if not provided', () => {
    const wrapper = shallow(<SprkLegend />);
    expect(wrapper.find('.sprk-b-Legend').prop('aria-describedby')).toBe(
      undefined,
    );
  });
});
