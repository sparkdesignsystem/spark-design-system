/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooterConnectIcons from './SprkFooterConnectIcons';
import SprkIcon from '../../../SprkIcon/SprkIcon';

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

    const wrapper = mount(
      <SprkFooterConnectIcons
        connectIcons={connectIcons}
      />,
    );
    expect(wrapper.find(SprkIcon).length).toBe(4);
  });
});
