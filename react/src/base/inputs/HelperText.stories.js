import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Helper Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck', 'SprkHelperText'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- Helper text must be placed below the Input and above the error container.
`,
  },
};

export const helperText = () => (
  <SprkInputContainer>
    <SprkLabel>Text Input</SprkLabel>
    <SprkInput />
    <SprkHelperText>Helper Text for the form field.</SprkHelperText>
  </SprkInputContainer>
);

helperText.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidHelperText = () => (
  <SprkInputContainer>
    <SprkLabel>Text Input</SprkLabel>
    <SprkInput isValid={false} />
    <SprkHelperText>Helper Text for the form field.</SprkHelperText>
    <SprkErrorContainer
      id="invalid-helper"
      message="Update this story once error container is done"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidHelperText.story = {
  name: 'With Error Text',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkErrorContainer',
    ],
  },
};

export const legacyHelperText = () => (
  <SprkTextInput
    label="Text Input"
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
    label="Text Input"
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
