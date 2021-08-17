import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Date',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
    info: `
${markdownDocumentationLinkBuilder('input')}
- The value of this field contains special characters (/)
which you may need to remove before submitting the form.
- Requires Additional Engineering:
  - Validation - The \`isValid\` prop controls this input’s
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
  <SprkInputContainer>
    <SprkLabel htmlFor="date-1">Date</SprkLabel>
    <SprkInput id="date-1" placeholder="MM/DD/YYYY" />
  </SprkInputContainer>
);

dateInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidDateInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="date-2">Date</SprkLabel>
    <SprkInput
      id="date-2"
      placeholder="MM/DD/YYYY"
      isValid={false}
      ariaDescribedBy="invalid-error"
    />
    <SprkFieldError id="invalid-error">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidDateInput.story = {
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

export const disabledDateInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="date-3" isDisabled>
      Date
    </SprkLabel>
    <SprkInput id="date-3" placeholder="MM/DD/YYYY" isDisabled />
  </SprkInputContainer>
);

disabledDateInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const legacy = () => (
  <SprkTextInput label="Date" name="date" placeholder="MM/DD/YYYY" />
);

legacy.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidDateInput = () => (
  <SprkTextInput
    label="Date"
    name="date"
    placeholder="MM/DD/YYYY"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidDateInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledDateInput = () => (
  <SprkTextInput label="Date" name="date" placeholder="MM/DD/YYYY" disabled />
);

legacyDisabledDateInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
