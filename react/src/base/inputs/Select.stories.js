import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Select',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkSelectionInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
    ],
    info: `${markdownDocumentationLinkBuilder('components', 'input')}`,
  },
};

export const selectBox = () => (
  <SprkSelectionInput
    choices={[
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Grouped Options',
        options: [
          {
            label: 'Grouped Option 1',
            value: 'grouped-option-1',
          },
          {
            label: 'Grouped Option 2',
            value: 'grouped-option-2',
          },
          {
            label: 'Grouped Option 3',
            value: 'grouped-option-3',
          },
        ],
      },
    ]}
    name="name"
    variant="select"
    label="Select Box Label"
  />
);

selectBox.story = {
  name: 'Default',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const invalidSelectBox = () => (
  <SprkSelectionInput
    choices={[
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Grouped Options',
        options: [
          {
            label: 'Grouped Option 1',
            value: 'grouped-option-1',
          },
          {
            label: 'Grouped Option 2',
            value: 'grouped-option-2',
          },
          {
            label: 'Grouped Option 3',
            value: 'grouped-option-3',
          },
        ],
      },
    ]}
    name="name"
    variant="select"
    label="Select Box Label"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

invalidSelectBox.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

export const disabledSelectBox = () => (
  <SprkSelectionInput
    choices={[
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
      {
        label: 'Grouped Options',
        options: [
          {
            label: 'Grouped Option 1',
            value: 'grouped-option-1',
          },
          {
            label: 'Grouped Option 2',
            value: 'grouped-option-2',
          },
          {
            label: 'Grouped Option 3',
            value: 'grouped-option-3',
          },
        ],
      },
    ]}
    name="name"
    variant="select"
    label="Select Box Label"
    disabled
  />
);

disabledSelectBox.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'SprkSelectionInput',
    ]
  },
};

