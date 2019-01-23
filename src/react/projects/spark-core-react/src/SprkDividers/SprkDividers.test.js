import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkDividers from './SprkDividers';

Enzyme.configure({ adapter: new Adapter() });

it('should display a span element with the correct base class when element is span', () => {
  const wrapper = shallow(<SprkDividers element="span"/>);
  expect(wrapper.find('span.sprk-c-Dividers').length).toBe(1);
});

it('should display a hr element with the correct base class when element is hr', () => {
  const wrapper = shallow(<SprkDividers element="hr"/>);
  expect(wrapper.find('hr.sprk-c-Dividers').length).toBe(1);
});