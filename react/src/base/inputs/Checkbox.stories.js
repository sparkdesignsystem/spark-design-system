import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import SprkCheckboxGroup from './SprkCheckboxGroup/SprkCheckboxGroup';
import SprkCheckbox from './SprkCheckbox/SprkCheckbox';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import SprkHelperText from './SprkHelperText/SprkHelperText';
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
      'SprkHelperText',
    ],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};
export const defaultStory = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox>Checkbox Item 1</SprkCheckbox>
      <SprkCheckbox>Checkbox Item 2</SprkCheckbox>
      <SprkCheckbox>Checkbox Item 3</SprkCheckbox>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const helperText = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox>Checkbox Item 1</SprkCheckbox>
      <SprkCheckbox>Checkbox Item 2</SprkCheckbox>
      <SprkCheckbox>Checkbox Item 3</SprkCheckbox>
    </SprkFieldset>
    <SprkHelperText>Input Helper Text</SprkHelperText>
  </SprkCheckboxGroup>
);

helperText.story = {
  name: 'Helper Text',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const invalidCheckbox = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox ariaDescribedBy="checkbox-error-container">
        Checkbox Item 1
      </SprkCheckbox>
      <SprkCheckbox ariaDescribedBy="checkbox-error-container">
        Checkbox Item 2
      </SprkCheckbox>
      <SprkCheckbox ariaDescribedBy="checkbox-error-container">
        Checkbox Item 3
      </SprkCheckbox>
      <SprkErrorContainer
        id="checkbox-error-container"
        message="There is an error on this field"
      />
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
      <SprkCheckbox disabled>Checkbox Item 1</SprkCheckbox>
      <SprkCheckbox disabled>Checkbox Item 2</SprkCheckbox>
      <SprkCheckbox disabled>Checkbox Item 3</SprkCheckbox>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

disabledCheckbox.story = {
  name: 'Disabled',
  paramteres: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const huge = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox variant="huge">Checkbox Item 1</SprkCheckbox>
      <SprkCheckbox variant="huge">Checkbox Item 2</SprkCheckbox>
      <SprkCheckbox variant="huge">Checkbox Item 3</SprkCheckbox>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

huge.story = {
  name: 'Huge',
  parameters: {
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
