import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Monetary',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInputIconCheck'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field may contain special characters
(,) which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation - The \`valid\` prop controls this input’s
  validation state. This boolean is determined by your own
  validation logic. Validation happens before reformatting.
  - Reformatting to monetary pattern (##.##) - On blur, it
  should reformat to add commas and decimals to the hundredth
  place. Reformat user input with the \`formatter\` prop.
  This prop receives a function that takes the current value
  and returns the reformatted value.
`,
  },
};

export const monetaryInput = () => (
  <SprkInputContainer>
    <div
      className="
        sprk-b-InputContainer__icon-container
        sprk-b-TextInputIconContainer--has-text-icon"
    >
      <SprkLabel isMonetary>Payment</SprkLabel>
      <SprkInput
        additionalClasses="sprk-b-TextInput--has-text-icon"
        placeholder="0.00"
      />
    </div>
  </SprkInputContainer>
);

monetaryInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidMonetaryInput = () => (
  <SprkInputContainer>
    <div
      className="
        sprk-b-InputContainer__icon-container
        sprk-b-TextInputIconContainer--has-text-icon"
    >
      <SprkLabel isMonetary>Payment</SprkLabel>
      <SprkInput
        additionalClasses="sprk-b-TextInput--has-text-icon"
        placeholder="0.00"
        isValid={false}
      />
    </div>
    <SprkErrorContainer
      id="invalid-monetary"
      message="Update this story once error container is done"
    >
      There is an error on this field.
    </SprkErrorContainer>
  </SprkInputContainer>
);

invalidMonetaryInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkErrorContainer',
    ],
  },
};

export const disabledMonetaryInput = () => (
  <SprkInputContainer>
    <div
      className="
        sprk-b-InputContainer__icon-container
        sprk-b-TextInputIconContainer--has-text-icon"
    >
      <SprkLabel isMonetary isDisabled>
        Payment
      </SprkLabel>
      <SprkInput
        additionalClasses="sprk-b-TextInput--has-text-icon"
        placeholder="0.00"
        isDisabled
      />
    </div>
  </SprkInputContainer>
);

disabledMonetaryInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const legacyMonetaryInput = () => (
  <SprkTextInput label="Payment" textIcon name="monetary" placeholder="0.00" />
);

legacyMonetaryInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidMonetaryInput = () => (
  <SprkTextInput
    label="Payment"
    textIcon
    name="monetary"
    placeholder="0.00"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidMonetaryInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledMonetaryInput = () => (
  <SprkTextInput
    label="Payment"
    textIcon
    name="monetary"
    placeholder="0.00"
    disabled
  />
);

legacyDisabledMonetaryInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
