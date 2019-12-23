/* global it expect */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDivider from './SprkDivider';

Enzyme.configure({ adapter: new Adapter() });

it('SprkDivider: Should render span with correct base class when element is span', () => {
  const wrapper = shallow(<SprkDivider element="span" />);
  expect(wrapper.find('span.sprk-c-Divider').length).toBe(1);
});

it('SprkDivider: Should render hr with correct base class when element is hr', () => {
  const wrapper = shallow(<SprkDivider element="hr" />);
  expect(wrapper.find('hr.sprk-c-Divider').length).toBe(1);
});
