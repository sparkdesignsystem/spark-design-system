import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Monetary',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkTextInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const monetaryInput = () => (
  <SprkTextInput label="Payment" textIcon name="monetary" placeholder="0.00" />
);

monetaryInput.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const invalidMonetaryInput = () => (
  <SprkTextInput
    label="Payment"
    textIcon name="monetary"
    placeholder="0.00"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidMonetaryInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};

export const disabledMonetaryInput = () => (
  <SprkTextInput
    label="Payment"
    textIcon name="monetary"
    placeholder="0.00"
    disabled
  />
);

disabledMonetaryInput.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'SprkTextInput',
    ]
  },
};
