import React from 'react';
import { SprkStepper, SprkStepperStep } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkStepperDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base Stepper">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep title="Step One" />
            <SprkStepperStep title="Step Two" isSelected />
            <SprkStepperStep title="Step Three" />
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Empty">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep />
            <SprkStepperStep />
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Stepper with Step Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper variant="hasDescription">
            <SprkStepperStep title="Step One">
              Step one content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected>
              Step two content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Three">
              Step three content - lorem ipsum lorem ipsum
            </SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Stepper with Dark Background">
        <div className="sprk-u-mbm">
          <SprkStepper hasDarkBackground variant="hasDescription">
            <SprkStepperStep title="Step One">
              Step one content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected>
              Step two content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Three">
              Step three content - lorem ipsum lorem ipsum
            </SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkStepperDocs;
