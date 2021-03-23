import React from 'react';
import SprkPromo from './SprkPromo';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import SprkLink from '../../base/links/SprkLink';
import SprkText from '../../base/typography/SprkText/SprkText';
import SprkHeading from '../../base/typography/SprkHeading/SprkHeading';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Promo',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkPromo,
  parameters: {
    jest: ['SprkPromo'],
    info: `${markdownDocumentationLinkBuilder('promo')}`,
  },
};

export const defaultStory = () => (
  <SprkPromo idString="default-promo" hasBorder>
    <SprkStackItem additionalClasses="sprk-c-Promo__content">
      <SprkStack itemSpacing="large">
        <SprkStackItem>
          <SprkHeading
            element="h3"
            variant="displayFive"
            additionalClasses="sprk-c-Promo__title"
          >
            Title
          </SprkHeading>
        </SprkStackItem>

        <SprkStackItem>
          <SprkText
            variant="bodyOne"
            additionalClasses="sprk-c-Promo__subtitle"
          >
            Subtitle
          </SprkText>
        </SprkStackItem>

        <SprkStackItem>
          <SprkText variant="bodyTwo">
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkText>
        </SprkStackItem>

        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            className="sprk-c-Button"
            analyticsString="default-promo-cta"
          >
            Learn More
          </SprkLink>
        </SprkStackItem>
      </SprkStack>
    </SprkStackItem>
  </SprkPromo>
);

defaultStory.story = {
  name: 'Default',
};

export const flag = () => (
  <SprkPromo
    idString="flag-promo"
    hasBorder
    isFlag
    additionalClasses="sprk-o-Stack--split@s"
  >
    <SprkStackItem additionalClasses="sprk-o-Stack__item--fourth@s">
      <SprkLink variant="unstyled" href="#nogo">
        <img
          className="sprk-c-Promo__image sprk-c-Promo__image--flag"
          alt="Learn more about Spark Design System."
          src="https://spark-assets.netlify.app/spark-logo-updated.svg"
        />
      </SprkLink>
    </SprkStackItem>

    <SprkStackItem
      additionalClasses="
        sprk-c-Promo__content
        sprk-o-Stack__item--three-fourths@s
      "
    >
      <SprkStack itemSpacing="large">
        <SprkStackItem>
          <SprkText variant="bodyTwo">
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkText>
        </SprkStackItem>
      </SprkStack>
    </SprkStackItem>
  </SprkPromo>
);

flag.story = {
  name: 'Flag',
};

export const withImage = () => (
  <SprkPromo
    idString="image-promo"
    hasBorder
    isFlag
    additionalClasses="sprk-o-Stack--split@s"
  >
    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
      <SprkLink variant="unstyled" href="#nogo">
        <img
          className="sprk-c-Promo__image"
          alt="Additional insights about this property."
          src="https://spark-assets.netlify.app/house.jpg"
        />
      </SprkLink>
    </SprkStackItem>

    <SprkStackItem
      additionalClasses="
        sprk-c-Promo__content
        sprk-o-Stack__item--half@s
      "
    >
      <SprkStack itemSpacing="large">
        <SprkStackItem>
          <SprkHeading
            element="h3"
            variant="displayFive"
            additionalClasses="sprk-c-Promo__title"
          >
            Title
          </SprkHeading>
        </SprkStackItem>

        <SprkStackItem>
          <SprkText
            variant="bodyOne"
            additionalClasses="sprk-c-Promo__subtitle"
          >
            Subtitle
          </SprkText>
        </SprkStackItem>

        <SprkStackItem>
          <SprkText variant="bodyTwo">
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkText>
        </SprkStackItem>

        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            className="sprk-c-Button"
            analyticsString="image-promo-cta"
          >
            Learn More
          </SprkLink>
        </SprkStackItem>
      </SprkStack>
    </SprkStackItem>
  </SprkPromo>
);

withImage.story = {
  name: 'With Image',
};

export const withReversedImage = () => (
  <SprkPromo
    idString="rev-image-promo"
    hasBorder
    isFlag
    additionalClasses="sprk-o-Stack--split@s"
  >
    <SprkStackItem
      additionalClasses="
        sprk-c-Promo__content
        sprk-o-Stack__item--half@s
      "
    >
      <SprkStack itemSpacing="large">
        <SprkStackItem>
          <SprkHeading
            element="h3"
            variant="displayFive"
            additionalClasses="sprk-c-Promo__title"
          >
            Title
          </SprkHeading>
        </SprkStackItem>

        <SprkStackItem>
          <SprkText
            variant="bodyOne"
            additionalClasses="sprk-c-Promo__subtitle"
          >
            Subtitle
          </SprkText>
        </SprkStackItem>

        <SprkStackItem>
          <SprkText variant="bodyTwo">
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkText>
        </SprkStackItem>

        <SprkStackItem>
          <SprkLink
            variant="unstyled"
            href="#nogo"
            className="sprk-c-Button"
            analyticsString="rev-image-promo-cta"
          >
            Learn More
          </SprkLink>
        </SprkStackItem>
      </SprkStack>
    </SprkStackItem>

    <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
      <SprkLink variant="unstyled" href="#nogo">
        <img
          className="sprk-c-Promo__image"
          alt="Additional insights about this property."
          src="https://spark-assets.netlify.app/house.jpg"
        />
      </SprkLink>
    </SprkStackItem>
  </SprkPromo>
);

withReversedImage.story = {
  name: 'With Reversed Image',
};
