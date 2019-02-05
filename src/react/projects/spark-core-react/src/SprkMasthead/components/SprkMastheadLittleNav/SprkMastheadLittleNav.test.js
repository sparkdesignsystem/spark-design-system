/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadLittleNav from './SprkMastheadLittleNav';
import SprkButton from '../../../SprkButton/SprkButton';

Enzyme.configure({ adapter: new Adapter() });

it('should render an element with the correct class', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadLittleNav links={links} />);
  expect(wrapper.find('.sprk-c-Masthead__little-nav').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadLittleNav links={links} additionalClasses="sprk-u-man" />);
  expect(wrapper.find('.sprk-c-Masthead__little-nav.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadLittleNav links={links} analyticsString="321" />);
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadLittleNav links={links} idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});

it('should render the correct number of links', () => {
  const links = [
    {
      text: 'Navigation Item',
    },
    {
      text: 'Your Item',
    },
    {
      text: 'Nav Item',
    },
  ];
  const wrapper = mount(<SprkMastheadLittleNav links={links} />);
  expect(wrapper.find('.sprk-c-Masthead__site-links li').length).toBe(3);
});

it('should render utilityContents if supplied', () => {
  const utilityContents = [<SprkButton>hi</SprkButton>];
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadLittleNav links={links} utilityContents={utilityContents} />);
  expect(wrapper.find('.sprk-c-Button').length).toBe(1);
});
