import React from 'react';
import {
  SprkStack,
  SprkStackItem,
  SprkCard,
  SprkLink,
} from '@sparkdesignsystem/spark-react';
import Layout from '../components/layouts/Layout';
import componentsMedia from '../images/components.svg';
import developersMedia from '../images/developers.svg';
import designersMedia from '../images/designers.svg';
import foundationsMedia from '../images/foundations.svg';
import newsMedia from '../images/news-and-updates.svg';
import utilitiesMedia from '../images/utilities.svg';
import guidesMedia from '../images/guides.svg';

const teaserDesigners = {
  bodyText: `
    Get started with Design by reading the principles
    that we use in Spark Design System.
  `,
  cta: {
    text: 'Go To Designer Basics',
    ctaVariant: 'button',
    ctaLinkElement: 'a',
    buttonVariant: 'tertiary',
    href: '/principles/design-principles',
  },
  media: {
    href: '/principles/design-principles',
    mediaLinkElement: 'a',
    imgAlt: 'Go to Designer Basics',
    imgSrc: designersMedia,
    mediaVariant: 'img',
  },
  title: 'Designer Basics',
  titleFirst: false,
};

const teaserDevelopers = {
  bodyText: `
    Learn how to install Spark’s
    npm packages into the build
    of your application. You’ll
    also find support for setting
    up Sass, React, Angular, and more.
  `,
  cta: {
    text: 'Go To Developer Basics',
    ctaVariant: 'button',
    ctaLinkElement: 'a',
    buttonVariant: 'tertiary',
    href: '/installing-spark',
  },
  media: {
    href: '/installing-spark',
    mediaLinkElement: 'a',
    imgAlt: 'Go to Developer Basics',
    imgSrc: developersMedia,
    mediaVariant: 'img',
  },
  title: 'Developer Basics',
  titleFirst: false,
};

const teaserComponents = {
  bodyText: `
    Explore the library of Spark
    components and supporting
    documentation, including
    design guidelines, code
    samples, and configuration
    options.
  `,
  cta: {
    text: 'Go To Components',
    ctaVariant: 'button',
    ctaLinkElement: 'a',
    buttonVariant: 'tertiary',
    href: '/using-spark/components/button',
  },
  media: {
    href: '/using-spark/components/button',
    mediaLinkElement: 'a',
    imgAlt: 'Go to Components',
    imgSrc: componentsMedia,
    mediaVariant: 'img',
  },
  title: 'Components',
  titleFirst: false,
};

const teaserGuides = {
  bodyText: `
    Guidance on how to make design choices that
    prioritize user experience. Get answers on topics
    like layout, messaging, and placement.
  `,
  cta: {
    text: 'Explore Guides',
    ctaVariant: 'button',
    buttonVariant: 'tertiary',
    href: '/using-spark/guides',
    ctaLinkElement: 'a',
  },
  media: {
    href: '/using-spark/guides',
    mediaLinkElement: 'a',
    imgAlt: 'Explore Guides',
    imgSrc: guidesMedia,
    mediaVariant: 'img',
  },
  title: "'How To' Guides",
  titleFirst: false,
};

const teaserFoundations = {
  bodyText: `
   Looking for our brand color palette,
   typography guidelines, element spacing,
    and other foundational style elements?
    Start here.
  `,
  cta: {
    text: 'Go To Foundations',
    ctaVariant: 'button',
    ctaLinkElement: 'a',
    buttonVariant: 'tertiary',
    href: '/using-spark/foundations/color',
  },
  media: {
    href: '/using-spark/foundations/color',
    mediaLinkElement: 'a',
    imgAlt: 'Go to Foundations',
    imgSrc: foundationsMedia,
    mediaVariant: 'img',
  },
  title: 'Foundations',
  titleFirst: false,
};

const teaserUtils = {
  bodyText: `
    CSS class utilities for overriding
    values, enhancing accessibility,
    theming, and more.
  `,
  cta: {
    text: 'Go To Utilities',
    ctaVariant: 'button',
    ctaLinkElement: 'a',
    buttonVariant: 'tertiary',
    href: '/using-spark/foundations/css-utilities',
  },
  media: {
    href: '/using-spark/foundations/css-utilities',
    mediaLinkElement: 'a',
    imgAlt: 'Go to Utilities',
    imgSrc: utilitiesMedia,
    mediaVariant: 'img',
  },
  title: 'Utilities',
  titleFirst: false,
};

const teaserNews = {
  bodyText: `
    Get the latest release notes
    and updates, as well as previous news and notes
  `,
  cta: {
    text: 'Go To News',
    ctaVariant: 'button',
    ctaLinkElement: 'a',
    buttonVariant: 'tertiary',
    href: 'https://github.com/sparkdesignsystem/spark-design-system/releases',
  },
  media: {
    href: 'https://github.com/sparkdesignsystem/spark-design-system/releases',
    mediaLinkElement: 'a',
    imgAlt: 'Go to News',
    imgSrc: newsMedia,
    mediaVariant: 'img',
  },
  title: 'News And Updates',
  titleFirst: false,
};

const spacingBtwSections = 'huge';
const spacingBtwHeadingAndContent = 'large';

const IndexPage = () => (
  <Layout hasSideBar={false}>
    <SprkStack itemSpacing={spacingBtwSections}>
      <SprkStackItem>
        <SprkStack itemSpacing={spacingBtwHeadingAndContent}>
          <SprkStackItem>
            <h1 className="sprk-b-TypeDisplayOne sprk-u-Color--red">
              Spark Design System
            </h1>
          </SprkStackItem>

          <SprkStackItem>
            <p className="sprk-b-TypeBodyTwo sprk-u-Measure">
              Spark Design System is where we collect our best solutions for how
              to design and build unified digital experiences for the Rocket
              brands.
            </p>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>

      <SprkStackItem>
        <div className="docs-o-Grid docs-o-Grid--home-page docs-o-Grid--large">
          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserDesigners}
          />

          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserDevelopers}
          />

          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserComponents}
          />

          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserGuides}
          />

          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserFoundations}
          />

          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserUtils}
          />

          <SprkCard
            additionalClasses="docs-c-Card"
            variant="teaser"
            teaserConfig={teaserNews}
          />
        </div>
      </SprkStackItem>

      <SprkStackItem>
        <SprkStack itemSpacing={spacingBtwHeadingAndContent}>
          <SprkStackItem>
            <h2 className="sprk-b-TypeDisplayTwo">Want To Contribute?</h2>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              href="https://github.com/sparkdesignsystem/spark-design-system/blob/main/CONTRIBUTING.md"
              variant="secondary"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>
    </SprkStack>
  </Layout>
);

export default IndexPage;
