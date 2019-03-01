import React from 'react';
import { SprkAccordion } from '@sparkdesignsystem/spark-core-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkAccordionDocs = () => (
  <CentralColumnLayout>
    <SprkAccordion>
      <SprkAccordion.Item heading="Accordion Item Heading">
        <p>Some content inside the item.</p>
      </SprkAccordion.Item>
      <SprkAccordion.Item heading="Accordion Item Heading">
        <p>Some content inside the item.</p>
      </SprkAccordion.Item>
      <SprkAccordion.Item heading="Accordion Item Heading" isDefaultOpen>
        <p>Some content inside the item.</p>
      </SprkAccordion.Item>
    </SprkAccordion>
  </CentralColumnLayout>
);

export default SprkAccordionDocs;
