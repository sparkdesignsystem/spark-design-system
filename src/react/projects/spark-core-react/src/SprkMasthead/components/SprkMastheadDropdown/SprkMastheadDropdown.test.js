import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadDropdown from './SprkMastheadDropdown';

Enzyme.configure({ adapter: new Adapter() });

it('should display an svg element with the correct base class', () => {
  const wrapper = mount(<SprkMastheadDropdown />);
  expect(wrapper.find('svg.sprk-c-Icon').length).toBe(1);
});