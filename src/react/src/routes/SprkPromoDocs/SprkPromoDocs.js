import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkPromo } from '@sparkdesignsystem/spark-core-react';

const SprkPromoDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base Promo">
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            cta="button"
            ctaText="Learn More"
            buttonHref="https://www.sparkdesignsystem.com"
            hasBorder
            idString="promo-1"
            additionalClasses="sprk-o-Stack--split@s"
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Base Promo with Link">
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            cta="link"
            ctaText="Learn More"
            ctaLinkHref="https://www.sparkdesignsystem.com"
            hasBorder
            idString="promo-1"
            additionalClasses="sprk-o-Stack--split@s"
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Flag Promo">
        <div className="sprk-u-mbm">
          <SprkPromo
            isFlag
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgAlt="Spark Design System Logo"
            idString="promo-2"
            additionalClasses="sprk-o-Stack--split@s"
            hasBorder
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Flag Promo (Reversed)">
        <div className="sprk-u-mbm">
          <SprkPromo
            isFlag
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgAlt="Spark Design System Logo"
            idString="promo-2"
            additionalClasses="sprk-o-Stack--split@s"
            cta="link"
            ctaText="Learn More"
            ctaLinkHref="https://www.sparkdesignsystem.com"
            hasBorder
            mediaRev
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with Image">
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            media="img"
            imgAlt="placeholder"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
            cta="button"
            buttonHref="https://www.sparkdesignsystem.com"
            ctaText="Learn More"
            idString="promo-3"
            additionalClasses="sprk-o-Stack--split@s"
            hasBorder
            >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with Image (Reversed)">
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            mediaRev
            imgAlt="placeholder"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
            imgHref="https://sparkdesignsystem.com"
            cta="button"
            buttonHref="https://www.sparkdesignsystem.com"
            ctaText="Learn More"
            idString="promo-4"
            additionalClasses="sprk-o-Stack--split@s"
            hasBorder
            >
              Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkPromoDocs;
