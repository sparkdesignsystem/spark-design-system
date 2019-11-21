import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Input/SSN',
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

export const ssnInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
  />
);

ssnInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};
