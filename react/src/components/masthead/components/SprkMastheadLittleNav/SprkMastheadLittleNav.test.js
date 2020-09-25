/* global it expect */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadLittleNav from './SprkMastheadLittleNav';
import SprkButton from '../../../buttons/SprkButton';
import SprkMastheadSelector from '../SprkMastheadSelector/SprkMastheadSelector';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkMastheadLittleNav:', () => {
  it('should render an element with the correct class', () => {
    const links = [{ text: 'Item 1' }];
    const wrapper = mount(<SprkMastheadLittleNav links={links} />);
    expect(wrapper.find('.sprk-c-Masthead__little-nav').length).toBe(1);
  });

  it('should add classes when additionalClasses has a value', () => {
    const links = [{ text: 'Item 1' }];
    const wrapper = mount(
      <SprkMastheadLittleNav links={links} additionalClasses="sprk-u-man" />,
    );
    expect(wrapper.find('.sprk-c-Masthead__little-nav.sprk-u-man').length).toBe(
      1,
    );
  });

  it('should assign data-analytics when analyticsString has a value', () => {
    const links = [{ text: 'Item 1' }];
    const wrapper = mount(
      <SprkMastheadLittleNav links={links} analyticsString="321" />,
    );
    expect(wrapper.find('[data-analytics="321"]').length).toBe(1);
  });

  it('should assign data-id when idString has a value', () => {
    const links = [{ text: 'Item 1' }];
    const wrapper = mount(
      <SprkMastheadLittleNav links={links} idString="321" />,
    );
    expect(wrapper.find('[data-id="321"]').length).toBe(1);
  });

  it('should render the selector if selector.items is defined', () => {
    const wrapper = mount(
      <SprkMastheadLittleNav
        selector={{
          choiceFunction: () => {
            console.log('hi');
          },
          items: [{ text: 'Item 1' }],
        }}
      />,
    );
    expect(wrapper.find(SprkMastheadSelector).length).toBe(1);
  });

  it('should not render the selector if selector.items is not defined', () => {
    const wrapper = mount(
      <SprkMastheadLittleNav
        selector={{
          choiceFunction: () => {
            console.log('hi');
          },
        }}
      />,
    );
    expect(wrapper.find(SprkMastheadSelector).length).toBe(0);
  });

  it('should render href on the link if supplied', () => {
    const wrapper = mount(
      <SprkMastheadLittleNav
        links={[{ text: 'Item 1', href: 'https://www.google.com' }]}
      />,
    );
    expect(
      wrapper.find('.sprk-c-Masthead__link').instance().getAttribute('href'),
    ).toBe('https://www.google.com');
  });

  it('should not render href on the link if the element is not a', () => {
    const wrapper = mount(
      <SprkMastheadLittleNav links={[{ text: 'Item 1', element: 'span' }]} />,
    );
    expect(
      wrapper.find('.sprk-c-Masthead__link').instance().getAttribute('href'),
    ).toBe(null);
  });

  it('should not render href as #nogo on the link if the href is not defined', () => {
    const wrapper = mount(
      <SprkMastheadLittleNav links={[{ text: 'Item 1', element: 'a' }]} />,
    );
    expect(
      wrapper.find('.sprk-c-Masthead__link').instance().getAttribute('href'),
    ).toBe('#nogo');
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
    const wrapper = mount(
      <SprkMastheadLittleNav links={links} utilityContents={utilityContents} />,
    );
    expect(wrapper.find('.sprk-c-Button').length).toBe(1);
  });
});
