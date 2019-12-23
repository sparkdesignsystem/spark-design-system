/* global Enzyme shallow Adapter it expect */
import React from 'react';
import { Link } from 'react-router-dom';
import SprkLink from './SprkLink';

Enzyme.configure({ adapter: new Adapter() });

it('SprkLink: Should display a link element with the correct base class if the variant'
  + ' is not unstyled', () => {
  const wrapper = shallow(<SprkLink />);
  expect(wrapper.find('a.sprk-b-Link').length).toBe(1);
});

it('SprkLink: Should display a link element without the sprk-b-Link class if the'
  + ' variant is unstyled', () => {
  const wrapper = shallow(<SprkLink variant="unstyled" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(false);
});

it('SprkLink: Should display a link element with correct classes when variant'
  + ' is simple', () => {
  const wrapper = shallow(<SprkLink variant="simple" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(true);
});

it('SprkLink: Should display a link element with correct classes when variant is '
  + 'has-icon', () => {
  const wrapper = shallow(<SprkLink variant="has-icon" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--simple')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--has-icon')).toBe(true);
});

it('SprkLink: Should display a link element with correct classes when variant is'
  + ' plain', () => {
  const wrapper = shallow(<SprkLink variant="plain" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--plain')).toBe(true);
});

it('SprkLink: Should display a link element with correct classes when variant is'
  + ' disabled', () => {
  const wrapper = shallow(<SprkLink variant="disabled" />);
  expect(wrapper.find('a').hasClass('sprk-b-Link')).toBe(true);
  expect(wrapper.find('a').hasClass('sprk-b-Link--disabled')).toBe(true);
});

it('SprkLink: href should equal # if not provided', () => {
  const wrapper = shallow(<SprkLink />);
  expect(wrapper.find('a[href="#"]').length).toBe(1);
});

it('SprkLink: Should prevent default when no href is provided', () => {
  const wrapper = shallow(<SprkLink />);
  let prevented = false;
  wrapper.find('a').simulate('click', {
    preventDefault: () => {
      prevented = true;
    },
  });
  expect(prevented).toBe(true);
});

it('SprkLink: Should not render an href if none is provided and element passed is a'
  + ' router link', () => {
  const wrapper = shallow(<SprkLink element={Link} to="button" />);
  expect(wrapper.find('a[href="#"]').length).toBe(0);
});
