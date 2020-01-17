import React from 'react';
import {
  SprkStack,
  SprkStackItem,
  SprkCard,
} from '@sparkdesignsystem/spark-react';
import Layout from '../components/layouts/Layout';

const teaserDesigners = {
  bodyText: `
    Lorem ipsum dolor sit amet,
    doctus invenirevix te. Facilisi perpetua.
  `,
  cta: {
    text: 'Get Started',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: '/installing-spark/developers',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: 'Card:teaser-link',
    mediaVariant: 'img',
  },
  title: 'Getting Started For Designers',
  titleFirst: false,
};

const teaserDevelopers = {
  bodyText: `
    Lorem ipsum dolor sit amet, doctus
    invenirevix te. Facilisi perpetua.
  `,
  cta: {
    text: 'Get Started',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: 'https://sparkdesignsystem.com/',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: 'Card:teaser-link',
    mediaVariant: 'img',
  },
  title: 'Getting Started For Developers',
  titleFirst: false,
};

const teaserComponents = {
  bodyText: `
    Lorem ipsum dolor sit amet,
    doctus invenirevix te.
    Facilisi perpetua.
  `,
  cta: {
    text: 'See All Components',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: 'https://sparkdesignsystem.com/',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: 'Card:teaser-link',
    mediaVariant: 'img',
  },
  title: 'Components',
  titleFirst: false,
};

const teaserFundamentals = {
  bodyText: `
    Lorem ipsum dolor sit amet, doctus
    invenirevix te. Facilisi perpetua.
  `,
  cta: {
    text: 'Learn More',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: 'https://sparkdesignsystem.com/',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: 'Card:teaser-link',
    mediaVariant: 'img',
  },
  title: 'Fundamentals',
  titleFirst: false,
};

const teaserDocumentaion = {
  bodyText: `
    Lorem ipsum dolor sit amet,
    doctus invenirevix te. Facilisi perpetua.
  `,
  cta: {
    text: 'Learn More',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: 'https://sparkdesignsystem.com/',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: 'Card:teaser-link',
    mediaVariant: 'img',
  },
  title: 'Documentation',
  titleFirst: false,
};

const teaserNews = {
  bodyText: `
    Lorem ipsum dolor sit amet,
    doctus invenirevix te.
    Facilisi perpetua.
  `,
  cta: {
    text: 'See Latest Updates',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: 'https://sparkdesignsystem.com/',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
    mediaAnalyticsString: 'Card:teaser-link',
    mediaVariant: 'img',
  },
  title: 'News and Updates',
  titleFirst: false,
};

const spacingBtwSections = 'huge';
const spacingBtwHeadingAndParagraph = 'large';

const IndexPage = () => (
  <Layout hasSideBar={false}>
    <SprkStack itemSpacing={spacingBtwSections}>
      <SprkStackItem>
        <SprkStack
          itemSpacing={spacingBtwHeadingAndParagraph}
        >
          <SprkStackItem>
            <h1 className="sprk-b-TypeDisplayOne sprk-u-Color--red">
              Spark Design System
            </h1>
          </SprkStackItem>

          <SprkStackItem>
            <p className="sprk-b-TypeBodyTwo sprk-u-Measure">
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed gravida urna quis nulla ultrices,
              sed efficitur risus elementum. Vivamus
              semper ex a lorem sodales, rhoncus rhoncus augue cursus.
            </p>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>

      <SprkStackItem>
        <div className="docs-o-Grid docs-o-Grid--three-col docs-o-Grid--large">
          <SprkCard
            variant="teaser"
            teaserConfig={teaserDesigners}
          />

          <SprkCard
            variant="teaser"
            teaserConfig={teaserDevelopers}
          />

          <SprkCard
            variant="teaser"
            teaserConfig={teaserComponents}
          />

          <SprkCard
            variant="teaser"
            teaserConfig={teaserFundamentals}
          />

          <SprkCard
            variant="teaser"
            teaserConfig={teaserDocumentaion}
          />

          <SprkCard
            variant="teaser"
            teaserConfig={teaserNews}
          />
        </div>
      </SprkStackItem>
    </SprkStack>
  </Layout>
);

export default IndexPage;
