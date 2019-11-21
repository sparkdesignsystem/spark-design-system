import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/Password',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkRevealInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: markdownLinkBuilder('input'),
  },
};

export const passwordInput = () => (
  <SprkRevealInput
    label="Password"
    toggleLabel="Show Password"
    name="password-1"
  />
);

passwordInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};
