import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkIcon from './SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

it('should display an svg element with the correct base class', () => {
  const wrapper = mount(<SprkIcon iconType="settings" />);
  expect(wrapper.find('svg.sprk-c-Icon').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const wrapper = shallow(<SprkIcon iconType="settings" additionalClasses="sprk-c-Icon--l" />);
  expect(wrapper.find('svg.sprk-c-Icon--l').length).toBe(1);
});

it('should set data-id when idString has a value', () => {
  const wrapper = shallow(<SprkIcon iconType="settings" idString="123" />);
  expect(wrapper.find('[data-id="123"]').length).toBe(1);
});

it('should override viewBox when viewBox has a value', () => {
  const wrapper = shallow(<SprkIcon iconType="settings" viewBox="0 0 128 128" />);
  expect(wrapper.find('[viewBox="0 0 128 128"]').length).toBe(1);
});