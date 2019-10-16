import React from 'react';

import SprkPromo from './SprkPromo';

export default {
  title: 'Components|Promo',
  component: SprkPromo,
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
    imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
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
    imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
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
    imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
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
