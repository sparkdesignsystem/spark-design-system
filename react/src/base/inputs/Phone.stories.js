import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/Phone',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: markdownLinkBuilder('input'),
  },
};

export const phoneInput = () => (
  <SprkTextInput
    label="Phone Number"
    name="phone"
    placeholder="(000) 000-0000"
    errorMessage="Incorrect phone number."
  />
);

phoneInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
