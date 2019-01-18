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
    </CentralColumnLayout>
  );
};

export default SprkPromoDocs;
