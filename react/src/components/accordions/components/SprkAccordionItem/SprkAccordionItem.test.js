/* global it expect jest */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkAccordionItem from './SprkAccordionItem';

Enzyme.configure({ adapter: new Adapter() });

it('should display an element with the correct base class', () => {
  const wrapper = mount(
    <SprkAccordionItem heading="test">test</SprkAccordionItem>,
  );
  expect(wrapper.find('li.sprk-c-Accordion__item').length).toBe(1);
});

it('should default to open if defaultOpen is true', () => {
  const wrapper = mount(
    <SprkAccordionItem heading="test" isDefaultOpen>
      test
    </SprkAccordionItem>,
  );
  expect(wrapper.state().isOpen).toBe(true);
});

it('should toggle open on click', () => {
  const wrapper = mount(
    <SprkAccordionItem heading="test">test</SprkAccordionItem>,
  );
  expect(wrapper.state().isOpen).toBe(false);
  wrapper.find('a').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.find('a').simulate('click');
  expect(wrapper.state().isOpen).toBe(false);
});

it('should add a class to icon when opened', () => {
  const wrapper = mount(
    <SprkAccordionItem heading="test">test</SprkAccordionItem>,
  );
  wrapper.find('a').simulate('click');
  expect(wrapper.find('.sprk-c-Icon--open').length).toBe(1);
});

it('should add aria-expanded="true" when the toggle is open', () => {
  const wrapper = mount(
    <SprkAccordionItem heading="test">test</SprkAccordionItem>,
  );
  wrapper.find('a').simulate('click');
  expect(wrapper.find('[aria-expanded="true"]').length).toBe(2);
});

it('should run callback when passed as prop to onToggle', () => {
  const spyFunc = jest.fn();
  const wrapper = mount(
    <SprkAccordionItem heading="test" onToggle={spyFunc}>
      test
    </SprkAccordionItem>,
  );
  wrapper.find('a').simulate('click');
  expect(spyFunc.mock.calls.length).toBe(1);
  console.log('fooooooooooo')
});
