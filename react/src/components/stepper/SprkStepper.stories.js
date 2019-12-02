import React from 'react';
import SprkStepper from './SprkStepper';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';
import SprkStepperSlider from './components/SprkStepperSlider/SprkStepperSlider';

export default {
  title: 'Components/Stepper',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkStepper,
  parameters: {
    subcomponents: {
      SprkStepperSlider,
      SprkStepperStep
    },
    info: markdownLinkBuilder('stepper'),
    jest: [
      'SprkStepper',
      'SprkStepperSlider',
      'SprkStepperStep'
    ]
  },
};

export const defaultStory = () => (
  <SprkStepper
    hasDarkBackground={false}
    idString="stepper"
  >
    <SprkStepperStep title="Step One"></SprkStepperStep>
    <SprkStepperStep title="Step Two"></SprkStepperStep>
    <SprkStepperStep title="Step Three"></SprkStepperStep>
  </SprkStepper>
);

defaultStory.story = {
  name: 'Default',
};

export const withStepDescriptions = () => (
  <SprkStepper
    hasDarkBackground={false}
    idString="stepper-descriptions"
  >
    <SprkStepperStep title="Step One" isSelected>
      Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </SprkStepperStep>
    <SprkStepperStep title="Step Two">
      Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </SprkStepperStep>
    <SprkStepperStep title="Step Three">
      Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </SprkStepperStep>
    <SprkStepperStep title="Step Four">
      Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </SprkStepperStep>
  </SprkStepper>
);
