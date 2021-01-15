import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Phone',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
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
  <>
    <SprkLabel>Phone Number</SprkLabel>
    <SprkInput placeholder="(000) 000-0000" />
  </>
);

phoneInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidPhoneInput = () => (
  <>
    <SprkLabel>Phone Number</SprkLabel>
    <SprkInput placeholder="(000) 000-0000" isValid={false} />
  </>
);

invalidPhoneInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledPhoneInput = () => (
  <>
    <SprkLabel isDisabled>Phone Number</SprkLabel>
    <SprkInput placeholder="(000) 000-0000" isDisabled />
  </>
);

disabledPhoneInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const legacyPhoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
  />
);

legacyPhoneInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidPhoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidPhoneInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledPhoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    disabled
  />
);

legacyDisabledPhoneInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
