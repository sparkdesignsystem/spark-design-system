import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Password',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const passwordInput = () => (
  <>
    <SprkLabel>Password</SprkLabel>
    <SprkInput />
  </>
);

passwordInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidPasswordInput = () => (
  <>
    <SprkLabel>Password</SprkLabel>
    <SprkInput isValid={false} />
  </>
);

invalidPasswordInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledPasswordInput = () => (
  <>
    <SprkLabel isDisabled>Password</SprkLabel>
    <SprkInput isDisabled />
  </>
);

disabledPasswordInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
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
