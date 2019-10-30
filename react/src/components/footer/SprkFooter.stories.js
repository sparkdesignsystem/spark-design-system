import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SprkFooter from './SprkFooter';

export default {
  title: 'Components|Footer',
  decorators: [
    withKnobs,
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkFooter,
  parameters: { jest: ['SprkFooter'] },
};

const globalItems = {
  heading: 'Global Links',
  items: [
    {
      mediaType: 'image',
      src:
        'https://spark-assets.netlify.com/spark-logo.svg',
      altText: 'Spark Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      element: 'a',
      mediaHref: '#nogo',
    },
    {
      mediaType: 'image',
      src:
        'https://spark-assets.netlify.com/spark-logo.svg',
      altText: 'Spark Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      element: 'a',
      mediaHref: '#nogo',
    },
    {
      mediaType: 'svg',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      svg: (
        <svg
          viewBox="0 0 303 274"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fillRule="nonzero" fill="none">
            <path
              d="M243.26 251.3l53.21-92.78a44.36 44.36 0 0 0-.13-44.22l-14.91-25.65-37.08 63.82c1.89 20.91-9.628 40.735-28.73 49.45l-41.65 71.69 31.06-.09a44.35 44.35 0 0 0 38.23-22.22z"
              fill="#FF451A"
            />
            <path
              d="M215.62 201.92c-.14.06-.27.15-.41.21l-91.77 42-17.26 29.7 67.79-.2 41.65-71.71zM245.51 33.98l-43.06 74.11c22.6 3.227 39.977 21.632 41.9 44.38l37.08-63.82-29.86-51.38a6.63 6.63 0 0 0-6.06-3.29z"
              fill="#FF5C1C"
            />
            <path
              d="M120.32 245.52l-32.57 14.9a6.63 6.63 0 0 0 1.52 12.54 43.91 43.91 0 0 0 8.68.87H106.18l17.26-29.71-3.12 1.4zM202.45 108.09l43.06-74.11a6.57 6.57 0 0 0-2.36.56l-20.54 9.11-67.9 30.12-36.69 63.17 56.3-25.1a50.15 50.15 0 0 1 28.13-3.75z"
              fill="#FF721E"
            />
            <path
              d="M99.15 98.41c-10.77 4.81-15.93 17.38-11.48 28a21.47 21.47 0 0 0 28.51 11.33l1.84-.82 36.69-63.17-55.56 24.66z"
              fill="#FF8920"
            />
            <path
              d="M214.64 148.4a21.45 21.45 0 0 0-28.51-11.32l-.67.29-36.7 63.18 54.39-24.13c10.75-4.81 15.93-17.37 11.49-28.02z"
              fill="#FF5C1C"
            />
            <path
              d="M100.66 166.83l-42.92 73.89a6.25 6.25 0 0 0 1.42-.43l20.54-9.11 69.06-30.63 36.7-63.18-57.47 25.62a50 50 0 0 1-27.33 3.84zM181.98 29.31l32.57-14.89a6.64 6.64 0 0 0-1.51-12.59 44 44 0 0 0-8.68-.87h-7.37l-17 29.17 1.99-.82z"
              fill="#FF721E"
            />
            <path
              d="M62.21 138.59a49.58 49.58 0 0 1-4.14-14.86l-36.74 63.23 29.41 50.61a6.63 6.63 0 0 0 7 3.15l42.96-73.89a49.5 49.5 0 0 1-38.49-28.24zM87.93 72.32l92.16-42.15 16.94-29.15-67.79.2z"
              fill="#FF8920"
            />
            <path
              d="M60.9 100.47a49.15 49.15 0 0 1 26.2-27.76l.76-.35 41.32-71.14-31.9.09a44.34 44.34 0 0 0-38.23 22.22L5.84 116.31a44.34 44.34 0 0 0 .13 44.22l15.33 26.39 36.76-63.28a49.3 49.3 0 0 1 2.84-23.17z"
              fill="#FFA022"
            />
          </g>
        </svg>
      ),
      element: 'a',
      mediaHref: '#nogo',
      altText: 'Spark Logo',
    },
    {
      mediaType: 'SprkIcon',
      description: 'Lorem ipsum dolor sit amet, consectetur.',
      iconName: 'house',
      element: 'a',
      altText: 'A House Icon',
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
        'https://spark-assets.netlify.com/spark-logo.svg',
      altText: 'Spark Logo',
      element: 'a',
    },
    {
      href: '#nogo',
      src:
        'https://spark-assets.netlify.com/spark-logo.svg',
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
