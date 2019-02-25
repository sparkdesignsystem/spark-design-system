import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
// import {Link} from 'react-router-dom';

import { SprkButton, SprkModal } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkModalDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Trigger A Modal">
        <SprkModal></SprkModal>
        <SprkButton variant="secondary">Button Text</SprkButton>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkModalDocs;
