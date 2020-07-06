import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkHelperText from './SprkHelperText';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkHelperText:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkHelperText additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-HelperText').hasClass(expected)).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkHelperText analyticsString={expected} />);
    expect(wrapper.find('.sprk-b-HelperText').prop('data-analytics')).toEqual(
      expected,
    );
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkHelperText idString={expected} />);
    expect(wrapper.find('.sprk-b-HelperText').prop('data-id')).toEqual(
      expected,
    );
  });
});
