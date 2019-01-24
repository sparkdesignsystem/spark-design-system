import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkOrderedList, SprkUnorderedList } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkListDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkOrderedList idString="ordered-list-1">
          <li>Base Item</li>
          <li>Base Item</li>
          <li>Base Item</li>
        </SprkOrderedList>
      </ExampleContainer>

      <ExampleContainer>
        <SprkUnorderedList idString="ordered-list-1">
          <li>Base Item</li>
          <li>Base Item</li>
          <li>Base Item</li>
        </SprkUnorderedList>
      </ExampleContainer>

      <ExampleContainer>
        <SprkUnorderedList idString="ordered-list-1" variant="bare">
          <li>Base Item</li>
          <li>Base Item</li>
          <li>Base Item</li>
        </SprkUnorderedList>
      </ExampleContainer>

    </CentralColumnLayout>
  )
}

export default SprkListDocs;

