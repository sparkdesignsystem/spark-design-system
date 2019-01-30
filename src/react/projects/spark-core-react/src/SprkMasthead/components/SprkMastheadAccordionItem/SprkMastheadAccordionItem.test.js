import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadAccordionItem from './SprkMastheadAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

it('should display one element with the correct base class', () => {
  const wrapper = mount(<SprkMastheadAccordionItem />);
  expect(wrapper.find('.sprk-c-MastheadAccordion__item').length).toBe(1);
});