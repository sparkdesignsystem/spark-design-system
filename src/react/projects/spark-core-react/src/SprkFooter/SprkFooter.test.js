/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooter from './SprkFooter';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFooter Component', () => {
  it('should display a Footer element with the correct base class', () => {
    const wrapper = mount(
      <SprkFooter />,
    );
    expect(wrapper.find('.sprk-o-Box.sprk-o-Box--large.sprk-u-BackgroundColor--gray').length).toBe(1);
  });

  it('should display the global section if it is supplied', () => {
    const globalItems = {
      heading: 'Global Links',
      items: [
        {
          mediaType: 'image',
          mediaSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
          altText: 'Spark Logo',
          mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
        },
        {
          mediaType: 'image',
          mediaSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
          altText: 'Spark Logo',
          mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
        },
      ],
    };

    const connectIcons = {
      heading: 'Connect With Us',
      icons: [
        {
          href: '#nogo',
          name: 'facebook',
          screenReaderText: 'Facebook',
        },
        {
          href: '#nogo',
          name: 'instagram',
          screenReaderText: 'Instagram',
        },
        {
          href: '#nogo',
          name: 'twitter',
          screenReaderText: 'Twitter',
        },
        {
          href: '#nogo',
          name: 'youtube',
          screenReaderText: 'Youtube',
        },
      ],
    };
    const wrapper = mount(
      <SprkFooter
        globalItems={globalItems}
        connectIcons={connectIcons}
      />,
    );
    expect(wrapper.find('div.sprk-o-Stack__item--three-tenths@m').length).toBe(1);
  });
});
