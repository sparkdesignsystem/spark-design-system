/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadNarrowNav from './SprkMastheadNarrowNav';
import SprkMastheadSelector from '../SprkMastheadSelector/SprkMastheadSelector';

Enzyme.configure({ adapter: new Adapter() });

it('SprkMastheadNarrowNav: Shouldnt render anything by default', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadNarrowNav links={links} />);
  expect(wrapper.children.length).toBe(1);
});

it('SprkMastheadNarrowNav: Should render the nav if isOpen is true', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadNarrowNav isOpen links={links} />);
  expect(wrapper.find('.sprk-c-Masthead__narrow-nav').length).toBe(1);
});

it('SprkMastheadNarrowNav: Should render the selector if selector (and items) are defined', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(
    <SprkMastheadNarrowNav
      isOpen
      links={links}
      selector={{ items: [{ text: 'Item 1' }] }}
    />,
  );
  expect(wrapper.find(SprkMastheadSelector).length).toBe(1);
});
