import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import SprkInput from './SprkInput/SprkInput';
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

export const passwordInput = () => <SprkInput />;

passwordInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const invalidPasswordInput = () => <SprkInput isValid={false} />;

invalidPasswordInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const disabledPasswordInput = () => <SprkInput isDisabled />;

disabledPasswordInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput'],
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
