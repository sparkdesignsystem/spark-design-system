import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/SSN',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters
(-) which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation - The \`valid\` prop controls this input’s
  validation state. This boolean is determined by your
  own validation logic. Validation happens before reformatting.
  - Reformatting to SSN pattern (###-##-####) - After valid
  input, it should reformat to having the first three numbers,
  a dash, the next two numbers, a dash, and the last four
  numbers. Reformat user input with the \`formatter\` prop.
  This prop receives a function that takes the current value
  and returns the reformatted value.
`,
  },
};

export const SSNInput = () => (
  <>
    <SprkLabel>Social Security Number</SprkLabel>
    <SprkInput />
  </>
);

SSNInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidSSNInput = () => (
  <>
    <SprkLabel>Social Security Number</SprkLabel>
    <SprkInput isValid={false} />
  </>
);

invalidSSNInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledSSNInput = () => (
  <>
    <SprkLabel isDisabled>Social Security Number</SprkLabel>
    <SprkInput isDisabled />
  </>
);

disabledSSNInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const legacySSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
  />
);

legacySSNInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};

export const legacyInvalidSSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidSSNInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};

export const legacyDisabledSSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
    disabled
  />
);

legacyDisabledSSNInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};
