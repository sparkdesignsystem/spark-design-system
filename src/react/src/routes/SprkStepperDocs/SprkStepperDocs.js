import React from 'react';
import { SprkStepper, SprkStepperItem } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkStepperDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base Stepper">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperItem>

            </SprkStepperItem>
          </SprkStepper>
          {/* <SprkStepper
            variant="carousel"
            additionalClasses='foo bar'
            idString="foo"
          >

            <SprkStepperItem
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
            </SprkStepperItem>

            [... more stepper items ...]

          </SprkStepper> */}
        </div>
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkStepperDocs;
