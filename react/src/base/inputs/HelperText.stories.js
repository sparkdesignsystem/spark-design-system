import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Helper Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkHelperText'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- Helper text must be placed below the Input and above the error container.
`,
  },
};

export const helperText = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="text-1">Text Input Label</SprkLabel>
    <SprkInput id="text-1" ariaDescribedBy="helper-text-1" />
    <SprkHelperText id="helper-text-1">
      Optional helper text, used to clarify the field&apos;s intent.
    </SprkHelperText>
  </SprkInputContainer>
);

helperText.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer', 'SprkHelperText'],
  },
};

export const invalidHelperText = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="text-2">Text Input Label</SprkLabel>
    <SprkInput
      ariaDescribedBy="helper-text-2 invalid-helper"
      id="text-2"
      isValid={false}
    />
    <SprkHelperText id="helper-text-2">
      Optional helper text, used to clarify the field&apos;s intent.
    </SprkHelperText>
    <SprkFieldError id="invalid-helper">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidHelperText.story = {
  name: 'With Error Text',
  parameters: {
    jest: [
      'SprkHelperText',
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkFieldError',
      'SprkIcon',
    ],
  },
};

export const legacyHelperText = () => (
  <SprkTextInput
    label="Text Input Label"
    name="helper-text-example"
    helperText="This is my helper text."
  />
);

legacyHelperText.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidHelperText = () => (
  <SprkTextInput
    label="Text Input Label"
    name="helper-text-example"
    helperText="This is my helper text."
    errorMessage="There is an error on this field."
    valid={false}
  />
);

legacyInvalidHelperText.story = {
  name: 'Legacy With Error Text (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
