import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkButton } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SparkButtonDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Primary Buttons">
        <SprkButton>Button Text</SprkButton>
        <SprkButton disabled>Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Secondary Buttons">
        <SprkButton additionalClasses="sprk-c-Button--secondary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Tertiary Buttons">
        <SprkButton additionalClasses="sprk-c-Button--tertiary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Submission Button">
        <SprkButton>Button Text</SprkButton>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SparkButtonDocs;
