import React from 'react';
import { SprkAccordion, SprkAccordionItem } from '@sparkdesignsystem/spark-core-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkAccordionDocs = () => (
  <CentralColumnLayout>
    <SprkAccordion>
      <SprkAccordionItem heading="Accordion Item Heading" onToggle={() => {console.log('Test Click')}}>
        <p>Some content inside the item.</p>
      </SprkAccordionItem>
      <SprkAccordionItem heading="Accordion Item Heading" isDefaultOpen>
        <p>Some content inside the item.</p>
      </SprkAccordionItem>
      <SprkAccordionItem heading="Accordion Item Heading">
        <p>Some content inside the item.</p>
      </SprkAccordionItem>
    </SprkAccordion>
  </CentralColumnLayout>
);

export default SprkAccordionDocs;
