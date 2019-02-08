import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkDivider } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkDividerDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <h2 className="drizzle-b-h2">Divider as span</h2>
        <SprkDivider idString="divider-1" element="span"></SprkDivider>
      </ExampleContainer>

      <ExampleContainer>
        <h2 className="drizzle-b-h2">Divider as hr</h2>
        <SprkDivider idString="divider-1" element="hr"></SprkDivider>
      </ExampleContainer>
    </CentralColumnLayout>
  )
}

export default SprkDividerDocs;