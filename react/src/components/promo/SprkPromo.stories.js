import React from 'react';
import SprkPromo from './SprkPromo';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Promo',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkPromo,
  parameters: {
    jest: ['SprkPromo'],
    info: markdownDocumentationLinkBuilder('promo'),
  },
};

export const defaultStory = () => (
  <SprkPromo
    title="Title"
    subtitle="Subtitle"
    additionalClasses="sprk-o-Stack--split@s"
    cta="button"
    ctaText="Learn More"
    ctaHref="https://www.sparkdesignsystem.com"
    ctaAnalytics="promo-cta-1-analytics"
    ctaIdString="promo-cta-1"
    hasBorder
    idString="promo-1"
  >
    Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim
    diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
  </SprkPromo>
);

defaultStory.story = {
  name: 'Default',
};

export const flag = () => (
  <SprkPromo
    additionalClasses="sprk-o-Stack--split@s"
    imgSrc="https://spark-assets.netlify.com/spark-logo-updated.svg"
    imgAlt="Spark Design System Logo"
    imgLinkHref="https://sparkdesignsystem.com"
    imgLinkAnalytics="promo-3-img-link-analytics"
    imgLinkIdString="promo-3-img-link"
    idString="promo-3"
    isFlag
    hasBorder
  >
    Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim
    diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
  </SprkPromo>
);

flag.story = {
  name: 'Flag',
};

export const withImage = () => (
  <SprkPromo
    title="Title"
    subtitle="Subtitle"
    additionalClasses="sprk-o-Stack--split@s"
    cta="button"
    ctaText="Learn More"
    ctaHref="https://www.sparkdesignsystem.com"
    ctaAnalytics="promo-cta-5-analytics"
    ctaIdString="promo-cta-5"
    imgAlt="placeholder"
    imgSrc="https://spark-assets.netlify.com/flower.jpg"
    imgLinkAnalytics="promo-5-img-link-analytics"
    imgLinkIdString="promo-5-img-link"
    idString="promo-5"
    hasBorder
  >
    Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim
    diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
  </SprkPromo>
);

withImage.story = {
  name: 'With Image',
};

export const withReversedImage = () => (
  <SprkPromo
    title="Title"
    subtitle="Subtitle"
    additionalClasses="sprk-o-Stack--split@s"
    cta="button"
    ctaText="Learn More"
    ctaHref="https://www.sparkdesignsystem.com"
    ctaAnalytics="promo-cta-6-analytics"
    ctaIdString="promo-cta-6"
    imgAlt="placeholder"
    imgSrc="https://spark-assets.netlify.com/flower.jpg"
    imgLinkHref="https://sparkdesignsystem.com"
    imgLinkAnalytics="promo-6-img-link-analytics"
    imgLinkIdString="promo-6-img-link"
    idString="promo-6"
    mediaRev
    hasBorder
  >
    Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim
    diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
  </SprkPromo>
);

withReversedImage.story = {
  name: 'With Reversed Image',
};
