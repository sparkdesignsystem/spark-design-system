import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Huge Text',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `${markdownDocumentationLinkBuilder('components', 'input')}`,
  },
};

export const hugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    placeholder="Huge Text Placeholder"
  />
);

hugeTextInput.story = {
  name: 'Default',
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const invalidHugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    placeholder="Huge Text Placeholder"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidHugeTextInput.story = {
  name: 'Invalid',
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const disabledHugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    placeholder="Huge Text Placeholder"
    disabled
  />
);

disabledHugeTextInput.story = {
  name: 'Disabled',
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

