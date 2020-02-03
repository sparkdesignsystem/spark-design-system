import React from 'react';
import {
  SprkStack,
  SprkStackItem,
  SprkCard,
  SprkButton,
} from '@sparkdesignsystem/spark-react';
import Layout from '../components/layouts/Layout';
import componentsMedia from '../images/components.svg';
import developersMedia from '../images/developers.svg';
import fundamentalsMedia from '../images/fundamentals.svg';
import newsMedia from '../images/news-and-updates.png';

const teaserDesigners = {
  bodyText: `
    Lorem ipsum dolor sit amet,
    doctus invenirevix te. Facilisi perpetua.
  `,
  cta: {
    text: 'Go To Designer Basics',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: '/installing-spark/developers',
  },
  media: {
    href: 'https://sparkdesignsystem.com/',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: 'https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg',
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
    buttonVariant: 'secondary',
    href: '/installing-spark/vanilla-installation',
  },
  media: {
    href: '/installing-spark/vanilla-installation',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
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
    buttonVariant: 'secondary',
    href: '/using-spark/components/button',
  },
  media: {
    href: '/using-spark/components/button',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: componentsMedia,
    mediaVariant: 'img',
  },
  title: 'Components',
  titleFirst: false,
};

const teaserFundamentals = {
  bodyText: `
   Looking for our brand color palette,
   typography guidelines, element spacing,
    and other foundational style elements?
    Start here.
  `,
  cta: {
    text: 'Go To Foundations',
    ctaVariant: 'button',
    buttonVariant: 'secondary',
    href: '/using-spark/foundations/sass-variables',
  },
  media: {
    href: '/using-spark/foundations/sass-variables',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: fundamentalsMedia,
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
    buttonVariant: 'secondary',
    href: '/using-spark/utilities',
  },
  media: {
    href: '/using-spark/utilities',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
    imgSrc: '',
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
    buttonVariant: 'secondary',
    href: 'https://github.com/sparkdesignsystem/spark-design-system/releases',
  },
  media: {
    href: 'https://github.com/sparkdesignsystem/spark-design-system/releases',
    mediaLinkElement: 'a',
    imgAlt: 'placeholder image',
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
        <SprkStack
          itemSpacing={spacingBtwHeadingAndContent}
        >
          <SprkStackItem>
            <h1 className="sprk-b-TypeDisplayOne sprk-u-Color--red">
              Spark Design System
            </h1>
          </SprkStackItem>

          <SprkStackItem>
            <p className="sprk-b-TypeBodyTwo sprk-u-Measure">
              Spark Design System is where we collect our best
              solutions for how to design and build unified
              digital experiences for the Rocket brands.
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
            teaserConfig={teaserUtils}
          />

          <SprkCard
            variant="teaser"
            teaserConfig={teaserNews}
          />
        </div>
      </SprkStackItem>

      <SprkStackItem>
        <SprkStack itemSpacing={spacingBtwHeadingAndContent}>
          <SprkStackItem>
            <h2 className="sprk-b-TypeDisplayTwo sprk-u-Color--red">
              Want To Contribute?
            </h2>
          </SprkStackItem>

          <SprkStackItem>
            <SprkButton
              href="https://github.com/sparkdesignsystem/spark-design-system/blob/master/CONTRIBUTING.md"
              variant="secondary"
            >
              Learn More
            </SprkButton>
          </SprkStackItem>
        </SprkStack>
      </SprkStackItem>
    </SprkStack>
  </Layout>
);

export default IndexPage;
