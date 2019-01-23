import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkLink from './SprkLink';

Enzyme.configure({ adapter: new Adapter() });

it('should display a span element with the correct base class when element is span', () => {
  const wrapper = shallow(<SprkLink element="span"/>);
  expect(wrapper.find('span.sprk-c-Dividers').length).toBe(1);
});

it('should display a div element with the correct base class when element is div', () => {
  const wrapper = shallow(<SprkLink element="div"/>);
  expect(wrapper.find('div.sprk-c-Dividers').length).toBe(1);
});