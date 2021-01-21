import React from 'react';
import SprkDropdown from './SprkDropdown';
import SprkButton from '../buttons/SprkButton';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Dropdown',
  component: SprkDropdown,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    jest: ['SprkDropdown'],
    info: `
${markdownDocumentationLinkBuilder('dropdown')}
- The Dropdown should have the \`aria-haspopup="true"\`
attribute. This tells screen readers that the
element has a popup menu.
`,
  },
};

export const defaultStory = () => (
  <SprkDropdown
    screenReaderText="Description of default dropdown."
    choices={{
      choiceFunction: (choiceText) => {
        console.log(choiceText);
      },
      items: [
        {
          text: 'Option 1',
          value: 'option-1',
          element: 'a',
          href: '#nogo',
          idString: 'option-1',
        },
        {
          text: 'Option 2',
          value: 'option-2',
          href: '#nogo',
        },
      ],
    }}
    heading="My Choices"
    iconName="settings"
    iconAdditionalClasses="sprk-c-Icon--l"
  />
);

defaultStory.story = {
  name: 'Default',
};

export const informational = () => (
  <SprkDropdown
    variant="informational"
    heading="My Choices"
    choices={{
      choiceFunction: (choiceText) => {
        console.log(choiceText);
      },
      footer: (
        <SprkButton
          variant="tertiary"
          additionalClasses="sprk-c-Button--compact"
          onClick={() => {
            console.log('Clicked!');
          }}
        >
          Go Elsewhere
        </SprkButton>
      ),
      items: [
        {
          content: {
            title: 'Choice Title 1',
            infoLine1: 'Information about this choice',
            infoLine2: 'More Information',
          },
          value: 'choice-title-1',
          isActive: false,
          href: '#nogo',
        },
        {
          content: {
            title: 'Choice Title 2',
            infoLine1: 'Information about this choice',
            infoLine2: 'More Information',
          },
          value: 'choice-title-2',
          isActive: false,
          href: '#nogo',
        },
      ],
    }}
    defaultTriggerText="Make a selection..."
  />
);
