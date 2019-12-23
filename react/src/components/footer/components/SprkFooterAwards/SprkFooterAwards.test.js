/* global it expect describe */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkFooterAwards from './SprkFooterAwards';

Enzyme.configure({ adapter: new Adapter() });

describe('SprkFooterAwards Component', () => {
  it('SprkFooterAwards: Should display the awards', () => {
    const awards = {
      heading: 'Awards Heading Title',
      images: [
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
        },
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    };

    const wrapper = mount(<SprkFooterAwards awards={awards} />);
    expect(wrapper.find('img').length).toBe(2);
  });

  it('SprkFooterAwards: Should render a tags for the image link element', () => {
    const awards = {
      heading: 'Awards Heading Title',
      images: [
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
          element: 'a',
        },
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
          element: 'a',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    };

    const wrapper = mount(<SprkFooterAwards awards={awards} />);
    expect(wrapper.find('a').length).toBe(3);
  });

  it('SprkFooterAwards: Should render the href as nogo if not defined', () => {
    const awards = {
      heading: 'Awards Heading Title',
      images: [
        {
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          analyticsString: 'test-link',
          element: 'a',
        },
        {
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
          element: 'a',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    };

    const wrapper = mount(<SprkFooterAwards awards={awards} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe('#nogo');
  });

  it('SprkFooterAwards: Should not render the href if element us not an a', () => {
    const awards = {
      heading: 'Awards Heading Title',
      images: [
        {
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          analyticsString: 'test-link',
          element: 'span',
        },
        {
          src: 'https://spark-assets.netlify.com/spark-logo.svg',
          altText: 'Spark Logo',
          addClasses: 'drizzle-c-Logo',
          element: 'a',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    };

    const wrapper = mount(<SprkFooterAwards awards={awards} />);
    expect(
      wrapper
        .find('[data-analytics="test-link"]')
        .instance()
        .getAttribute('href'),
    ).toBe(null);
  });
});
