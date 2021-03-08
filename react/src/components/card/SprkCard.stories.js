import React from 'react';
import SprkCard from './SprkCard';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkCardHighlightedHeader from './components/SprkCardHighlightedHeader/SprkCardHighlightedHeader';
import SprkCardTeaser from './components/SprkCardTeaser/SprkCardTeaser';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import SprkText from '../../base/typography/SprkText/SprkText';
import SprkHeading from '../../base/typography/SprkHeading/SprkHeading';
import SprkLink from '../../base/links/SprkLink';
import SprkIcon from '../icons/SprkIcon';

export default {
  title: 'Components/Card',
  decorators: [
    (story) => <div className="sprk-o-Box sprk-o-Box--large">{story()}</div>,
  ],
  component: SprkCard,
  parameters: {
    subcomponents: {
      SprkCardTeaser,
      SprkCardHighlightedHeader,
      SprkHeading,
      SprkText,
      SprkStack,
      SprkLink,
      SprkStackItem,
    },
    jest: ['SprkCard'],
    info: `${markdownDocumentationLinkBuilder('card')}`,
  },
};

export const defaultStory = () => (
  <SprkCard idString="default">
    <SprkStack
      additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
      itemSpacing="medium"
    >
      <SprkStackItem>
        <SprkText variant="bodyTwo">Default Card</SprkText>
      </SprkStackItem>
    </SprkStack>
  </SprkCard>
);

defaultStory.story = {
  name: 'Default',
};

export const standout = () => (
  <SprkCard isStandout idString="standout">
    <SprkStack
      additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
      itemSpacing="medium"
    >
      <SprkStackItem>
        <SprkText variant="bodyTwo">Standout Card</SprkText>
      </SprkStackItem>
    </SprkStack>
  </SprkCard>
);

export const highlightedHeader = () => (
  <SprkCard idString="highlighted-header" isStandout>
    <SprkStack
      additionalClasses="sprk-o-Stack__item sprk-c-Card__header"
      itemSpacing="medium"
    >
      <SprkStackItem>
        <SprkHeading
          element="h3"
          variant="displaySeven"
          additionalClasses="sprk-u-Color--white"
        >
          Description
        </SprkHeading>
      </SprkStackItem>

      <SprkStackItem>
        <SprkHeading
          element="h4"
          variant="displayFive"
          additionalClasses="sprk-u-Color--white"
        >
          Card Title
        </SprkHeading>
      </SprkStackItem>
    </SprkStack>

    <SprkStack
      additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
      itemSpacing="medium"
    >
      <SprkStackItem>
        <SprkText variant="bodyTwo">
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi an pri,
          errem commune mea at, mei prima tantas signiferumque at. Numquam.
        </SprkText>
      </SprkStackItem>
    </SprkStack>
  </SprkCard>
);

export const teaser = () => (
  <SprkCard idString="teaser">
    <SprkStackItem>
      <SprkLink variant="unstyled" href="#nogo" analyticsString="teaser-media">
        <img
          className="sprk-c-Card__media"
          alt="Learn More"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </SprkLink>
    </SprkStackItem>

    <SprkStack
      additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
      itemSpacing="medium"
    >
      <SprkStackItem>
        <SprkHeading element="h3" variant="displayFive">
          Title
        </SprkHeading>
      </SprkStackItem>

      <SprkStackItem>
        <SprkText variant="bodyTwo">
          Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.
        </SprkText>
      </SprkStackItem>

      <SprkStackItem>
        <SprkLink
          variant="unstyled"
          additionalClasses="sprk-c-Button sprk-c-Button--secondary"
          href="#nogo"
          analyticsString="teaser-cta"
        >
          Learn More
        </SprkLink>
      </SprkStackItem>
    </SprkStack>
  </SprkCard>
);

export const teaserWithIcon = () => (
  <SprkCard idString="teaser-icon">
    <SprkStack
      itemSpacing="large"
      additionalClasses="
        sprk-o-Stack__item
        sprk-c-Card__content
        sprk-u-TextAlign--center
      "
    >
      <SprkStackItem>
        <SprkLink
          variant="unstyled"
          href="#nogo"
          analyticsString="teaser-icon-media"
          additionalClasses="sprk-u-AbsoluteCenter"
        >
          <SprkIcon
            iconName="call-team-member"
            aria-hidden="true"
            additionalClasses="sprk-c-Icon--xl"
          />
        </SprkLink>
      </SprkStackItem>

      <SprkStackItem>
        <SprkHeading element="h3" variant="displayFive">
          Title
        </SprkHeading>
      </SprkStackItem>

      <SprkStackItem>
        <SprkText variant="bodyTwo">
          Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.
        </SprkText>
      </SprkStackItem>
    </SprkStack>

    <SprkStackItem>
      <SprkLink
        variant="unstyled"
        additionalClasses="sprk-c-Button sprk-c-Button--secondary"
        href="#nogo"
        analyticsString="teaser-icon-cta"
      >
        Learn More
      </SprkLink>
    </SprkStackItem>
  </SprkCard>
);

