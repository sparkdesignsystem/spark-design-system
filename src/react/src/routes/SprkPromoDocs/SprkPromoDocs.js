import React from 'react';
import CentralColumnLayout from '../../container/CentralColumnLayout/CentralColumnLayout';

import { SprkPromo } from '@sparkdesignsystem/spark-core-react';

const SprkPromoDocs = () => {
  return (
    <CentralColumnLayout>
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            cta="button"
            ctaText="Learn More"
            hasBorder
            idString="promo-1"
            additionalClasses="sprk-o-Stack--split@s"
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>

        <div className="sprk-u-mbm">
          <SprkPromo
            isFlag
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgAlt="Spark Design System Logo"
            idString="promo-2"
            additionalClasses="sprk-o-Stack--split@s"
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>

        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            media="img"
            imgAlt="placeholder"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
            cta="button"
            ctaText="Learn More"
            idString="promo-3"
            additionalClasses="sprk-o-Stack--split@s"
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>

        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            mediaRev
            imgAlt="placeholder"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
            imgHref="https://sparkdesignsystem.com"
            cta="button"
            ctaText="Learn More"
            idString="promo-4"
            additionalClasses="sprk-o-Stack--split@s"
            >
              Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>

    </CentralColumnLayout>
  );
};

export default SprkPromoDocs;
