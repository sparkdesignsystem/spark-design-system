import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/SSN',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkRevealInput,
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
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
  />
);

SSNInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};

export const invalidSSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidSSNInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};

export const disabledSSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
    disabled
  />
);

disabledSSNInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};
