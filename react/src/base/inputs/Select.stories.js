import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
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
  <SprkInputContainer>
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
  </SprkInputContainer>
);

selectBox.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

export const invalidSelectBox = () => (
  <SprkInputContainer>
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
    />
    <SprkFieldError id="invalid-select">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidSelectBox.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInputContainer', 'SprkFieldError', 'SprkIcon'],
  },
};

export const disabledSelectBox = () => (
  <SprkInputContainer>
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
  </SprkInputContainer>
);

disabledSelectBox.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

export const hugeSelectBox = () => (
  <SprkInputContainer variant="huge">
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
  </SprkInputContainer>
);

hugeSelectBox.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

export const invalidHugeSelectBox = () => (
  <SprkInputContainer variant="huge">
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
    <SprkFieldError id="invalid-huge-select">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidHugeSelectBox.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkInputContainer', 'SprkFieldError', 'SprkIcon'],
  },
};

export const disabledHugeSelectBox = () => (
  <SprkInputContainer variant="huge">
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
  </SprkInputContainer>
);

disabledHugeSelectBox.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['SprkInputContainer'],
  },
};

export const legacySelectBox = () => (
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

legacySelectBox.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyInvalidSelectBox = () => (
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

legacyInvalidSelectBox.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyDisabledSelectBox = () => (
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

legacyDisabledSelectBox.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyHugeSelectBox = () => (
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

legacyHugeSelectBox.story = {
  name: 'Legacy Huge (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyInvalidHugeSelectBox = () => (
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

legacyInvalidHugeSelectBox.story = {
  name: 'Legacy Huge Invalid (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyDisabledHugeSelectBox = () => (
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

legacyDisabledHugeSelectBox.story = {
  name: 'Legacy Huge Disabled (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};
