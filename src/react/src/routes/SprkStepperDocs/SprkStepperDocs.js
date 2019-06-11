import React from 'react';
import { SprkStepper, SprkStepperStep } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkStepperDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Stepper with Dark Background and Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper hasDarkBackground hasDescriptions>
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
      {/* <ExampleContainer heading="Carousel (no Stepper)">
        <div className="sprk-u-mbm">
          <SprkCarousel>
            <SprkCarouselStep
              imgSrc='https://sparkdesignsystem.com/assets/toolkit/images/phone-shadow.png'
            ></SprkCarouselStep>
            <SprkCarouselStep
              imgSrc='https://sparkdesignsystem.com/assets/toolkit/images/phone-shadow.png'
            ></SprkCarouselStep>
            <SprkCarouselStep
              imgSrc='https://sparkdesignsystem.com/assets/toolkit/images/phone-shadow.png'
            ></SprkCarouselStep>
          </SprkCarousel>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Base Stepper">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep title="Step One" />
            <SprkStepperStep title="Step Two" />
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Empty (Minimum valid config - no errors)">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep />
            <SprkStepperStep />
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Stepper with Step Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper hasDescriptions>
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
          <SprkStepper hasDarkBackground>
            <SprkStepperStep title="Step One" />
            <SprkStepperStep title="Step Two" />
            <SprkStepperStep title="Step Three" />
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Carousel">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep title="Step One" isSelected imgSrc='https://sparkdesignsystem.com/assets/toolkit/images/phone-shadow.png'/>
            <SprkStepperStep title="Step Two" imgSrc='https://sparkdesignsystem.com/assets/toolkit/images/phone-shadow.png'/>
            <SprkStepperStep title="Step Three" imgSrc='https://sparkdesignsystem.com/assets/toolkit/images/phone-shadow.png'/>
          </SprkStepper>
          </div>
      </ExampleContainer>
      <ExampleContainer heading="Carousel and Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper hasDescriptions>
            <SprkStepperStep title="Step One" imgSrc='foo'>
              Step one content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected imgSrc='foo'>
              Step two content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Three" imgSrc='foo'>
              Step three content - lorem ipsum lorem ipsum
            </SprkStepperStep>
          </SprkStepper>
        </div>
      </ExampleContainer> */}
    </CentralColumnLayout>
  );
};

export default SprkStepperDocs;
