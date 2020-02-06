import React from 'react';
import SprkStepper from './SprkStepper';
import SprkStepperStep from './components/SprkStepperStep/SprkStepperStep';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
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
    info: `
${markdownDocumentationLinkBuilder('stepper')}
- The React Stepper uses the index of its children
to keep track of the active step. If you want to modify
the index of the child steps (for example, by sorting
them or adding more steps) you need to re-initialize
the component so that it tracks the updated indexes.
- The active step can be updated programmatically
by changing the value of \`isSelected\` on the steps.
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
      Step 1 Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
    </SprkStepperStep>
    <SprkStepperStep title="Step Two">
      Step 2 Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
    </SprkStepperStep>
    <SprkStepperStep title="Step Three">
      Step 3 Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
    </SprkStepperStep>
    <SprkStepperStep title="Step Four">
      Step 4 Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
    </SprkStepperStep>
  </SprkStepper>
);

export const withDarkBackground = () => (
  <SprkStepper
    hasDarkBackground
    idString="stepper-dark-bg"
  >
    <SprkStepperStep title="Step One">
      Step 1 Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
  </SprkStepperStep>
    <SprkStepperStep
      title="Step Two"
      isSelected
    >
      Step 2 Lorem ipsum dolor sit
      amet consectetur adipisicing elit.
  </SprkStepperStep>
    <SprkStepperStep title="Step Three">
      Step 3 Lorem ipsum dolor sit
      amet consectetur adipisicing elit.
  </SprkStepperStep>
    <SprkStepperStep title="Step Four">
      Step 4 Lorem ipsum dolor sit
      amet consectetur adipisicing elit.
  </SprkStepperStep>
  </SprkStepper>
);