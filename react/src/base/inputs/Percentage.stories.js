import React from 'react';
import SprkTextInput from './SprkTextInput/SprkTextInput';
import SprkInput from './SprkInput/SprkInput';
import SprkLabel from './SprkLabel/SprkLabel';
import SprkInputContainer from './SprkInputContainer/SprkInputContainer';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Percentage',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkInput,
  parameters: {
    jest: ['SprkInput'],
    info: `${markdownDocumentationLinkBuilder('input')}`,
  },
};

export const percentageInput = () => (
  <SprkInputContainer>
    <div
      className="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
    >
      <SprkLabel htmlFor="percentage-1">Percentage</SprkLabel>
      <SprkIcon
        iconName="percent"
        aria-hidden="true"
        additionalClasses="
          sprk-b-InputContainer__icon
          sprk-b-InputContainer__icon--right"
      />
      <SprkInput
        id="percentage-1"
        additionalClasses="
        sprk-b-TextInput--has-svg-icon
        sprk-b-InputContainer__input--has-icon-right"
        type="tel"
      />
    </div>
  </SprkInputContainer>
);

percentageInput.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
  },
};

export const invalidPercentageInput = () => (
  <SprkInputContainer>
    <div
      className="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
    >
      <SprkLabel htmlFor="percentage-2">Percentage</SprkLabel>
      <SprkIcon
        iconName="percent"
        aria-hidden="true"
        additionalClasses="
          sprk-b-InputContainer__icon
          sprk-b-InputContainer__icon--right"
      />

      <SprkInput
        id="percentage-2"
        ariaDescribedBy="invalid-percentage"
        additionalClasses="
          sprk-b-TextInput--has-svg-icon
          sprk-b-InputContainer__input--has-icon-right"
        type="tel"
        isValid={false}
      />
    </div>
    <SprkFieldError id="invalid-percentage">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkInputContainer>
);

invalidPercentageInput.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'SprkInput',
      'SprkLabel',
      'SprkInputContainer',
      'SprkFieldError',
      'SprkIcon',
    ],
  },
};

export const disabledPercentageInput = () => (
  <SprkInputContainer>
    <div
      className="
        sprk-b-InputContainer__icon-container
        sprk-b-InputContainer__icon-container--narrow"
    >
      <SprkLabel htmlFor="percentage-3" isDisabled>
        Percentage
      </SprkLabel>
      <SprkIcon
        iconName="percent"
        aria-hidden="true"
        additionalClasses="
          sprk-b-InputContainer__icon
          sprk-b-InputContainer__icon--right"
      />
      <SprkInput
        id="percentage-3"
        additionalClasses="
          sprk-b-TextInput--has-svg-icon
          sprk-b-InputContainer__input--has-icon-right"
        type="tel"
        isDisabled
      />
    </div>
  </SprkInputContainer>
);

disabledPercentageInput.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkInput', 'SprkLabel', 'SprkInputContainer'],
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
