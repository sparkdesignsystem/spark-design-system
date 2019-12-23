/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadAccordion from './SprkMastheadAccordion';

Enzyme.configure({ adapter: new Adapter() });

it('SprkMastheadAccordion: Should render a trigger with the correct classes', () => {
  const wrapper = mount(<SprkMastheadAccordion />);
  expect(wrapper.find('.sprk-c-MastheadAccordion').length).toBe(1);
});

it('SprkMastheadAccordion: Should add classes when additionalClasses has a value', () => {
  const wrapper = mount(
    <SprkMastheadAccordion additionalClasses="sprk-u-man" />,
  );
  expect(wrapper.find('.sprk-c-MastheadAccordion.sprk-u-man').length).toBe(1);
});

it('SprkMastheadAccordion: Should assign data-analytics when analyticsString has a value', () => {
  const wrapper = mount(
    <SprkMastheadAccordion SprkDropdown analyticsString="321" />,
  );
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('SprkMastheadAccordion: Should assign data-id when idString has a value', () => {
  const wrapper = mount(<SprkMastheadAccordion idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});

it('SprkMastheadAccordion: Should render the correct number of links', () => {
  const links = [
    {
      text: 'Item 1',
      href: '/button',
    },
    {
      text: 'Item 2',
      href: 'https://www.google.com',
      target: '_blank',
    },
  ];
  const wrapper = mount(<SprkMastheadAccordion links={links} />);
  expect(wrapper.find('.sprk-c-MastheadAccordion__item').length).toBe(2);
});
