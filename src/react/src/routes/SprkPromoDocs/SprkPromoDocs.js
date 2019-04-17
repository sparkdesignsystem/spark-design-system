import React from 'react';
import { SprkPromo } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkPromoDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base Promo">
        <div className="sprk-u-mbm">
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
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Base Promo with Link">
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            additionalClasses="sprk-o-Stack--split@s"
            cta="link"
            ctaText="Learn More"
            ctaHref="https://www.sparkdesignsystem.com"
            ctaAnalytics="promo-cta-2-analytics"
            ctaIdString="promo-cta-2"
            idString="promo-2"
            hasBorder
          >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Flag Promo">
        <div className="sprk-u-mbm">
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
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Flag Promo (Reversed)">
        <div className="sprk-u-mbm">
          <SprkPromo
            additionalClasses="sprk-o-Stack--split@s"
            cta="link"
            ctaText="Learn More"
            ctaHref="https://www.sparkdesignsystem.com"
            ctaAnalytics="promo-cta-4-analytics"
            ctaIdString="promo-cta-4"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgAlt="Spark Design System Logo"
            imgLinkAnalytics="promo-4-img-link-analytics"
            imgLinkIdString="promo-4-img-link"
            idString="promo-4"
            isFlag
            mediaRev
            hasBorder
          >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with Image">
        <div className="sprk-u-mbm">
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
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with Image (Reversed)">
        <div className="sprk-u-mbm">
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
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Promo with All Properties">
        <div className="sprk-u-mbm">
          <SprkPromo
            title="Title"
            subtitle="Subtitle"
            additionalClasses="sprk-o-Stack--split@s additionalClassRoot"
            additionalClassesContent="additionalClassContent"
            cta="link"
            ctaText="I'm a Button"
            ctaHref="https://www.sparkdesignsystem.com"
            ctaAnalytics="cta-analytics-string"
            ctaIdString="cta-id-string"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
            imgAlt="placeholder"
            imgLinkHref="https://sparkdesignsystem.com"
            imgLinkAnalytics="img-link-analytics-string"
            imgLinkIdString="img-link-id-string"
            additionalClassesImgLink="additionalClassImageLink"
            idString="promo-7"
            hasBorder
            isFlag
            mediaRev
          >
            Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id
            inventore integer eum non enim diam habitant. Maecenas nunc per
            lacus neque egestas. Diam quod curabitur.
          </SprkPromo>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkPromoDocs;
