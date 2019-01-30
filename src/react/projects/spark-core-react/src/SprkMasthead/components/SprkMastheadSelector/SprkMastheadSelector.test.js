import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadSelector from './SprkMastheadSelector';

Enzyme.configure({ adapter: new Adapter() });

it('should display an svg element with the correct base class', () => {
  const wrapper = mount(<SprkMastheadSelector />);
  expect(wrapper.find('svg.sprk-c-Icon').length).toBe(1);
});