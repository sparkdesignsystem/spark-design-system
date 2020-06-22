import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import SprkCheckboxGroup from './SprkCheckboxGroup/SprkCheckboxGroup';
import SprkCheckbox from './SprkCheckbox/SprkCheckbox';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkCheckboxGroup,
  parameters: {
    subcomponents: {
      SprkCheckbox,
      SprkCheckboxGroup,
      SprkFieldset,
      SprkLegend,
      SprkHelperText,
      SprkSelectionInput,
    },
    jest: [
      'SprkErrorContainer',
      'SprkCheckboxGroup',
      'SprkCheckbox',
      'SprkFieldset',
      'SprkLegend',
      'SprkHelperText',
    ],
    info: `
    ${markdownDocumentationLinkBuilder('input')}
- Spark checkboxes have been refactored into a compositional style component.
The version that uses <SprkSelectionInput> will be permanently removed
in our Fall 2020 release.
- To update to the new version, replace checkboxes implemented by
the <code>SprkSelectionInput</code> component with our
new implementation using <code>SprkCheckboxGroup</code>
and <code>SprkCheckbox</code> components.
    `,
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

export const defaultHelperText = () => (
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

defaultHelperText.story = {
  name: 'Default Helper Text',
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

export const hugeInvalid = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox variant="huge" ariaDescribedBy="checkbox-error-container">
        Checkbox Item 1
      </SprkCheckbox>
      <SprkCheckbox variant="huge" ariaDescribedBy="checkbox-error-container">
        Checkbox Item 2
      </SprkCheckbox>
      <SprkCheckbox variant="huge" ariaDescribedBy="checkbox-error-container">
        Checkbox Item 3
      </SprkCheckbox>
      <SprkErrorContainer
        id="checkbox-error-container"
        message="There is an error on this field"
      />
    </SprkFieldset>
  </SprkCheckboxGroup>
);

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const hugeDisabled = () => (
  <SprkCheckboxGroup variant="huge" disabled>
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckbox
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
        disabled
      >
        Checkbox Item 1
      </SprkCheckbox>
      <SprkCheckbox
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
        disabled
      >
        Checkbox Item 2
      </SprkCheckbox>
      <SprkCheckbox
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
        disabled
      >
        Checkbox Item 3
      </SprkCheckbox>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const hugeLayoutTwo = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 1</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 2</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

hugeLayoutTwo.story = {
  name: 'Huge Layout - Two',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const hugeLayoutFour = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 1</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 2</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 3</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 4</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

hugeLayoutFour.story = {
  name: 'Huge Layout - Four',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};
export const hugeLayoutFive = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 1</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 2</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 3</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 4</SprkCheckbox>
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
              <SprkCheckbox variant="huge">Checkbox Item 5</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

hugeLayoutFive.story = {
  name: 'Huge Layout - Five',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const hugeLayoutSix = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 1</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 2</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 3</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 4</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 5</SprkCheckbox>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckbox variant="huge">Checkbox Item 6</SprkCheckbox>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
      </SprkStack>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

hugeLayoutSix.story = {
  name: 'Huge Layout - Six',
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
