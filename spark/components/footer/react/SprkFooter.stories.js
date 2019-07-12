import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkFooter from './SprkFooter';

const globalItems = {
  heading: 'Global Links',
  items: [{
    mediaType: 'image',
    src: 'https://sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
    altText: 'Spark Logo',
    mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    element: 'a',
  },
  {
    mediaType: 'image',
    src: 'https://sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
    altText: 'Spark Logo',
    mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    element: 'a',
  },
  {
    mediaType: 'image',
    src: 'https://sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
    altText: 'Spark Logo',
    mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    element: 'a',
  },
  {
    mediaType: 'image',
    src: 'https://sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
    altText: 'Spark Logo',
    mediaAddClasses: 'drizzle-c-Logo drizzle-c-Logo--small',
    description: 'Lorem ipsum dolor sit amet, consectetur.',
    element: 'a',
  },
  ],
};
const linkColumns = [{
  heading: 'Site Links',
  links: [{
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
  links: [{
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
  links: [{
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
  icons: [{
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
  images: [{
    href: '#nogo',
    src: 'https://sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
    altText: 'Spark Logo',
    addClasses: 'drizzle-c-Logo',
    element: 'a',
  },
  {
    href: '#nogo',
    src: 'https://sparkdesignsystem.com/assets/toolkit/images/spark-logo.svg',
    altText: 'Spark Logo',
    addClasses: 'drizzle-c-Logo',
    element: 'a',
  },
  ],
  disclaimerTitle: 'My Award Disclaimer',
  disclaimerAnalytics: 'disclaimer-1',
  disclaimerText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
};
const paragraphs = [{
  text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
},
{
  text: 'Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur.',
},
{
  text: '**Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
},
{
  text: 'Lorem ipsum dolor sit amet, consectetur.',
},
];
const additionalIcons = [{
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
storiesOf('Components|Footer', module)
  .add('default', () => (
    <SprkFooter
      globalItems={globalItems}
      linkColumns={linkColumns}
      connectIcons={connectIcons}
      awards={awards}
      additionalIcons={additionalIcons}
      paragraphs={paragraphs}
    />
  ));
