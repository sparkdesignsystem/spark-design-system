import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Percentage',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkErrorContainer', 'SprkInputIconCheck'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const percentageInput = () => <SprkInput type="tel" />;

percentageInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const invalidPercentageInput = () => (
  <SprkInput type="tel" isValid={false} />
);

invalidPercentageInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const disabledPercentageInput = () => (
  <SprkInput type="tel" isDisabled />
);

disabledPercentageInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput'],
  },
};

export const legacyPercentageInput = () => (
  <SprkTextInput
    label="Percentage"
    iconRight
    leadingIcon="percent"
    narrowWidth
    name="percentage"
    type="tel"
  />
);

legacyPercentageInput.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyInvalidPercentageInput = () => (
  <SprkTextInput
    label="Percentage"
    iconRight
    leadingIcon="percent"
    narrowWidth
    name="percentage"
    type="tel"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidPercentageInput.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};

export const legacyDisabledPercentageInput = () => (
  <SprkTextInput
    label="Percentage"
    iconRight
    leadingIcon="percent"
    narrowWidth
    name="percentage"
    type="tel"
    disabled
  />
);

legacyDisabledPercentageInput.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkTextInput'],
  },
};
