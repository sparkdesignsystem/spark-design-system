/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadBigNav from './SprkMastheadBigNav';

Enzyme.configure({ adapter: new Adapter() });

it('should render an element with the correct class', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadBigNav links={links} />);
  expect(wrapper.find('.sprk-c-Masthead__big-nav').length).toBe(1);
});

it('should add classes when additionalClasses has a value', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(
    <SprkMastheadBigNav links={links} additionalClasses="sprk-u-man" />,
  );
  expect(wrapper.find('.sprk-c-Masthead__big-nav.sprk-u-man').length).toBe(1);
});

it('should assign data-analytics when analyticsString has a value', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(
    <SprkMastheadBigNav links={links} analyticsString="321" />,
  );
  expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
});

it('should assign data-id when idString has a value', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = mount(<SprkMastheadBigNav links={links} idString="321" />);
  expect(wrapper.find('[data-id="321"]').length).toBe(1);
});

it('should render the correct number of links', () => {
  const links = [
    {
      text: 'Navigation Item',
      subNavLinks: [
        {
          text: 'Placeholder',
        },
        {
          text: 'Item',
        },
        {
          text: 'Sub Menu Item',
        },
      ],
    },
    {
      text: 'Your Item',
    },
    {
      text: 'Nav Item',
    },
  ];
  const wrapper = mount(<SprkMastheadBigNav links={links} />);
  expect(wrapper.find('.sprk-c-Masthead__big-nav-item').length).toBe(3);
});

it('should add a class to the link if its active', () => {
  const links = [
    {
      text: 'Navigation Item',
      isActive: true,
      subNavLinks: [
        {
          text: 'Placeholder',
        },
        {
          text: 'Item',
        },
        {
          text: 'Sub Menu Item',
        },
      ],
    },
  ];
  const wrapper = mount(<SprkMastheadBigNav links={links} />);
  expect(wrapper.find('.sprk-c-Masthead__big-nav-item').length).toBe(1);
  expect(wrapper.find('.sprk-c-Masthead__link--active').length).toBe(1);
});
