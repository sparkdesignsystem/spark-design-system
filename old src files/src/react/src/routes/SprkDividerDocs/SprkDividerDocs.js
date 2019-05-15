import React from 'react';
import { SprkDivider } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkDividerDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h2 className="drizzle-b-h2">Divider as span</h2>
        <SprkDivider idString="divider-1" element="span" />
      </ExampleContainer>

      <ExampleContainer>
        <h2 className="drizzle-b-h2">Divider as hr</h2>
        <SprkDivider idString="divider-1" element="hr" />
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkDividerDocs;
