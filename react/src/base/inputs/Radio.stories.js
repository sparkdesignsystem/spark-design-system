import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import SprkRadioGroup from './SprkRadioGroup/SprkRadioGroup';
import SprkRadio from './SprkRadio/SprkRadio';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Radio',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkRadioGroup,
  parameters: {
    subcomponents: {
      SprkErrorContainer,
      SprkRadioGroup,
      SprkRadio,
      SprkFieldset,
      SprkLegend,
      SprkHelperText,
      SprkSelectionInput,
    },
    jest: [
      'SprkErrorContainer',
      'SprkRadioGroup',
      'SprkRadio',
      'SprkFieldset',
      'SprkLegend',
      'SprkHelperText',
    ],
    info: `
    ${markdownDocumentationLinkBuilder('input')}
- Spark radios have been refactored into a compositional style component.
The version that uses <SprkSelectionInput> will be permanently removed
in our Fall 2020 release.
- To update to the new version, replace radios implemented by
the <code>SprkSelectionInput</code> component with our
new implementation using <code>SprkCheckboxGroup</code>
and <code>SprkCheckbox</code> components.
    `,
  },
};

export const defaultStory = () => (
  <SprkRadioGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio>Radio Item 1</SprkRadio>
      <SprkRadio>Radio Item 2</SprkRadio>
      <SprkRadio>Radio Item 3</SprkRadio>
    </SprkFieldset>
  </SprkRadioGroup>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const defaultHelperText = () => (
  <SprkRadioGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio>Radio Item 1</SprkRadio>
      <SprkRadio>Radio Item 2</SprkRadio>
      <SprkRadio>Radio Item 3</SprkRadio>
    </SprkFieldset>
    <SprkHelperText>Input Helper Text</SprkHelperText>
  </SprkRadioGroup>
);

defaultHelperText.story = {
  name: 'Default Helper Text',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const invalidRadio = () => (
  <SprkRadioGroup>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio ariaDescribedBy="radio-error-container">
        Radio Item 1
      </SprkRadio>
      <SprkRadio ariaDescribedBy="radio-error-container">
        Radio Item 2
      </SprkRadio>
      <SprkRadio ariaDescribedBy="radio-error-container">
        Radio Item 3
      </SprkRadio>
      <SprkErrorContainer
        id="radio-error-container"
        message="There is an error on this field"
      />
    </SprkFieldset>
  </SprkRadioGroup>
);

invalidRadio.story = {
  name: 'Invalid',
  paramteres: {
    jest: ['SprkRadioGroup'],
  },
};

export const disabledRadio = () => (
  <SprkRadioGroup disabled>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio disabled>Radio Item 1</SprkRadio>
      <SprkRadio disabled>Radio Item 2</SprkRadio>
      <SprkRadio disabled>Radio Item 3</SprkRadio>
    </SprkFieldset>
  </SprkRadioGroup>
);

disabledRadio.story = {
  name: 'Disabled',
  paramteres: {
    jest: ['SprkRadioGroup'],
  },
};

export const huge = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio variant="huge">Radio Item 1</SprkRadio>
      <SprkRadio variant="huge">Radio Item 2</SprkRadio>
      <SprkRadio variant="huge">Radio Item 3</SprkRadio>
    </SprkFieldset>
  </SprkRadioGroup>
);

huge.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeInvalid = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio variant="huge" ariaDescribedBy="radio-error-container">
        Radio Item 1
      </SprkRadio>
      <SprkRadio variant="huge" ariaDescribedBy="radio-error-container">
        Radio Item 2
      </SprkRadio>
      <SprkRadio variant="huge" ariaDescribedBy="radio-error-container">
        Radio Item 3
      </SprkRadio>
      <SprkErrorContainer
        id="radio-error-container"
        message="There is an error on this field"
      />
    </SprkFieldset>
  </SprkRadioGroup>
);

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeDisabled = () => (
  <SprkRadioGroup variant="huge" disabled>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkRadio
        variant="huge"
        ariaDescribedBy="radio-error-container"
        disabled
      >
        Radio Item 1
      </SprkRadio>
      <SprkRadio
        variant="huge"
        ariaDescribedBy="radio-error-container"
        disabled
      >
        Radio Item 2
      </SprkRadio>
      <SprkRadio
        variant="huge"
        ariaDescribedBy="radio-error-container"
        disabled
      >
        Radio Item 3
      </SprkRadio>
    </SprkFieldset>
  </SprkRadioGroup>
);

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeLayoutTwo = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 1</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 2</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkRadioGroup>
);

hugeLayoutTwo.story = {
  name: 'Huge Layout - Two',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeLayoutFour = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 1</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 2</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 3</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 4</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkRadioGroup>
);

hugeLayoutFour.story = {
  name: 'Huge Layout - Four',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};
export const hugeLayoutFive = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 1</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 2</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 3</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 4</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack
            splitAt="small"
            itemSpacing="medium"
            additionalClasses="sprk-o-Stack--center-row "
          >
            <SprkStackItem
              additionalClasses="
                sprk-o-Stack__item--flex@s
                sprk-o-Stack__item--half@s
              "
            >
              <SprkRadio variant="huge">Radio Item 5</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkRadioGroup>
);

hugeLayoutFive.story = {
  name: 'Huge Layout - Five',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeLayoutSix = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 1</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 2</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 3</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 4</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 5</SprkRadio>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadio variant="huge">Radio Item 6</SprkRadio>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkRadioGroup>
);

hugeLayoutSix.story = {
  name: 'Huge Layout - Six',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const legacy = () => (
  <SprkSelectionInput
    groupLabel="Radio Group Label"
    choices={[
      {
        label: 'Radio Item 1',
        name: 'radio[]',
        value: 'item-1',
      },
      {
        label: 'Radio Item 2',
        name: 'radio[]',
        value: 'item-2',
      },
      {
        label: 'Radio Item 3',
        name: 'radio[]',
        value: 'item-3',
      },
    ]}
    variant="radio"
  />
);

legacy.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyInvalidRadioButton = () => (
  <SprkSelectionInput
    groupLabel="Radio Group Label"
    choices={[
      {
        label: 'Radio Item 1',
        name: 'radio[]',
        value: 'item-1',
      },
      {
        label: 'Radio Item 2',
        name: 'radio[]',
        value: 'item-2',
      },
      {
        label: 'Radio Item 3',
        name: 'radio[]',
        value: 'item-3',
      },
    ]}
    variant="radio"
    valid={false}
    errorMessage="There is an error on this field."
  />
);

legacyInvalidRadioButton.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};

export const legacyDisabledRadioButton = () => (
  <SprkSelectionInput
    groupLabel="Radio Group Label"
    choices={[
      {
        label: 'Radio Item 1',
        name: 'radio[]',
        value: 'item-1',
      },
      {
        label: 'Radio Item 2',
        name: 'radio[]',
        value: 'item-2',
      },
      {
        label: 'Radio Item 3',
        name: 'radio[]',
        value: 'item-3',
      },
    ]}
    variant="radio"
    disabled
  />
);

legacyDisabledRadioButton.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};
