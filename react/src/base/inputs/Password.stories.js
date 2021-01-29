import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Password',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const passwordInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="password-1">Password</SprkLabel>
    <SprkInput id="password-1" additionalClasses="sprk-u-Width-100" />
  </SprkInputContainer>
);

passwordInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidPasswordInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="password-2">Password</SprkLabel>
    <SprkInput
      id="password-2"
      ariaDescribedBy="invalid-password"
      isValid={false}
      additionalClasses="sprk-u-Width-100"
    />
    <SprkFieldError id="invalid-password">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidPasswordInput.story = {
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

export const disabledPasswordInput = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="password-3" isDisabled>
      Password
    </SprkLabel>
    <SprkInput
      id="password-3"
      isDisabled
      additionalClasses="sprk-u-Width-100"
    />
  </SprkInputContainer>
);

disabledPasswordInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const legacyPasswordInput = () => (
  <SprkRevealInput
    label="Password"
    toggleLabel="Show Password"
    name="password-1"
  />
);

legacyPasswordInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};

export const legacyInvalidPasswordInput = () => (
  <SprkRevealInput
    label="Password"
    toggleLabel="Show Password"
    name="password-1"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidPasswordInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};

export const legacyDisabledPasswordInput = () => (
  <SprkRevealInput
    label="Password"
    toggleLabel="Show Password"
    name="password-1"
    disabled
  />
);

legacyDisabledPasswordInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkRevealInput'],
  },
};
