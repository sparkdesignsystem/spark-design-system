/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { SprkFooter, SprkLink } from '@sparkdesignsystem/spark-react';

const linkColumns = [
  {
    heading: 'Support',
    links: [{
        href: 'https://github.com/sparkdesignsystem/spark-design-system/blob/staging/CONTRIBUTING.md',
        text: 'Contributing',
        element: 'a',
      },
      {
        href: 'https://github.com/sparkdesignsystem/spark-design-system/releases',
        text: 'Release Notes',
        element: 'a',
      },
      {
        href: 'https://github.com/sparkdesignsystem/spark-design-system',
        text: 'Github',
        element: 'a',
      },
      {
        href: 'https://github.com/sparkdesignsystem/spark-design-system/issues/new/choose',
        text: 'File An Issue',
        element: 'a',
      },
    ],
  },
  {
    heading: 'Available Packages',
    links: [{
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
      href: 'https://twitter.com/sparkQL',
      name: 'twitter',
      screenReaderText: 'Twitter',
      element: 'a',
    },
    {
      href: 'mailto:sparkdesignsystem@quickenloans.com',
      name: 'email',
      screenReaderText: 'Email',
      element: 'a',
    },
  ],
}

const paragraphs = [
   {
     text: 'TBD Footer ©2000 – 2019... Information that we will put here.',
   },
 ]

const Footer = () => (
  <SprkFooter
    linkColumns={linkColumns}
    connectIcons={connectIcons}
    paragraphs={paragraphs}
  />
);
export default Footer;
