import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
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

export const textInput = () => <SprkInput />;

textInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const invalidTextInput = () => <SprkInput isValid={false} />;

invalidTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const disabledTextInput = () => <SprkInput isDisabled />;

disabledTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const hugeTextInput = () => (
  <SprkInput variant="huge" placeholder="Huge Text Placeholder" />
);

hugeTextInput.story = {
  name: 'Huge',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
  },
};

export const invalidHugeTextInput = () => (
  <SprkInput
    variant="huge"
    placeholder="Huge Text Placeholder"
    isValid={false}
  />
);

invalidHugeTextInput.story = {
  name: 'Huge Invalid',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
  },
};

export const disabledHugeTextInput = () => (
  <SprkInput variant="huge" placeholder="Huge Text Placeholder" isDisabled />
);

disabledHugeTextInput.story = {
  name: 'Huge Disabled',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
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
