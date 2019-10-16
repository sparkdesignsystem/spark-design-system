/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooterConnectIcons from './SprkFooterConnectIcons';
import SprkIcon from '../../../../icons/react/SprkIcon';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFooterConnectIcons Component', () => {
  it('should display the connect icons', () => {
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

    const wrapper = mount(<SprkFooterConnectIcons connectIcons={connectIcons} />);
    expect(wrapper.find(SprkIcon).length).toBe(4);
  });

  it('should render the href as nogo if not defined', () => {
    const connectIcons = {
      heading: 'Connect With Us',
      icons: [
        {
          name: 'facebook',
          screenReaderText: 'Facebook',
          element: 'a',
          analyticsString: 'test-link',
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

    const wrapper = mount(<SprkFooterConnectIcons connectIcons={connectIcons} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe('#nogo');
  });

  it('should not render the href if element is not an a', () => {
    const connectIcons = {
      heading: 'Connect With Us',
      icons: [
        {
          name: 'facebook',
          screenReaderText: 'Facebook',
          element: 'span',
          analyticsString: 'test-link',
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

    const wrapper = mount(<SprkFooterConnectIcons connectIcons={connectIcons} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe(null);
  });
});
