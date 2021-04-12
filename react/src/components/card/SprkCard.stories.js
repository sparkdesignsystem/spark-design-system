import React from 'react';
import SprkCard from './SprkCard';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
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
          Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi perpetua
          an pri, errem commune mea at, mei prima tantas signiferumque at.
          Numquam.
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

      <SprkStack
        additionalClasses="
          sprk-o-Stack__item
          sprk-o-Stack--end-column"
      >
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
          aria-label="Learn More"
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
          Lorem ipsum dolor sit amet, doctus invenirevix te. Facilisi perpetua
          an pri, errem communemea at, mei prima tantas signiferumque at.
        </SprkText>
      </SprkStackItem>

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
    </SprkStack>
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

      <SprkStack
        additionalClasses="
          sprk-o-Stack__item
          sprk-o-Stack--end-column"
      >
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
    </SprkStack>
  </SprkCard>
);

export const twoUpCards = () => (
  <SprkStack
    itemSpacing="large"
    splitAt="large"
    additionalClasses="sprk-o-Stack--center-row"
  >
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
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
      </SprkStack>
    </SprkCard>

    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="two-up-cta-2"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
    </SprkCard>
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
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
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
      </SprkStack>
    </SprkCard>
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="three-up-cta-2"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
    </SprkCard>
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="three-up-cta-3"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
    </SprkCard>
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
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
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
      </SprkStack>
    </SprkCard>
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-cta-2"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
    </SprkCard>
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-cta-3"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
    </SprkCard>
    <SprkCard additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@l">
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
            This Lorem ipsum dolor sit amet, doctus invenire vix te. Facilisi
            perpetua an pri, errem commune mea at, mei prima tantas
            signiferumque at. Numquam.
          </SprkText>
        </SprkStackItem>

        <SprkStack
          additionalClasses="
            sprk-o-Stack__item
            sprk-o-Stack--end-column"
        >
          <SprkStackItem>
            <SprkLink
              variant="unstyled"
              additionalClasses="sprk-c-Button sprk-c-Button--secondary"
              href="#nogo"
              analyticsString="four-up-cta-4"
            >
              Learn More
            </SprkLink>
          </SprkStackItem>
        </SprkStack>
      </SprkStack>
    </SprkCard>
  </SprkStack>
);

fourUpCards.story = {
  name: 'Card Layout - Four Up',
};
