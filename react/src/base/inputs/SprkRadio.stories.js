import React from 'react';
import SprkSelectionInput from './SprkSelectionInput/SprkSelectionInput';
import SprkRadioGroup from './SprkRadio/SprkRadioGroup/SprkRadioGroup';
import SprkRadioItem from './SprkRadio/SprkRadioItem/SprkRadioItem';
import SprkFieldset from './SprkFieldset/SprkFieldset';
import SprkLegend from './SprkLegend/SprkLegend';
import SprkHelperText from './SprkHelperText/SprkHelperText';
import SprkStack from '../../objects/stack/SprkStack';
import SprkStackItem from '../../objects/stack/components/SprkStackItem/SprkStackItem';
import SprkFieldError from './SprkFieldError/SprkFieldError';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Radio',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkRadioGroup,
  parameters: {
    subcomponents: {
      SprkRadioGroup,
      SprkRadioItem,
      SprkFieldset,
      SprkLegend,
      SprkHelperText,
      SprkSelectionInput,
    },
    jest: [
      'SprkFieldError',
      'SprkIcon',
      'SprkRadioGroup',
      'SprkRadio',
      'SprkFieldset',
      'SprkLegend',
      'SprkHelperText',
    ],
    info: `
    ${markdownDocumentationLinkBuilder('input')}
- Spark radios have been refactored into a compositional style component.
To update to the new version, replace radios implemented by
the <code>SprkSelectionInput</code> component with our
new implementation using <code>SprkRadioGroup</code>
and <code>SprkRadioItem</code> components.
    `,
  },
};

export const defaultStory = () => (
  <SprkRadioGroup>
    <SprkFieldset>
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio">Radio Item 1</SprkRadioItem>
      <SprkRadioItem name="radio">Radio Item 2</SprkRadioItem>
      <SprkRadioItem name="radio">Radio Item 3</SprkRadioItem>
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
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio">Radio Item 1</SprkRadioItem>
      <SprkRadioItem name="radio">Radio Item 2</SprkRadioItem>
      <SprkRadioItem name="radio">Radio Item 3</SprkRadioItem>
    </SprkFieldset>

    <SprkHelperText id="radio-helper-text">
      Optional helper text, used to clarify the field&apos;s intent.
    </SprkHelperText>
  </SprkRadioGroup>
);

defaultHelperText.story = {
  name: 'Default Helper Text',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const invalidRadioButton = () => (
  <SprkRadioGroup>
    <SprkFieldset ariaDescribedBy="invalid-radio">
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio">Radio Item 1</SprkRadioItem>
      <SprkRadioItem name="radio">Radio Item 2</SprkRadioItem>
      <SprkRadioItem name="radio">Radio Item 3</SprkRadioItem>
    </SprkFieldset>
    <SprkFieldError id="invalid-radio">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkRadioGroup>
);

invalidRadioButton.story = {
  name: 'Invalid',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const disabledRadioButton = () => (
  <SprkRadioGroup>
    <SprkFieldset>
      <SprkLegend isDisabled>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio" isDisabled>
        Radio Item 1
      </SprkRadioItem>
      <SprkRadioItem name="radio" isDisabled>
        Radio Item 2
      </SprkRadioItem>
      <SprkRadioItem name="radio" isDisabled>
        Radio Item 3
      </SprkRadioItem>
    </SprkFieldset>
  </SprkRadioGroup>
);

disabledRadioButton.story = {
  name: 'Disabled',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const huge = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 1
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 2
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 3
      </SprkRadioItem>
    </SprkFieldset>
  </SprkRadioGroup>
);

huge.story = {
  name: 'Huge',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeHelperText = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset ariaDescribedBy="huge-radio-helper-text">
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 1
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 2
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 3
      </SprkRadioItem>
    </SprkFieldset>
    <SprkHelperText id="huge-radio-helper-text">
      Optional helper text, used to clarify the field&#x27;s intent.
    </SprkHelperText>
  </SprkRadioGroup>
);

hugeHelperText.story = {
  name: 'Huge Helper Text',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeInvalid = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset ariaDescribedBy="invalid-huge-radio">
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 1
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 2
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge">
        Radio Item 3
      </SprkRadioItem>
    </SprkFieldset>
    <SprkFieldError id="invalid-huge-radio">
      <SprkIcon
        iconName="exclamation-filled"
        additionalClasses="sprk-b-ErrorIcon"
        aria-hidden="true"
      />
      <div className="sprk-b-ErrorText">There is an error on this field.</div>
    </SprkFieldError>
  </SprkRadioGroup>
);

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: ['SprkRadioGroup'],
  },
};

export const hugeDisabled = () => (
  <SprkRadioGroup variant="huge">
    <SprkFieldset>
      <SprkLegend isDisabled>Radio Group Label</SprkLegend>
      <SprkRadioItem name="radio" variant="huge" isDisabled>
        Radio Item 1
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge" isDisabled>
        Radio Item 2
      </SprkRadioItem>
      <SprkRadioItem name="radio" variant="huge" isDisabled>
        Radio Item 3
      </SprkRadioItem>
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
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 1
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 2
              </SprkRadioItem>
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
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 1
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 2
              </SprkRadioItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 3
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 4
              </SprkRadioItem>
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
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 1
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 2
              </SprkRadioItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 3
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 4
              </SprkRadioItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack
            splitAt="small"
            itemSpacing="medium"
            additionalClasses="sprk-o-Stack--center-row"
          >
            <SprkStackItem
              additionalClasses="
                sprk-o-Stack__item--half@s
              "
            >
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 5
              </SprkRadioItem>
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
      <SprkLegend>Radio Group Label</SprkLegend>
      <SprkStack itemSpacing="medium">
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 1
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 2
              </SprkRadioItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 3
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 4
              </SprkRadioItem>
            </SprkStackItem>
          </SprkStack>
        </SprkStackItem>
        <SprkStackItem>
          <SprkStack splitAt="small" itemSpacing="medium">
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 5
              </SprkRadioItem>
            </SprkStackItem>
            <SprkStackItem additionalClasses="sprk-o-Stack__item--flex@s">
              <SprkRadioItem name="radio" variant="huge">
                Radio Item 6
              </SprkRadioItem>
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
