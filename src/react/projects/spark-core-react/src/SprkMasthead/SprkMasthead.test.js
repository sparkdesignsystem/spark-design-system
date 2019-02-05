/* global it expect window Event */
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMasthead from './SprkMasthead';

Enzyme.configure({ adapter: new Adapter() });

it('should display a div element with the correct base class', () => {
  const wrapper = shallow(<SprkMasthead />);
  expect(wrapper.find('header.sprk-c-Masthead').length).toBe(1);
});

it('should add classes if additionalClasses has a value', () => {
  const wrapper = shallow(<SprkMasthead additionalClasses="sprk-u-man" />);
  expect(wrapper.find('header.sprk-u-man').length).toBe(1);
});

it('should add data-analytics if analyticsString has a value', () => {
  const wrapper = shallow(<SprkMasthead analyticsString="masthead-1" />);
  expect(wrapper.find('header[data-analytics="masthead-1"]').length).toBe(1);
});

it('should add data-id if idString has a value', () => {
  const wrapper = shallow(<SprkMasthead idString="masthead-1" />);
  expect(wrapper.find('header[data-id="masthead-1"]').length).toBe(1);
});

it('should toggle classes on html and body and update its own state when the narrow nav is toggled', () => {
  const wrapper = mount(<SprkMasthead idString="masthead-1" />);
  wrapper.find('.sprk-c-Menu').simulate('click');
  expect(wrapper.state().narrowNavOpen).toBe(true);
});

it('should update state on scroll', () => {
  const wrapper = mount(<SprkMasthead />);
  window.scrollY = 11;
  window.dispatchEvent(new Event('scroll'));
  expect(wrapper.state().isScrolled).toBe(true);
});

it('should update state on orientationchange', () => {
  const wrapper = mount(<SprkMasthead />);
  wrapper.find('.sprk-c-Menu').simulate('click');
  expect(wrapper.state().narrowNavOpen).toBe(true);
  window.dispatchEvent(new Event('orientationchange'));
  expect(wrapper.state().narrowNavOpen).toBe(false);
});
