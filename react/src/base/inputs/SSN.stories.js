import React from 'react';
import SprkRevealInput from './SprkRevealInput/SprkRevealInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

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
    info: markdownDocumentationLinkBuilder('input'),
  },
};

export const SSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
  />
);

SSNInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};

export const invalidSSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidSSNInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};

export const disabledSSNInput = () => (
  <SprkRevealInput
    label="Social Security Number"
    toggleLabel="Show SSN"
    name="ssn"
    disabled
  />
);

disabledSSNInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'SprkRevealInput',
    ]
  },
};
