import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Phone',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
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
  <SprkInputContainer>
    <SprkLabel htmlFor="phone-1">Phone Number</SprkLabel>
    <SprkInput
      id="phone-1"
      placeholder="(000) 000-0000"
      additionalClasses="sprk-u-Width-100"
    />
  </SprkInputContainer>
);

phoneInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidPhoneInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="phone-2">Phone Number</SprkLabel>
    <SprkInput
      id="phone-2"
      ariaDescribedBy="invalid-phone"
      placeholder="(000) 000-0000"
      isValid={false}
      additionalClasses="sprk-u-Width-100"
    />
    <SprkFieldError id="invalid-phone">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidPhoneInput.story = {
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

export const disabledPhoneInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="phone-3" isDisabled>
      Phone Number
    </SprkLabel>
    <SprkInput
      id="phone-3"
      placeholder="(000) 000-0000"
      isDisabled
      additionalClasses="sprk-u-Width-100"
    />
  </SprkInputContainer>
);

disabledPhoneInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
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
