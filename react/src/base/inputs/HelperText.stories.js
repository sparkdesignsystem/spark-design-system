import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Helper Text',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- Helper text must be placed below the Input and above the error container.
`,
  },
};

export const helperText = () => (
  <>
    <SprkLabel>Text Input</SprkLabel>
    <SprkInput />
  </>
);

helperText.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidHelperText = () => (
  <>
    <SprkLabel>Text Input</SprkLabel>
    <SprkInput isValid={false} />
  </>
);

invalidHelperText.story = {
  name: 'With Error Text',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
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
