import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkCheckboxGroup from './SprkCheckboxGroup/SprkCheckboxGroup';
import SprkCheckbox from './SprkCheckbox/SprkCheckbox';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkSelectionInput,
  parameters: {
    jest: [
      'SprkErrorContainer',
      'SprkInputIconCheck',
      'SprkCheckboxGroup',
      'SprkCheckbox',
      'SprkFieldset',
      'SprkLegend',
    ],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};
export const defaultStory = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox>default</SprkCheckbox>
      <SprkCheckbox>default</SprkCheckbox>
      <SprkCheckbox>default</SprkCheckbox>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const invalidCheckbox = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox>default</SprkCheckbox>
      <SprkCheckbox>default</SprkCheckbox>
      <SprkCheckbox>default</SprkCheckbox>
      {/* <SprkErrorContainer></SprkErrorContainer> */}
    </SprkFieldset>
  </SprkCheckboxGroup>
);

invalidCheckbox.story = {
  name: 'Invalid',
  paramteres: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const disabledCheckbox = () => (
  <SprkCheckboxGroup disabled>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox>default</SprkCheckbox>
      <SprkCheckbox>default</SprkCheckbox>
      <SprkCheckbox>default</SprkCheckbox>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

disabledCheckbox.story = {
  name: 'Disabled',
  paramteres: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const legacy = () => (
  <SprkSelectionInput
    groupLabel="Checkbox Input"
    choices={[
      {
        label: 'Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Checkbox Item 3',
        name: 'check[]',
        value: 'item-2',
      },
    ]}
    variant="checkbox"
  />
);

legacy.story = {
  name: 'Legacy (Depracated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyInvalidCheckbox = () => (
  <SprkSelectionInput
    groupLabel="Checkbox Input"
    choices={[
      {
        label: 'Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Checkbox Item 3',
        name: 'check[]',
        value: 'item-3',
      },
    ]}
    variant="checkbox"
    valid={false}
    errorMessage="There is an error on this field"
  />
);

legacyInvalidCheckbox.story = {
  name: 'Legacy Invalid (Depracated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyDisabledCheckbox = () => (
  <SprkSelectionInput
    groupLabel="Checkbox Input"
    choices={[
      {
        label: 'Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Checkbox Item 3',
        name: 'check[]',
        value: 'item-3',
      },
    ]}
    variant="checkbox"
    disabled
  />
);

legacyDisabledCheckbox.story = {
  name: 'Legacy Disabled (Depracated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};
