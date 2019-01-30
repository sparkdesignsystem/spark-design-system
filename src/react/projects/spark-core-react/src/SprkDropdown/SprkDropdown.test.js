import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDropdown from './SprkDropdown';

Enzyme.configure({ adapter: new Adapter() });

it('should render a trigger with the correct classes', () => {
  const wrapper = mount(<SprkDropdown />);
  expect(wrapper.find('.sprk-b-Link').length).toBe(1);
});