import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkSelect from './SprkSelect/SprkSelect';
import SprkIcon from '../../components/icons/SprkIcon';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkLabel from './SprkLabel/SprkLabel';

export default {
  title: 'Components/Input/Select',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkSelect,
  parameters: {
    jest: [
      'SprkSelect',
      'SprkFieldError',
      'SprkInputIconCheck',
      'SprkIcon',
      'SprkLabel',
    ],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const selectBox = () => (
  <SprkInputContainer>
    <SprkLabel htmlFor="default-select">Select Box Label</SprkLabel>
    <SprkSelect
      id="default-select"
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
      name="select"
    />
    <SprkIcon
      iconName="chevron-down"
      aria-hidden="true"
      additionalClasses="
        sprk-c-Icon--filled-current-color
        sprk-c-Icon--stroke-current-color
        sprk-b-SelectContainer__icon
      "
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
    <SprkLabel htmlFor="invalid-select">Select Box Label</SprkLabel>
    <SprkSelect
      id="invalid-select"
      ariaDescribedBy="select-invalid-error"
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
      name="select"
      isValid={false}
    />
    <SprkIcon
      iconName="chevron-down"
      aria-hidden="true"
      additionalClasses="
        sprk-c-Icon--filled-current-color
        sprk-c-Icon--stroke-current-color
        sprk-b-SelectContainer__icon
      "
    />
    <SprkFieldError id="select-invalid-error">
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
    <SprkLabel isDisabled htmlFor="disabled-select">
      Select Box Label
    </SprkLabel>
    <SprkSelect
      id="disabled-select"
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
      name="disabled-select"
      isDisabled
    />
    <SprkIcon
      iconName="chevron-down"
      aria-hidden="true"
      additionalClasses="
        sprk-c-Icon--filled-current-color
        sprk-c-Icon--stroke-current-color
        sprk-b-SelectContainer__icon
      "
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
    <SprkSelect
      id="huge-select"
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
      variant="huge"
      name="select"
      defaultValue=""
    />
    <SprkLabel htmlFor="huge-select">Select Box Label</SprkLabel>
    <SprkIcon
      iconName="chevron-down"
      aria-hidden="true"
      additionalClasses="
        sprk-c-Icon--filled-current-color
        sprk-c-Icon--stroke-current-color
        sprk-b-SelectContainer__icon
      "
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
    <SprkSelect
      id="select-huge-invalid"
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
      variant="huge"
      name="select-huge-invalid"
      ariaDescribedBy="select-huge-invalid"
      isValid={false}
      defaultValue=""
    />
    <SprkLabel htmlFor="select-huge-invalid">Select Box Label</SprkLabel>
    <SprkIcon
      iconName="chevron-down"
      aria-hidden="true"
      additionalClasses="
        sprk-c-Icon--filled-current-color
        sprk-c-Icon--stroke-current-color
        sprk-b-SelectContainer__icon
      "
    />
    <SprkFieldError id="select-huge-invalid">
      <SprkIcon
        aria-hidden="true"
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
    <SprkSelect
      id="huge-disabled-select"
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
      variant="huge"
      name="huge-disabled-select"
      isDisabled
      defaultValue=""
    />
    <SprkLabel htmlFor="huge-disabled-select" isDisabled>
      Select Box Label
    </SprkLabel>
    <SprkIcon
      iconName="chevron-down"
      aria-hidden="true"
      additionalClasses="
        sprk-c-Icon--filled-current-color
        sprk-c-Icon--stroke-current-color
        sprk-b-SelectContainer__icon
      "
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
