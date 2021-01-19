import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}
- Each Spark Input Container should contain one label/input set.
- The Huge Input element should preceed the label element.
    `,
  },
};

export const textInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="custom">Text Input</SprkLabel>
    <SprkInput id="custom" />
  </SprkInputContainer>
);

textInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidTextInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="invalid-input">Invalid Input</SprkLabel>
    <SprkInput id="invalid-input" isValid={false} />
    <SprkErrorContainer
      id="invalid-error"
      message="Update this story once error container is done"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkErrorContainer',
    ],
  },
};

export const disabledTextInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="disabled-input" isDisabled>
      Disabled Input
    </SprkLabel>
    <SprkInput id="disabled-input" isDisabled />
  </SprkInputContainer>
);

disabledTextInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const hugeTextInput = () => (
  <SprkInputContainer variant="huge">
    <SprkInput id="huge-input" variant="huge" placeholder="Placeholder" />
    <SprkLabel htmlFor="huge-input">Huge Input</SprkLabel>
  </SprkInputContainer>
);

hugeTextInput.story = {
  name: 'Huge',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidHugeTextInput = () => (
  <SprkInputContainer variant="huge">
    <SprkInput
      id="invalid-huge-input"
      variant="huge"
      placeholder="Placeholder"
      isValid={false}
    />
    <SprkLabel htmlFor="invalid-huge-input">Huge Input</SprkLabel>
    <SprkErrorContainer
      id="huge-error"
      message="Update once error container is done to remove message prop"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidHugeTextInput.story = {
  name: 'Huge Invalid',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledHugeTextInput = () => (
  <SprkInputContainer variant="huge">
    <SprkInput
      id="disabled-huge-input"
      variant="huge"
      placeholder="Placeholder"
      isDisabled
    />
    <SprkLabel htmlFor="disabled-huge-input">Huge Input</SprkLabel>
  </SprkInputContainer>
);

disabledHugeTextInput.story = {
  name: 'Huge Disabled',
  component: SprkInput,
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
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
