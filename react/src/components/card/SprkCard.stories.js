import React from 'react';
import SprkCard from './SprkCard';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkCardHighlightedHeader from './components/SprkCardHighlightedHeader/SprkCardHighlightedHeader';
import SprkCardTeaser from './components/SprkCardTeaser/SprkCardTeaser';

export default {
  title: 'Components/Card',
  decorators: [
    (story) => <div className="sprk-o-Box sprk-o-Box--large">{story()}</div>,
  ],
  component: SprkCard,
  parameters: {
    subcomponents: { SprkCardTeaser, SprkCardHighlightedHeader },
    jest: ['SprkCard'],
    info: `${markdownDocumentationLinkBuilder('card')}`,
  },
};

export const defaultStory = () => (
  <SprkCard
    idString="card-1"
    additionalContentClasses="sprk-o-Stack sprk-o-Stack--large"
  >
    Base Card Content
  </SprkCard>
);

defaultStory.story = {
  name: 'Default',
};

export const standout = () => (
  <SprkCard
    isStandout
    idString="card-20"
    additionalContentClasses="
          sprk-o-Stack
          sprk-o-Stack--medium"
  >
    Standout Card Content
  </SprkCard>
);

export const highlightedHeader = () => (
  <SprkCard
    idString="highlighted-header"
    variant="highlightedHeader"
    highlightedHeaderConfig={{
      bodyText: `Lorem ipsum dolor sit amet, doctus invenire vix te.
         Facilisi perpetua an pri, errem commune mea at,
         mei prima tantas signiferumque at. Numquam.`,
      title: 'Card Title',
      description: 'Description',
    }}
  />
);

export const teaser = () => (
  <SprkCard
    idString="card1"
    variant="teaser"
    teaserConfig={{
      bodyText:
        'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
      cta: {
        ctaAnalytics: 'test',
        text: 'Learn More',
        ctaVariant: 'button',
        ctaLinkElement: 'a',
        href: '#nogo',
      },
      media: {
        href: '#nogo',
        mediaLinkElement: 'a',
        imgAlt: 'Learn more',
        imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
        mediaAnalyticsString: 'Card:teaser-link',
        mediaVariant: 'img',
      },
      title: 'Teaser Card Title',
      titleFirst: false,
    }}
  />
);

export const teaserWithDifferentElementOrder = () => (
  <SprkCard
    idString="card1"
    variant="teaser"
    teaserConfig={{
      bodyText:
        'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
      cta: {
        ctaAnalytics: 'test',
        text: 'Learn More',
        ctaVariant: 'button',
        href: '#nogo',
      },
      media: {
        href: '#nogo',
        mediaLinkElement: 'a',
        imgAlt: 'Learn more',
        imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
        mediaAnalyticsString: 'Card:teaser-link',
        mediaVariant: 'img',
      },
      title: 'Teaser Card Title',
      titleFirst: true,
    }}
  />
);

export const twoUpCards = () => (
  <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
    <SprkCard
      idString="card-1"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          href: '#nogo',
          buttonVariant: 'secondary',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-2"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  </section>
);

twoUpCards.story = {
  name: 'Card Layout - Two Up',
};

export const threeUpCards = () => (
  <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
    <SprkCard
      idString="card-1"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-2"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-3"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  </section>
);

threeUpCards.story = {
  name: 'Card Layout - Three Up',
};

export const fourUpCards = () => (
  <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
    <SprkCard
      idString="card-1"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-2"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-3"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
    <SprkCard
      idString="card-4"
      variant="teaser"
      additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
      teaserConfig={{
        bodyText: `Lorem ipsum dolor sit amet, doctus
          invenirevix te. Facilisi perpetua.`,
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
          buttonVariant: 'secondary',
          href: '#nogo',
        },
        media: {
          href: '#nogo',
          mediaLinkElement: 'a',
          imgAlt: 'Learn more',
          imgSrc: 'https://spark-assets.netlify.app/desktop.jpg',
          mediaAnalyticsString: 'Card:teaser-link',
          mediaVariant: 'img',
        },
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  </section>
);

fourUpCards.story = {
  name: 'Card Layout - Four Up',
};
