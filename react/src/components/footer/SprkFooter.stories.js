import React from 'react';
import SprkFooter from './SprkFooter';
import SprkLink from '../../base/links/SprkLink';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import SprkStack from '../../objects/stack/SprkStack';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkFooterAwards from './components/SprkFooterAwards/SprkFooterAwards';
import SprkFooterConnectIcons from './components/SprkFooterConnectIcons/SprkFooterConnectIcons';
import SprkFooterGlobalSection from './components/SprkFooterGlobalSection/SprkFooterGlobalSection';
import SprkText from '../../base/typography/SprkText/SprkText';

export default {
  title: 'Components/Footer',
  decorators: [(story) => <div>{story()}</div>],
  component: SprkFooter,
  parameters: {
    subcomponents: {
      SprkFooterAwards,
      SprkFooterConnectIcons,
      SprkFooterGlobalSection,
    },
    jest: ['SprkFooter'],
    info: `
${markdownDocumentationLinkBuilder('footer')}
- The Footer is a navigation landmark for
accessibility tools. The attribute \`role=”contentinfo”\`
must be present.
    `,
  },
};

export const defaultStory = () => (
  <SprkFooter
    globalItems={{
      heading: 'Our Sister Companies',
      items: [
        {
          mediaType: 'image',
          src: 'https://spark-assets.netlify.app/rocket.svg',
          altText: 'Rocket Mortgage Logo',
          description:
            "Buy a home, refinance, or manage your mortgage online with America's largest mortgage lender",
          element: 'a',
          mediaHref: '#nogo',
        },
        {
          mediaType: 'image',
          src: 'https://spark-assets.netlify.app/rocket-loans-white.svg',
          altText: 'Rocket Loans Logo',
          description:
            'Get a personal loan to consolidate debt, renovate your home and more',
          element: 'a',
          mediaHref: '#nogo',
        },
        {
          mediaType: 'image',
          src: 'https://spark-assets.netlify.app/rocket-homes-white.svg',
          altText: 'Rocket Homes Logo',
          description:
            'Get a real estate agent handpicked for you and search the latest home listings',
          element: 'a',
          mediaHref: '#nogo',
        },
      ],
    }}
    linkColumns={[
      {
        heading: 'Site Links',
        links: [
          {
            href: '#nogo',
            text: 'About This',
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
    ]}
    connectIcons={{
      heading: 'Connect With Us',
      icons: [
        {
          href: '#nogo',
          name: 'facebook',
          screenReaderText: 'Facebook',
          element: 'a',
          addClasses:
            'sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color',
        },
        {
          href: '#nogo',
          name: 'instagram',
          screenReaderText: 'Instagram',
          element: 'a',
          addClasses:
            'sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color',
        },
        {
          href: '#nogo',
          name: 'twitter',
          screenReaderText: 'Twitter',
          element: 'a',
          addClasses:
            'sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color',
        },
        {
          href: '#nogo',
          name: 'youtube',
          screenReaderText: 'YouTube',
          element: 'a',
          addClasses:
            'sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color',
        },
      ],
    }}
    awards={{
      heading: 'Awards Heading Title',
      images: [
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.app/spark-logo-mark.svg',
          altText: 'Spark Logo',
          element: 'a',
        },
        {
          href: '#nogo',
          src: 'https://spark-assets.netlify.app/spark-logo-mark.svg',
          altText: 'Spark Logo',
          element: 'a',
        },
      ],
      disclaimerTitle: 'My Award Disclaimer',
      disclaimerAnalytics: 'test',
      disclaimerText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in laoreet ante, non feugiat neque. Suspendisse et ipsum leo. Quisque non consectetur justo.',
    }}
    additionalIcons={[
      {
        name: 'home',
        href: '#nogo',
        screenReaderText: 'House',
        element: 'a',
      },
      {
        name: 'home',
        href: '#nogo',
        screenReaderText: 'House',
        element: 'a',
      },
      {
        name: 'home',
        href: '#nogo',
        screenReaderText: 'House',
        element: 'a',
      },
    ]}
    paragraphs={[
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
    ]}
    additionalDisclaimer={
      <SprkStackItem>
        <SprkText
          variant="bodyFour"
          additionalClasses="sprk-c-Footer__text"
          element="p"
        >
          Sed ut perspiciatis unde omnis iste natus error sit{' '}
          <SprkLink href="#nogo" additionalClasses="sprk-b-Link--inline-light">
            inline link
          </SprkLink>{' '}
          accusantium doloremque laudantiu.
        </SprkText>
      </SprkStackItem>
    }
    appStoreLinks={
      <SprkStack splitAt="tiny" itemSpacing="medium">
        <SprkStackItem>
          <SprkLink href="#nogo">
            <img
              src="https://spark-assets.netlify.app/apple-store.svg"
              alt="Go to Apple Store"
            />
          </SprkLink>
        </SprkStackItem>
        <SprkStackItem>
          <SprkLink href="#nogo">
            <img
              src="https://spark-assets.netlify.app/google-play.svg"
              alt="Go to Google Play Store"
            />
          </SprkLink>
        </SprkStackItem>
      </SprkStack>
    }
  />
);

defaultStory.story = {
  name: 'Default',
};
