/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { SprkFooter } from '@sparkdesignsystem/spark-react';

const linkColumns = [
  {
    heading: 'Support',
    links: [
      {
        href:
          'https://github.com/sparkdesignsystem/spark-design-system/blob/staging/CONTRIBUTING.md',
        text: 'Contributing',
        element: 'a',
      },
      {
        href:
          'https://github.com/sparkdesignsystem/spark-design-system/releases',
        text: 'Release Notes',
        element: 'a',
      },
      {
        href: 'https://github.com/sparkdesignsystem/spark-design-system',
        text: 'Github',
        element: 'a',
      },
      {
        href:
          'https://github.com/sparkdesignsystem/spark-design-system/issues/new/choose',
        text: 'File An Issue',
        element: 'a',
      },
    ],
  },
  {
    heading: 'Available Packages',
    links: [
      {
        href: 'https://www.npmjs.com/package/@sparkdesignsystem/spark-angular',
        text: 'Angular',
        element: 'a',
      },
      {
        href: 'https://www.npmjs.com/package/@sparkdesignsystem/spark-react',
        text: 'React',
        element: 'a',
      },
      {
        href: 'https://www.npmjs.com/package/@sparkdesignsystem/spark',
        text: 'HTML',
        element: 'a',
      },
    ],
  },
];

const connectIcons = {
  heading: 'Connect With Us',
  icons: [
    {
      href: 'https://www.youtube.com/channel/UCDWybvtWDN2L9uO4GlQJL7A',
      name: 'youtube',
      screenReaderText: 'Spark Youtube Channel',
      element: 'a',
    },
    {
      href: 'https://twitter.com/SparkDesignSys',
      name: 'twitter',
      screenReaderText: 'Spark Twitter',
      element: 'a',
    },
    {
      href: 'mailto:sparkdesignsystem@rocketmortgage.com',
      name: 'email',
      screenReaderText: 'Spark Email',
      element: 'a',
    },
  ],
};

const date = new Date();
const year = date.getFullYear();
const paragraphs = [
  {
    text: `©2000 – ${year} Rocket Mortgage LLC. All rights reserved.`,
  },
];

const Footer = () => (
  <SprkFooter
    linkColumns={linkColumns}
    connectIcons={connectIcons}
    paragraphs={paragraphs}
    additionalClasses="docs-c-Footer"
  />
);
export default Footer;
