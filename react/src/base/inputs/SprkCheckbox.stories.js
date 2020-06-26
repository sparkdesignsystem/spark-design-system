import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkErrorContainer from './SprkErrorContainer/SprkErrorContainer';
import SprkCheckboxGroup from './SprkCheckbox/SprkCheckboxGroup/SprkCheckboxGroup';
import SprkCheckboxItem from './SprkCheckbox/SprkCheckboxItem/SprkCheckboxItem';
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
      SprkCheckboxGroup,
      SprkCheckboxItem,
      SprkFieldset,
      SprkLegend,
      SprkHelperText,
      SprkSelectionInput,
    },
    jest: [
      'SprkErrorContainer',
      'SprkCheckboxGroup',
      'SprkCheckboxItem',
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
      <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
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
      <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
    </SprkFieldset>
    <SprkHelperText>
      Optional helper text, used to clarify the field&#x27;s intent
    </SprkHelperText>
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
      <SprkCheckboxItem ariaDescribedBy="checkbox-error-container">
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem ariaDescribedBy="checkbox-error-container">
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem ariaDescribedBy="checkbox-error-container">
        Checkbox Item 3
      </SprkCheckboxItem>
    </SprkFieldset>
    <SprkErrorContainer
      id="checkbox-error-container"
      message="There is an error on this field"
    />
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
      <SprkLegend disabled>Group Label Name</SprkLegend>
      <SprkCheckboxItem disabled>Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem disabled>Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem disabled>Checkbox Item 3</SprkCheckboxItem>
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
      <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

huge.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};
export const hugeHelperText = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckboxItem variant="huge">Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem variant="huge">Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem variant="huge">Checkbox Item 3</SprkCheckboxItem>
    </SprkFieldset>
    <SprkHelperText>
      Optional helper text, used to clarify the field&#x27;s intent
    </SprkHelperText>
  </SprkCheckboxGroup>
);

hugeHelperText.story = {
  name: 'Huge Helper Text',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const hugeInvalid = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Group Label Name</SprkLegend>
      <SprkCheckboxItem
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
      >
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
      >
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
      >
        Checkbox Item 3
      </SprkCheckboxItem>
    </SprkFieldset>
    <SprkErrorContainer
      id="checkbox-error-container"
      message="There is an error on this field"
    />
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
      <SprkLegend disabled>Group Label Name</SprkLegend>
      <SprkCheckboxItem
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
        disabled
      >
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
        disabled
      >
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem
        variant="huge"
        ariaDescribedBy="checkbox-error-container"
        disabled
      >
        Checkbox Item 3
      </SprkCheckboxItem>
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
              <SprkCheckboxItem variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
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
              <SprkCheckboxItem variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 3
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 4
              </SprkCheckboxItem>
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
              <SprkCheckboxItem variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 3
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 4
              </SprkCheckboxItem>
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
              <SprkCheckboxItem variant="huge">
                Checkbox Item 5
              </SprkCheckboxItem>
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
              <SprkCheckboxItem variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 3
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 4
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 5
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem variant="huge">
                Checkbox Item 6
              </SprkCheckboxItem>
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
  name: 'Legacy (Deprecated)',
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
  name: 'Legacy Invalid (Deprecated)',
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
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: ['SprkSelectionInput'],
  },
};