export const teaserWithDifferentElementOrder = () => (
  <SprkCard idString="teaser-diff-order">
    <SprkStackItem additionalClasses="sprk-c-Card__content">
      <SprkHeading element="h3" variant="displayFive">
        Title
      </SprkHeading>
    </SprkStackItem>

    <SprkStackItem>
      <SprkLink
        variant="unstyled"
        href="#nogo"
        analyticsString="teaser-diff-order-media"
      >
        <img
          alt="Learn More"
          src="https://spark-assets.netlify.app/desktop.jpg"
        />
      </SprkLink>
    </SprkStackItem>

    <SprkStack
      additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
      itemSpacing="large"
    >
      <SprkStackItem>
        <SprkText variant="bodyTwo">
          Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua.
        </SprkText>
      </SprkStackItem>

      <SprkStackItem>
        <SprkLink
          variant="unstyled"
          additionalClasses="sprk-c-Button sprk-c-Button--secondary"
          href="#nogo"
          analyticsString="teaser-diff-order-cta"
        >
          Learn More
        </SprkLink>
      </SprkStackItem>
    </SprkStack>
  </SprkCard>
);

export const twoUpCards = () => (
  <SprkStack
    itemSpacing="large"
    splitAt="large"
    additionalClasses="sprk-o-Stack--center-row"
  >
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="two-up-media"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="two-up-cta"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="two-up-media-2"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="two-up-media-2"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
  </SprkStack>
);

twoUpCards.story = {
  name: 'Card Layout - Two Up',
};

export const threeUpCards = () => (
  <SprkStack
    itemSpacing="large"
    splitAt="large"
    additionalClasses="sprk-o-Stack--center-row"
  >
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="three-up-cta"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media-2"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="three-up-media-2"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="three-up-media-3"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="three-up-media-3"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
  </SprkStack>
);

threeUpCards.story = {
  name: 'Card Layout - Three Up',
};

export const fourUpCards = () => (
  <SprkStack
    itemSpacing="large"
    splitAt="large"
    additionalClasses="sprk-o-Stack--center-row"
  >
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-cta"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media-2"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-media-2"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media-3"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-media-3"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
    <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@l">
      <SprkCard>
        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            analyticsString="four-up-media-4"
          >
            <img
              className="sprk-c-Card__media"
              alt="Learn More"
              src="https://spark-assets.netlify.app/desktop.jpg"
            />
          </SprkLink>
        </SprkStackItem>

        <SprkStack
          additionalClasses="sprk-o-Stack__item sprk-c-Card__content"
          itemSpacing="medium"
        >
          <SprkStackItem>
            <SprkHeading element="h3" variant="displayFive">
              Title
            </SprkHeading>
          </SprkStackItem>

          <SprkStackItem>
            <SprkText variant="bodyTwo">
              Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi
              perpetua.
            </SprkText>
          </SprkStackItem>

          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-media-4"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkCard>
    </SprkStackItem>
  </SprkStack>
);

fourUpCards.story = {
  name: 'Card Layout - Four Up',
};

export const legacyDefaultStory = () => (
  <SprkCard
    idString="card-1"
    additionalContentClasses="sprk-o-Stack sprk-o-Stack--large"
  >
    Default Card
  </SprkCard>
);

legacyDefaultStory.story = {
  name: 'Legacy (Deprecated)',
};

export const legacyStandout = () => (
  <SprkCard
    isStandout
    idString="card-20"
    additionalContentClasses="
          sprk-o-Stack
          sprk-o-Stack--medium"
  >
    Standout Card
  </SprkCard>
);

legacyStandout.story = {
  name: 'Legacy Standout (Deprecated)',
};

export const legacyHighlightedHeader = () => (
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

legacyHighlightedHeader.story = {
  name: 'Legacy Highlighted Header (Deprecated)',
};

export const legacyTeaser = () => (
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
      titleFirst: false,
    }}
  />
);

legacyTeaser.story = {
  name: 'Legacy Teaser (Deprecated)',
};

export const legacyTeaserWithDifferentElementOrder = () => (
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
);

legacyTeaserWithDifferentElementOrder.story = {
  name: 'Legacy Teaser With Different Element Order (Deprecated)',
};

export const legacyTwoUpCards = () => (
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

legacyTwoUpCards.story = {
  name: 'Legacy Card Layout - Two Up (Deprecated)',
};

export const legacyThreeUpCards = () => (
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

legacyThreeUpCards.story = {
  name: 'Legacy Card Layout - Three Up (Deprecated)',
};

export const legacyFourUpCards = () => (
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

legacyFourUpCards.story = {
  name: 'Legacy Card Layout - Four Up (Deprecated)',
};
