import React from 'react';

import SprkStepper from './SprkStepper';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Components|Stepper',
  decorators: [withKnobs],
  component: SprkStepper,
  parameters: {
  info: `
This is some info about the Stepper
    `,
    jest: [
      'SprkStepper',
      'SprkStepperSlider',
      'SprkStepperStep'
    ]
  },
};

export const defaultStory = () => (
  <SprkStepper
    hasDarkBackground={boolean('hasDarkBackground', false)}
    additionalClasses={text('additionalClasses', '')}
    idString={text('idString', '')}
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
    hasDarkBackground={boolean('hasDarkBackground', false)}
    additionalClasses={text('additionalClasses', '')}
    idString={text('idString', '')}
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
