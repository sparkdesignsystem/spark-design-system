import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Phone',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkTextInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters
(parenthesis and -) which you may need to remove
before submitting the form.
- Requires Additional Engineering:
  - Validation - The \`valid\` prop controls this
  input’s validation state. This boolean is
  determined by your own validation logic.
  Validation happens before reformatting.
  - Reformatting to phone number pattern
  (###) ###-#### - After valid input, it
  should reformat to add commas and decimals
  to the hundredth place. Reformat user input
  with the \`formatter\` prop. This prop receives
  a function that takes the current value and returns
  the reformatted value. 
`,
  },
};

export const phoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
  />
);

phoneInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const invalidPhoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidPhoneInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const disabledPhoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    disabled
  />
);

disabledPhoneInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
