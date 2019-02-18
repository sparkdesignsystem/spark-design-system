import React from 'react';
import { SprkTextInput } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

function SprkTextInputDocs() {
  return (
    <React.Fragment>
      <ExampleContainer heading="Text Input">
        <SprkTextInput
          label="Name"
          name="Name"
          placeholder="Enter your first name"
        />
      </ExampleContainer>
    </React.Fragment>
  );
}

export default SprkTextInputDocs;
