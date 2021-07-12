import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
    info: `${markdownDocumentationLinkBuilder('input')}
- Each Spark Input Container should contain one label/input set.
- The Huge Input element should precede the label element.
    `,
  },
};

export const textInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="custom">Text Input</SprkLabel>
    <SprkInput id="custom" type="text" />
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
    <SprkInput
      type="text"
      id="invalid-input"
      isValid={false}
      ariaDescribedBy="invalid-error"
    />
    <SprkFieldError id="invalid-error">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidTextInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkFieldError',
      'SprkIcon',
    ],
  },
};

export const disabledTextInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="disabled-input" isDisabled>
      Disabled Input
    </SprkLabel>
    <SprkInput type="text" id="disabled-input" isDisabled />
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
    <SprkInput
      id="huge-input"
      variant="huge"
      placeholder="Placeholder"
      type="text"
    />
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
      ariaDescribedBy="invalid-error"
      type="text"
    />
    <SprkLabel htmlFor="invalid-huge-input">Huge Input</SprkLabel>
    <SprkFieldError id="invalid-error">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidHugeTextInput.story = {
  name: 'Huge Invalid',
  component: SprkInput,
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkFieldError',
      'SprkIcon',
    ],
  },
};

export const disabledHugeTextInput = () => (
  <SprkInputContainer variant="huge">
    <SprkInput
      id="disabled-huge-input"
      variant="huge"
      placeholder="Placeholder"
      isDisabled
      type="text"
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
