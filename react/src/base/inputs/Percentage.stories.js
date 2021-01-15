import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
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

export const percentageInput = () => (
  <>
    <SprkLabel>Percentage</SprkLabel>
    <SprkInput
      additionalClasses="
        sprk-b-TextInput--has-svg-icon
        sprk-b-InputContainer__input--has-icon-right"
      type="tel"
    />
  </>
);

percentageInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const invalidPercentageInput = () => (
  <>
    <SprkLabel>Percentage</SprkLabel>
    <SprkInput
      additionalClasses="
        sprk-b-TextInput--has-svg-icon
        sprk-b-InputContainer__input--has-icon-right"
      type="tel"
      isValid={false}
    />
  </>
);

invalidPercentageInput.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
  },
};

export const disabledPercentageInput = () => (
  <>
    <SprkLabel isDisabled>Percentage</SprkLabel>
    <SprkInput
      additionalClasses="
        sprk-b-TextInput--has-svg-icon
        sprk-b-InputContainer__input--has-icon-right"
      type="tel"
      isDisabled
    />
  </>
);

disabledPercentageInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel'],
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
