/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooter from './SprkFooter';
import SprkIcon from '../icons/SprkIcon';
import SprkFooterGlobalSection from './components/SprkFooterGlobalSection/SprkFooterGlobalSection';
import SprkFooterConnectIcons from './components/SprkFooterConnectIcons/SprkFooterConnectIcons';
import SprkFooterAwards from './components/SprkFooterAwards/SprkFooterAwards';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFooter Component', () => {
  it('SprkFooter: Should display a Footer element with the correct base class', () => {
    const wrapper = mount(<SprkFooter />);
    expect(wrapper.find('.sprk-o-Box.sprk-o-Box--large.sprk-u-BackgroundColor--gray').length).toBe(
      1,
    );
  });

  it('SprkFooter: Should display a Footer element with the global section', () => {
    const globalItems = {
      heading: 'Global Links',
      items: [
        {
          mediaType: 'image',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          description: 'Lorem ipsum dolor sit amet, consectetur.',
        },
      ],
    };
    const wrapper = mount(<SprkFooter globalItems={globalItems} />);
    expect(wrapper.find(SprkFooterGlobalSection).length).toBe(1);
  });

  it('SprkFooter: Should display a Footer element with the column links section', () => {
    const linkColumns = [
      {
        heading: 'Site Links',
        links: [
          {
            href: '#nogo',
            text: 'About This.',
          },
          {
            href: '#nogo',
            text: 'About This Other Thing',
          },
          {
            href: '#nogo',
            text: 'About That',
          },
          {
            href: '#nogo',
            text: 'Link Item',
          },
          {
            href: '#nogo',
            text: 'This Link Item',
          },
        ],
      },
    ];
    const wrapper = mount(<SprkFooter linkColumns={linkColumns} />);
    expect(wrapper.find('h3').getDOMNode().innerHTML).toBe('Site Links');
  });

  it('SprkFooter: Should display a Footer element with the connect icons section', () => {
    const connectIcons = {
      heading: 'Connect With Us',
      icons: [
        {
          href: '#nogo',
          name: 'facebook',
          screenReaderText: 'Facebook',
        },
      ],
    };
    const wrapper = mount(<SprkFooter connectIcons={connectIcons} />);
    expect(wrapper.find(SprkFooterConnectIcons).length).toBe(1);
  });

  it('SprkFooter: Should display a Footer element with the awards section', () => {
    const awards = {
      heading: 'Awards Heading Title',
      images: [
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
        },
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerAnalytics: 'test',
      disclaimerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    };
    const wrapper = mount(<SprkFooter awards={awards} />);
    expect(wrapper.find(SprkFooterAwards).length).toBe(1);
  });

  it('SprkFooter: Should display a Footer element with the additional icons section', () => {
    const additionalIcons = [
      {
        name: 'house',
        href: '#nogo',
        addClasses: '',
        screenReaderText: 'House',
      },
    ];
    const wrapper = mount(<SprkFooter additionalIcons={additionalIcons} />);
    expect(wrapper.find(SprkIcon).length).toBe(1);
  });

  it('SprkFooter: Should display a Footer element with the paragraphs section', () => {
    const paragraphs = [{ text: 'Lorem ipsum dolor' }];
    const wrapper = mount(<SprkFooter paragraphs={paragraphs} />);
    expect(wrapper.find('p').length).toBe(1);
  });

  it('SprkFooter: Should render the href as nogo if not defined for additionalIcons', () => {
    const additionalIcons = [
      {
        name: 'house',
        addClasses: '',
        screenReaderText: 'House',
        analyticsString: 'test-link',
        element: 'a',
      },
    ];
    const wrapper = mount(<SprkFooter additionalIcons={additionalIcons} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe('#nogo');
  });

  it('SprkFooter: Should not render the href if element is not an a for additionalIcons', () => {
    const additionalIcons = [
      {
        name: 'house',
        addClasses: '',
        screenReaderText: 'House',
        analyticsString: 'test-link',
        element: 'span',
      },
    ];
    const wrapper = mount(<SprkFooter additionalIcons={additionalIcons} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe(null);
  });

  it('SprkFooter: Should render the href as nogo if not defined for column links', () => {
    const linkColumns = [
      {
        heading: 'Site Links',
        links: [
          {
            text: 'About This.',
            analyticsString: 'test-link',
            element: 'a',
          },
          {
            href: '#nogo',
            text: 'About This Other Thing',
          },
          {
            href: '#nogo',
            text: 'About That',
          },
          {
            href: '#nogo',
            text: 'Link Item',
          },
          {
            href: '#nogo',
            text: 'This Link Item',
          },
        ],
      },
    ];
    const wrapper = mount(<SprkFooter linkColumns={linkColumns} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe('#nogo');
  });

  it('SprkFooter: Should not render the href if element is not an a for column links', () => {
    const linkColumns = [
      {
        heading: 'Site Links',
        links: [
          {
            href: '#nogo',
            text: 'About This.',
            analyticsString: 'test-link',
            element: 'span',
          },
          {
            href: '#nogo',
            text: 'About This Other Thing',
          },
          {
            href: '#nogo',
            text: 'About That',
          },
          {
            href: '#nogo',
            text: 'Link Item',
          },
          {
            href: '#nogo',
            text: 'This Link Item',
          },
        ],
      },
    ];
    const wrapper = mount(<SprkFooter linkColumns={linkColumns} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe(null);
  });
});
