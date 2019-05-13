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

          {/* <SprkStepper
            variant="hasDescription"
            items={[
              {
                title: 'Step One',
                isSelected: false,
                contents: 'Step one content - lorem ipsum lorem ipsum lorem',
              },
              {
                title: 'Step Two',
                isSelected: true,
                contents: 'Step two content - lorem ipsum lorem ipsum lorem',
              },
              {
                title: 'Step Three',
                isSelected: false,
                contents: 'Step three content - lorem ipsum lorem ipsum lorem',
              },
            ]}
          /> */}
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Stepper with Step Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep title="Step One" variant="hasDescription">
              Step one content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep
              title="Step Two"
              variant="hasDescription"
              isSelected
            >
              Step two content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Three" variant="hasDescription">
              Step three content - lorem ipsum lorem ipsum
            </SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkStepperDocs;

{/* <SprkStepper
            variant="carousel"
            additionalClasses='foo bar'
            idString="foo"
          >

            <SprkStepperStep
              isSelected={true}
              imgSrc={blahblah.png}
              imgAlt={"this is an image of a blahblah"}
              darkBackground=true
              backgroundColor=#003322
              additionalClasses='foo bar'
              additionalImageClasses='foo bar baz'
              analyticsString="foo"
              idString="foo"
            >
              Step 1 content lorem ipsum
            </SprkStepperStep>

            [... more stepper items ...]

          </SprkStepper> */}