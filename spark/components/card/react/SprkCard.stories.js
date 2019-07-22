import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkCard from './SprkCard';

storiesOf('Components|Card', module)
  .add('default', () => (
    <SprkCard
      idString="card-1"
      additionalContentClasses="sprk-o-Stack sprk-o-Stack--large"
    />
  ))
  .add('standout', () => (
    <SprkCard
      isStandout
      idString="card-20"
      additionalContentClasses="
          sprk-o-Stack
          sprk-o-Stack--medium"
    />
  ))
  .add('highlighted header', () => (
    <SprkCard
      idString="highlighted-header"
      variant="highlightedHeader"
      highlightedHeaderConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua an pri, errem commune mea at, mei prima tantas signiferumque at. Numquam.',
        title: 'Card Title',
        description: 'Description',
      }}
    />
  ))
  .add('teaser', () => (
    <SprkCard
      idString="card1"
      variant="teaser"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
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
        title: 'Teaser Card Title',
        titleFirst: false,
      }}
    />
  ))
  .add('teaser with different element order', () => (
    <SprkCard
      idString="card1"
      variant="teaser"
      teaserConfig={{
        bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
        cta: {
          ctaAnalytics: 'test',
          text: 'Learn More',
          ctaVariant: 'button',
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
        title: 'Teaser Card Title',
        titleFirst: true,
      }}
    />
  ))
  .add('card layout - two up', () => (
    <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
      <SprkCard
        idString="card-1"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
      <SprkCard
        idString="card-2"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
    </section>
  ))
  .add('card layout - three up', () => (
    <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
      <SprkCard
        idString="card-1"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
      <SprkCard
        idString="card-2"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
      <SprkCard
        idString="card-3"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
    </section>
  ))
  .add('card layout - four up', () => (
    <section className="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
      <SprkCard
        idString="card-1"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
      <SprkCard
        idString="card-2"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
      <SprkCard
        idString="card-3"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
      <SprkCard
        idString="card-4"
        variant="teaser"
        additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l"
        teaserConfig={{
          bodyText: 'Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.',
          cta: {
            ctaAnalytics: 'test',
            text: 'Learn More',
            ctaVariant: 'button',
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
          title: 'Teaser Card Title',
          titleFirst: true,
        }}
      />
    </section>
  ));
