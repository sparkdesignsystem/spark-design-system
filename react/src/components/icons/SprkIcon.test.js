/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkIcon from './SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkIcon:', () => {
  it('should display an svg element with the correct base class', () => {
    const wrapper = mount(<SprkIcon iconName="settings" />);
    expect(wrapper.find('svg.sprk-c-Icon').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const wrapper = shallow(
      <SprkIcon iconName="settings" additionalClasses="test-class" />,
    );
    expect(wrapper.find('svg.test-class').length).toBe(1);
  });

  it('should set data-id when idString has a value', () => {
    const wrapper = shallow(<SprkIcon iconName="settings" idString="123" />);
    expect(wrapper.find('[data-id="123"]').length).toBe(1);
  });

  it('should override viewBox when viewBox has a value', () => {
    const wrapper = shallow(
      <SprkIcon iconName="settings" viewBox="0 0 128 128" />,
    );
    expect(wrapper.find('[viewBox="0 0 128 128"]').length).toBe(1);
  });

  it('should default viewBox when not provided', () => {
    const wrapper = shallow(<SprkIcon iconName="settings" />);
    expect(wrapper.find('[viewBox="0 0 64 64"]').length).toBe(1);
  });
});
