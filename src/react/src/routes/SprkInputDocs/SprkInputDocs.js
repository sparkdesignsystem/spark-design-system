import React from 'react';
import { SprkTextInput } from '@sparkdesignsystem/spark-core-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import FormExample from './FormExample/FormExample';

const SprkInputDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer heading="Text Input">
      <SprkTextInput onBlur={(e) => { console.log(e.target.value); }} errorMessage="You dun goofed." valid={false} />
    </ExampleContainer>
    <ExampleContainer heading="Form Example">
      <FormExample />
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkInputDocs;
