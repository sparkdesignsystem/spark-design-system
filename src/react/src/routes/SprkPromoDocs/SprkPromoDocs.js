import React from 'react';
import CentralColumnLayout from '../../container/CentralColumnLayout/CentralColumnLayout';

import { SprkPromo } from '@sparkdesignsystem/spark-core-react';

const SprkPromoDocs = () => {
  return (
    <CentralColumnLayout>
        <SprkPromo
          title="Title"
          subtitle="Subtitle"
          cta="button"
          ctaText="Learn More"
          hasBorder
          idString="promo-1"
          >
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
        </SprkPromo>

        <SprkPromo
          isFlag
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgAlt="Spark Design System Logo"
          idString="promo-2"
          >
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
        </SprkPromo>

        <SprkPromo
          title="Title"
          subtitle="Subtitle"
          media="img"
          imgAlt="placeholder"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
          cta="button"
          ctaText="Learn More"
          idString="promo-3"
          >
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
        </SprkPromo>

        <SprkPromo
        title="Title"
        subtitle="Subtitle"
        mediaRev
        imgAlt="placeholder"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
        imgHref="https://sparkdesignsystem.com"
        cta="button"
        ctaText="Learn More"
        idString="promo-4">
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
      </SprkPromo>

    </CentralColumnLayout>
  );
};

export default SprkPromoDocs;
