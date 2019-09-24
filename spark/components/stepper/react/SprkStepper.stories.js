import React from 'react';

import SprkStepper from './SprkStepper';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';

export default {
  title: 'Components|Stepper',
  parameters: { component: SprkStepper },
};

export const defaultStory = () => (
  <SprkStepper>
    <SprkStepperStep title="Step One"></SprkStepperStep>
    <SprkStepperStep title="Step Two"></SprkStepperStep>
    <SprkStepperStep title="Step Three"></SprkStepperStep>
  </SprkStepper>
);

defaultStory.story = {
  name: 'Default',
};

export const darkBackground = () => (
  <SprkStepper hasDarkBackground>
    <SprkStepperStep title="Step One"></SprkStepperStep>
    <SprkStepperStep title="Step Two"></SprkStepperStep>
    <SprkStepperStep title="Step Three"></SprkStepperStep>
  </SprkStepper>
);

darkBackground.story = {
  name: 'Dark Background',
};

export const withDescriptions = () => (
  <SprkStepper>
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

withDescriptions.story = {
  name: 'With Descriptions',
};

export const darkBackgroundAndDescriptions = () => (
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
);

darkBackgroundAndDescriptions.story = {
  name: 'Dark Background and Descriptions',
};
