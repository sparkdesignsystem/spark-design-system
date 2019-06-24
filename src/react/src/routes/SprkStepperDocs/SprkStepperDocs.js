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
            <SprkStepperStep title="Step One" ></SprkStepperStep>
            <SprkStepperStep title="Step Two" ></SprkStepperStep>
            <SprkStepperStep title="Step Three" ></SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Stepper with Dark Background">
        <div className="sprk-u-mbm">
          <SprkStepper hasDarkBackground>
            <SprkStepperStep title="Step One" ></SprkStepperStep>
            <SprkStepperStep title="Step Two" ></SprkStepperStep>
            <SprkStepperStep title="Step Three" ></SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>

      <ExampleContainer heading="Stepper with Step Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep title="Step One">
              Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected>
              Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
            <SprkStepperStep title="Step Three">
              Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
            <SprkStepperStep title="Step Four">
              Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Stepper with Dark Background and Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper hasDarkBackground>
            <SprkStepperStep title="Step One">
              Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected>
              Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
            <SprkStepperStep title="Step Three">
              Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
            <SprkStepperStep title="Step Four">
              Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkStepperDocs;
