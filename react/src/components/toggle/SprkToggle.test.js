/* global it expect */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkToggle from './SprkToggle';

Enzyme.configure({ adapter: new Adapter() });

it('SprkToggle: Should display one element with the correct additional classes', () => {
  const wrapper = mount(
    <SprkToggle title="Toggle title" additionalClasses="sprk-o-Stack">
      Body text
    </SprkToggle>,
  );
  expect(wrapper.find('div.sprk-o-Stack').length).toBe(1);
});

it('SprkToggle: Should default to open if defaultOpen is true', () => {
  const wrapper = shallow(
    <SprkToggle isDefaultOpen title="Toggle title">
      Body text
    </SprkToggle>,
  );
  expect(wrapper.state().isOpen).toBe(true);
});

it('SprkToggle: Should toggle open on click', () => {
  const wrapper = mount(
    <SprkToggle title="Toggle title">Body text</SprkToggle>,
  );
  expect(wrapper.state().isOpen).toBe(false);
  wrapper.find('a').simulate('click');
  expect(wrapper.state().isOpen).toBe(true);
  wrapper.find('a').simulate('click');
  expect(wrapper.state().isOpen).toBe(false);
});

it('SprkToggle: Should add a class to icon when opened', () => {
  const wrapper = mount(
    <SprkToggle title="Toggle title">Body text</SprkToggle>,
  );
  wrapper.find('a').simulate('click');
  expect(wrapper.find('.sprk-c-Icon--open').length).toBe(1);
});

it('SprkToggle: Should add aria-expanded="true" when the toggle is open', () => {
  const wrapper = mount(
    <SprkToggle title="Toggle title">Body text</SprkToggle>,
  );
  wrapper.find('a').simulate('click');
  expect(wrapper.find('[aria-expanded="true"]').length).toBe(2);
});
