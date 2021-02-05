import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Select',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkSelectionInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
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
    jest: ['SprkSelectionInput'],
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
    jest: ['SprkSelectionInput'],
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
    jest: ['SprkSelectionInput'],
  },
};

export const hugeSelectBox = () => (
  <SprkSelectionInput
    label="Select Box Label"
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
    variant="hugeSelect"
    name="select"
    defaultValue=""
  />
);

hugeSelectBox.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const invalidHugeSelectBox = () => (
  <SprkSelectionInput
    label="Select Box Label"
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
    variant="hugeSelect"
    name="select"
    valid={false}
    errorMessage="There is an error in the field."
    defaultValue=""
  />
);

invalidHugeSelectBox.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const disabledHugeSelectBox = () => (
  <SprkSelectionInput
    label="Select Box Label"
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
    variant="hugeSelect"
    name="select"
    disabled
    defaultValue=""
  />
);

disabledHugeSelectBox.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};
