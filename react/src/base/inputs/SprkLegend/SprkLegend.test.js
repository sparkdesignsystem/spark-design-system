import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkLegend from './SprkLegend';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkLegend:', () => {
  it('should render an element with the correct class', () => {
    const wrapper = mount(<SprkLegend>Legend</SprkLegend>);

    expect(wrapper.find('.sprk-b-Legend').length).toBe(1);
    expect(wrapper.find('.sprk-b-Label').length).toBe(1);
    expect(wrapper.find('.sprk-b-Legend').getDOMNode().classList.length).toBe(
      2,
    );
  });

  it('should apply additional classes', () => {
    const expected = 'test-class';
    const wrapper = mount(<SprkLegend additionalClasses={expected} />);
    expect(wrapper.find('.sprk-b-Legend').hasClass(expected)).toBe(true);
    expect(wrapper.find('.sprk-b-Legend').getDOMNode().classList.length).toBe(
      3,
    );
  });

  it('should apply disabled classes', () => {
    const wrapper = mount(<SprkLegend isDisabled />);
    expect(
      wrapper.find('.sprk-b-Legend').hasClass('sprk-b-Label--disabled'),
    ).toEqual(true);
    expect(wrapper.find('.sprk-b-Legend').getDOMNode().classList.length).toBe(
      3,
    );
  });

  it('should apply analyticsString', () => {
    const expected = 'testAnalytics';
    const wrapper = shallow(<SprkLegend analyticsString={expected} />);
    expect(wrapper.find('.sprk-b-Legend').prop('data-analytics')).toEqual(
      expected,
    );
  });

  it('should not render data-analytics if no value', () => {
    const wrapper = shallow(<SprkLegend />);
    expect(wrapper.find('.sprk-b-Legend').prop('data-analytics')).toEqual(
      undefined,
    );
  });

  it('should apply data-id', () => {
    const expected = 'test-data-id';
    const wrapper = shallow(<SprkLegend idString={expected} />);
    expect(wrapper.find('.sprk-b-Legend').prop('data-id')).toEqual(expected);
  });

  it('should not render data-id if no value', () => {
    const wrapper = shallow(<SprkLegend />);
    expect(wrapper.find('.sprk-b-Legend').prop('data-id')).toEqual(undefined);
  });

  it('should pass through additional attributes', () => {
    const wrapper = shallow(<SprkLegend data-my-attr="testing" />);
    expect(wrapper.find('[data-my-attr="testing"]').length).toBe(1);
  });
});
