import React from 'react';
import { SprkStepper, SprkStepperStep, SprkCarousel, SprkCarouselStep } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkStepperDocs = () => {
  return (
    <CentralColumnLayout>

      {/* <ExampleContainer heading="Carousel Alone">
        <div className="sprk-u-mbm">
          <SprkCarousel>
            <SprkCarouselStep imgSrc='http://chittagongit.com/download/110277' />
            <SprkCarouselStep imgSrc='http://www.iconarchive.com/download/i78547/chrisl21/minecraft/Creeper.ico' />
            <SprkCarouselStep isSelected imgSrc='http://www.free-icons-download.net/images/blue-win7-logo-icon-48302.png' />
          </SprkCarousel>
        </div>
      </ExampleContainer> */}

      {/* <ExampleContainer heading="Stepper with Carousel">
        <div className="sprk-u-mbm">
          <SprkStepper hasDescriptions>
            <SprkStepperStep title="Step One"  imgSrc='http://chittagongit.com/download/110277'>
              Step one content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected imgSrc='http://www.iconarchive.com/download/i78547/chrisl21/minecraft/Creeper.ico'>
              Step two content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Three" imgSrc='http://www.free-icons-download.net/images/blue-win7-logo-icon-48302.png'>
              Step three content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
          </SprkStepper>
          </div>
      </ExampleContainer> */}


      <ExampleContainer heading="Base Stepper">
        <div className="sprk-u-mbm">
          <SprkStepper>
            <SprkStepperStep title="Step One" />
            <SprkStepperStep title="Step Two" />
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
      <ExampleContainer heading="Stepper with Dark Background">
        <div className="sprk-u-mbm">
          <SprkStepper hasDarkBackground>
            <SprkStepperStep title="Step One" />
            <SprkStepperStep title="Step Two" />
            <SprkStepperStep title="Step Three" />
          </SprkStepper>
        </div>
      </ExampleContainer>
      <ExampleContainer heading="Stepper with Dark Background and Descriptions">
        <div className="sprk-u-mbm">
          <SprkStepper hasDarkBackground>
            <SprkStepperStep title="Step One">
              Step one content - lorem ipsum lorem ipsum lorem
            </SprkStepperStep>
            <SprkStepperStep title="Step Two" isSelected>
              Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
