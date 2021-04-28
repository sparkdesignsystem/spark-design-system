import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFieldset from './SprkFieldset';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFieldset:', () => {
  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = shallow(<SprkFieldset additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-Fieldset').hasClass(expected)).toBe(true);
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkFieldset analyticsString={expected} />);
    expect(wrapper.find('.sprk-b-Fieldset').prop('data-analytics')).toEqual(
      expected,
    );
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkFieldset idString={expected} />);
    expect(wrapper.find('.sprk-b-Fieldset').prop('data-id')).toEqual(expected);
  });

  it('should set aria-describedby attribute if value provided', () => {
    const wrapper = shallow(<SprkFieldset ariaDescribedBy="error-id" />);
    expect(wrapper.find('.sprk-b-Fieldset').prop('aria-describedby')).toBe(
      'error-id',
    );
  });

  it('should not set aria-describedby attr if not provided', () => {
    const wrapper = shallow(<SprkFieldset />);
    expect(wrapper.find('.sprk-b-Fieldset').prop('aria-describedby')).toBe(
      undefined,
    );
  });
});
