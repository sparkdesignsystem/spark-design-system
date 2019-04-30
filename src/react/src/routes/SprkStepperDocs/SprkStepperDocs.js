import React from 'react';
import { SprkStepper } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkStepperDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base Stepper">
        <div className="sprk-u-mbm">
          <SprkStepper>
          </SprkStepper>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkStepperDocs;
