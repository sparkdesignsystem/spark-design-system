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
        <SprkButton buttonType="secondary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Tertiary Buttons">
        <SprkButton buttonType="tertiary">Button Text</SprkButton>
      </ExampleContainer>
      <ExampleContainer heading="Submission Button">
        <SprkButton spinner width="250px">Button Text</SprkButton>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SparkButtonDocs;
