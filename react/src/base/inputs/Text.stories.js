import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const textInput = () => (
  <>
    <SprkLabel>Text Input Label</SprkLabel>
    <SprkInput />
  </>
);

textInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidTextInput = () => (
  <>
    <SprkLabel>Text Input Label</SprkLabel>
    <SprkInput isValid={false} />
  </>
);

invalidTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledTextInput = () => (
  <>
    <SprkLabel isDisabled>Text Input Label</SprkLabel>
    <SprkInput isDisabled />
  </>
);

disabledTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const hugeTextInput = () => (
  <>
    <SprkLabel>Text Input Label</SprkLabel>
    <SprkInput variant="huge" placeholder="Huge Text Placeholder" />
  </>
);

hugeTextInput.story = {
  name: 'Huge',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidHugeTextInput = () => (
  <>
    <SprkLabel>Text Input Label</SprkLabel>
    <SprkInput
      variant="huge"
      placeholder="Huge Text Placeholder"
      isValid={false}
    />
  </>
);

invalidHugeTextInput.story = {
  name: 'Huge Invalid',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledHugeTextInput = () => (
  <>
    <SprkLabel>Text Input Label</SprkLabel>
    <SprkInput variant="huge" placeholder="Huge Text Placeholder" isDisabled />
  </>
);

disabledHugeTextInput.story = {
  name: 'Huge Disabled',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const legacyTextInput = () => (
  <SprkTextInput label="Text Input Label" name="text-input-label" />
);

legacyTextInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidTextInput = () => (
  <SprkTextInput
    label="Text Input Label"
    name="text-input-label"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidTextInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledTextInput = () => (
  <SprkTextInput label="Text Input Label" name="text-input-label" disabled />
);

legacyDisabledTextInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyHugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    placeholder="Huge Text Placeholder"
  />
);

legacyHugeTextInput.story = {
  name: 'Legacy Huge (Deprecated)',
  component: SprkTextInput,
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidHugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    placeholder="Huge Text Placeholder"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidHugeTextInput.story = {
  name: 'Legacy Huge Invalid (Deprecated)',
  component: SprkTextInput,
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledHugeTextInput = () => (
  <SprkTextInput
    type="hugeTextInput"
    label="Text Input Label"
    name="text-input-label"
    placeholder="Huge Text Placeholder"
    disabled
  />
);

legacyDisabledHugeTextInput.story = {
  name: 'Legacy Huge Disabled (Deprecated)',
  component: SprkTextInput,
  parameters: {
    jest: ['SprkTextInput'],
  },
};
