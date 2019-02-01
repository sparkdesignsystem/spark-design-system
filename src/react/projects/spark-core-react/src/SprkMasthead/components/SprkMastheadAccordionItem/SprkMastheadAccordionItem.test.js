import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadAccordionItem from './SprkMastheadAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

it('should display one element with the correct base class', () => {
  const wrapper = mount(<SprkMastheadAccordionItem />);
  expect(wrapper.find('.sprk-c-MastheadAccordion__item').length).toBe(1);
});

it('should default to open if defaultOpen is true', () => {
  const wrapper = shallow(<SprkMastheadAccordionItem defaultOpen />);
  expect(wrapper.state().isOpen).toBe(true);
});

it('should toggle the accordion open on click', () => {
  const wrapper = mount(<SprkMastheadAccordionItem text="Item 1" subNavLinks={[{text: 'Item 1'}]} />);
  expect(wrapper.state().isOpen).toBe(false);
  wrapper.find('.sprk-c-MastheadAccordion__summary').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
});

it('should render the supplied element', () => {
  const wrapper = mount(<SprkMastheadAccordionItem element='p' />);
  expect(wrapper.find('p.sprk-c-MastheadAccordion__summary').length).toBe(1);
});

it('should add a class if isActive is true', () => {
  const wrapper = mount(<SprkMastheadAccordionItem isActive />);
  expect(wrapper.find('.sprk-c-MastheadAccordion__item.sprk-c-MastheadAccordion__item--active').length).toBe(1);
});

it('should render as add classes if isButton is true', () => {
  const wrapper = mount(<SprkMastheadAccordionItem isButton />);
  expect(wrapper.find('.sprk-c-MastheadAccordion__item.sprk-o-Box').length).toBe(1);
  expect(wrapper.find('span.sprk-c-MastheadAccordion__heading').length).toBe(0);
});

it('should render the right icon if leadingIcon has value', () => {
  const wrapper = mount(<SprkMastheadAccordionItem leadingIcon="settings" />);
  expect(wrapper.find('.sprk-c-Icon > use[xlinkHref="#settings"]').length).toBe(1);
});

