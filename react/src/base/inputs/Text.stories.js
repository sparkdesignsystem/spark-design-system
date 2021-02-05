import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkTextInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const textInput = () => (
  <SprkTextInput label="Text Input Label" name="text-input-label" />
);

textInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const invalidTextInput = () => (
  <SprkTextInput
    label="Text Input Label"
    name="text-input-label"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const disabledTextInput = () => (
  <SprkTextInput label="Text Input Label" name="text-input-label" disabled />
);

disabledTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkTextInput'],
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
  name: 'Huge',
  component: SprkTextInput,
  parameters: {
    jest: ['SprkTextInput'],
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
  name: 'Huge Invalid',
  component: SprkTextInput,
  parameters: {
    jest: ['SprkTextInput'],
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
  name: 'Huge Disabled',
  component: SprkTextInput,
  parameters: {
    jest: ['SprkTextInput'],
  },
};
