import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkHighlightBoard } from '@sparkdesignsystem/spark-core-react';

const SprkHighlightBoardDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base">
        <SprkHighlightBoard />
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkHighlightBoardDocs;
