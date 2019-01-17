import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkButton } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SparkButtonDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Primary Buttons">
        <SprkButton>Button Text</SprkButton>
        <SprkButton href="#nogo">Link Button</SprkButton>
        <SprkButton disabled>Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Secondary Buttons">
        <SprkButton variant="secondary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Tertiary Buttons">
        <SprkButton variant="tertiary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Submission Button">
        <SprkButton spinnerOnClick>Button Text</SprkButton>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SparkButtonDocs;
