import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadAccordion from './SprkMastheadAccordion';

Enzyme.configure({ adapter: new Adapter() });

it('should an element with the correct class', () => {
  const wrapper = mount(<SprkMastheadAccordion />);
  expect(wrapper.find('.sprk-c-MastheadAccordion').length).toBe(1);
});