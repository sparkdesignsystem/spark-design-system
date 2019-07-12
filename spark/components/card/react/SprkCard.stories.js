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
          ctaVariant: 'link',
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
          ctaVariant: 'link',
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
  ));
