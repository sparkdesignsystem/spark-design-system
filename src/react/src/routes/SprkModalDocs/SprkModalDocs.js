import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
// import {Link} from 'react-router-dom';

import { SprkButton, SprkModal } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkModalDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Trigger A Basic Modal">
        <SprkModal title="A Basic Modal">
          Some Content for for that basic modal via slots
          
          <p>And Even more text</p>
        </SprkModal>
        <SprkButton variant="secondary">Trigger Modal</SprkButton>
      </ExampleContainer>

      {/* <ExampleContainer heading="Trigger A Wait Modal">
        <SprkModal modalType="wait"></SprkModal>
        <SprkButton variant="secondary">Trigger and Wait</SprkButton>
      </ExampleContainer> */}
    </CentralColumnLayout>
  );
};

export default SprkModalDocs;
