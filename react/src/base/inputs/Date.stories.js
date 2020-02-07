import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters (/)
which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation - The \`valid\` prop controls this input’s
  validation state. This boolean is determined by your
  own validation logic. Validation happens before reformatting.
  - Reformatting to date pattern MM/DD/YYYY - After valid
  input, it should reformat to add commas and decimals to the
  hundredth place. Reformat user input with the \`formatter\`
  prop. This prop receives a function that takes the current
  value and returns the reformatted value.
`,
  },
};

export const dateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
  />
);

dateInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const invalidDateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidDateInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const disabledDateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="01/01/2019"
    disabled
  />
);

disabledDateInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
