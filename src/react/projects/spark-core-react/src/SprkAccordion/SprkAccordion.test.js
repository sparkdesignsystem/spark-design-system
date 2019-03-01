/* global it expect jest */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAccordion from './SprkAccordion';

Enzyme.configure({ adapter: new Adapter() });

it('should display a ul element with the correct base class', () => {
  const wrapper = mount(<SprkAccordion heading="test">test</SprkAccordion>);
  expect(wrapper.find('ul.sprk-c-Accordion.sprk-o-VerticalList').length).toBe(1);
});
