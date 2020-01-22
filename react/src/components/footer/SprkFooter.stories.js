import React from 'react';
import SprkFooter from './SprkFooter';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkFooterAwards from './components/SprkFooterAwards/SprkFooterAwards';
import SprkFooterConnectIcons from './components/SprkFooterConnectIcons/SprkFooterConnectIcons';
import SprkFooterGlobalSection from './components/SprkFooterGlobalSection/SprkFooterGlobalSection';

export default {
  title: 'Components/Footer',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkFooter,
  parameters: {
    subcomponents: {
      SprkFooterAwards,
      SprkFooterConnectIcons,
      SprkFooterGlobalSection
    },
    jest: ['SprkFooter'],
    info: `${markdownDocumentationLinkBuilder('footer')}`,
  },
};

const globalItems = {
  heading: 'Global Links',
  items: [
    {
      mediaType: 'image',
      src:
        'https://spark-assets.netlify.com/spark-logo-updated.svg',
      altText: 'Spark Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      element: 'a',
      mediaHref: '#nogo',
    },
    {
      mediaType: 'image',
      src:
        'https://spark-assets.netlify.com/spark-logo-updated.svg',
      altText: 'Spark Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      element: 'a',
      mediaHref: '#nogo',
    },
    {
      mediaType: 'image',
      src:
        'https://spark-assets.netlify.com/spark-logo-updated.svg',
      altText: 'Spark Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      element: 'a',
      mediaHref: '#nogo',
    },
    {
      mediaType: 'image',
      src:
        'https://spark-assets.netlify.com/spark-logo-updated.svg',
      altText: 'Spark Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      element: 'a',
      mediaHref: '#nogo',
    },
  ],
};

const linkColumns = [
  {
    heading: 'Site Links',
    links: [
      {
        href: '#nogo',
        text: 'About This.',
        analyticsString: 'about-this-link',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'About This Other Thing',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'About That',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'Link Item',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'This Link Item',
        element: 'a',
      },
    ],
  },
  {
    heading: 'Learn More',
    links: [
      {
        href: '#nogo',
        text: 'About This Other Thing',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'About This',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'About That',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'Link Item',
        element: 'a',
      },
    ],
  },
  {
    heading: 'Support',
    links: [
      {
        href: '#nogo',
        text: 'Share Your Screen',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'Opt Out',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'Disclosures and Other Things',
        element: 'a',
      },
      {
        href: '#nogo',
        text: 'We Want Your Feedback',
        element: 'a',
      },
    ],
  },
];

const connectIcons = {
  heading: 'Connect With Us',
  icons: [
    {
      href: '#nogo',
      name: 'facebook',
      screenReaderText: 'Facebook',
      element: 'a',
    },
    {
      href: '#nogo',
      name: 'instagram',
      screenReaderText: 'Instagram',
      element: 'a',
    },
    {
      href: '#nogo',
      name: 'twitter',
      screenReaderText: 'Twitter',
      element: 'a',
    },
    {
      href: '#nogo',
      name: 'youtube',
      screenReaderText: 'Youtube',
      element: 'a',
    },
  ],
};

const awards = {
  heading: 'Awards Heading Title',
  images: [
    {
      href: '#nogo',
      src:
        'https://spark-assets.netlify.com/spark-logo-mark.svg',
      altText: 'Spark Logo',
      element: 'a',
    },
    {
      href: '#nogo',
      src:
        'https://spark-assets.netlify.com/spark-logo-mark.svg',
      altText: 'Spark Logo',
      element: 'a',
    },
  ],
  disclaimerTitle: 'My Award Disclaimer',
  disclaimerAnalytics: 'test',
  disclaimerText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
};

const paragraphs = [
  {
    text:
      '*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
  },
  {
    text:
      'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    text:
      '**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const additionalIcons = [
  {
    name: 'house',
    href: '#nogo',
    screenReaderText: 'House',
    element: 'a',
  },
  {
    name: 'house',
    href: '#nogo',
    screenReaderText: 'House',
    element: 'a',
  },
  {
    name: 'house',
    href: '#nogo',
    screenReaderText: 'House',
    element: 'a',
  },
];

export const defaultStory = () => (
  <SprkFooter
    globalItems={globalItems}
    linkColumns={linkColumns}
    connectIcons={connectIcons}
    awards={awards}
    additionalIcons={additionalIcons}
    paragraphs={paragraphs}
  />
);

defaultStory.story = {
  name: 'Default',
};
