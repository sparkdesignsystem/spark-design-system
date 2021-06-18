import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkCheckboxGroup from './SprkCheckbox/SprkCheckboxGroup/SprkCheckboxGroup';
import SprkCheckboxItem from './SprkCheckbox/SprkCheckboxItem/SprkCheckboxItem';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import SprkCheckboxRecreate from './SprkCheckboxRecreate';

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
      'SprkFieldError',
      'SprkIcon',
      'SprkCheckboxGroup',
      'SprkCheckboxItem',
      'SprkFieldset',
      'SprkLegend',
      'SprkHelperText',
    ],
    info: `
    ${markdownDocumentationLinkBuilder('input')}
- Spark checkboxes have been refactored into a compositional style component.
To update to the new version, replace checkboxes implemented with our
new implementation using <code>SprkCheckboxGroup</code>
and <code>SprkCheckboxItem</code> components.
- Use <code>SprkCheckboxGroup</code>, <code>SprkFieldset</code>,
and <code>SprkLegend</code> to group together all related choices.
    `,
  },
};
export const recreate = () => <SprkCheckboxRecreate />;

export const defaultStory = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend>Checkbox Group Label</SprkLegend>
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
    <SprkFieldset ariaDescribedBy="checkbox-helper-text">
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
    </SprkFieldset>
    <SprkHelperText id="checkbox-helper-text">
      Optional helper text, used to clarify the field&apos;s intent.
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
    <SprkFieldset ariaDescribedBy="invalid-checkbox">
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem>Checkbox Item 1</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 2</SprkCheckboxItem>
      <SprkCheckboxItem>Checkbox Item 3</SprkCheckboxItem>
    </SprkFieldset>
    <SprkFieldError id="invalid-checkbox">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkCheckboxGroup>
);

invalidCheckbox.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const disabledCheckbox = () => (
  <SprkCheckboxGroup>
    <SprkFieldset>
      <SprkLegend isDisabled>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem name="checkboxName" isDisabled>
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" isDisabled>
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" isDisabled>
        Checkbox Item 3
      </SprkCheckboxItem>
    </SprkFieldset>
  </SprkCheckboxGroup>
);

disabledCheckbox.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const huge = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 3
      </SprkCheckboxItem>
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
    <SprkFieldset ariaDescribedBy="huge-checkbox-helper-text">
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 3
      </SprkCheckboxItem>
    </SprkFieldset>
    <SprkHelperText id="huge-checkbox-helper-text">
      Optional helper text, used to clarify the field&apos;s intent.
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
    <SprkFieldset ariaDescribedBy="invalid-huge-checkbox">
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge">
        Checkbox Item 3
      </SprkCheckboxItem>
    </SprkFieldset>
    <SprkFieldError id="invalid-huge-checkbox">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkCheckboxGroup>
);

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkCheckboxGroup'],
  },
};

export const hugeDisabled = () => (
  <SprkCheckboxGroup variant="huge">
    <SprkFieldset>
      <SprkLegend isDisabled>Checkbox Group Label</SprkLegend>
      <SprkCheckboxItem name="checkboxName" variant="huge" isDisabled>
        Checkbox Item 1
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge" isDisabled>
        Checkbox Item 2
      </SprkCheckboxItem>
      <SprkCheckboxItem name="checkboxName" variant="huge" isDisabled>
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
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
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
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 3
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
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
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 3
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
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
            <SprkStackItem additionalClasses="sprk-o-Stack__item--half@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
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
      <SprkLegend>Checkbox Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 1
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 2
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 3
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 4
              </SprkCheckboxItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
                Checkbox Item 5
              </SprkCheckboxItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkCheckboxItem name="checkboxName" variant="huge">
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
    groupLabel="Checkbox Group Label"
    choices={[
      {
        label: 'Legacy Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Legacy Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Legacy Checkbox Item 3',
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
    groupLabel="Checkbox Group Label"
    choices={[
      {
        label: 'Legacy Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Legacy Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Legacy Checkbox Item 3',
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
    groupLabel="Checkbox Group Label"
    choices={[
      {
        label: 'Legacy Checkbox Item 1',
        name: 'check[]',
        value: 'item-1',
      },
      {
        label: 'Legacy Checkbox Item 2',
        name: 'check[]',
        value: 'item-2',
      },
      {
        label: 'Legacy Checkbox Item 3',
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
