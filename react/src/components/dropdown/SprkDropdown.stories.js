import React from 'react';
import SprkDropdown from './SprkDropdown';
import SprkButton from '../buttons/SprkButton';

export default {
  title: 'Components/Dropdown',
  component: SprkDropdown,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkDropdown'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/dropdown)
    `,
  },
};

export const defaultStory = () => (
  <SprkDropdown
    screenReaderText="Description of default dropdown."
    choices={{
      choiceFunction: choiceText => {
        console.log(choiceText);
      },
      items: [
        {
          text: 'Option 1',
          value: 'option-1',
          element: 'a',
          href: '/link',
          target: '_blank',
          idString: 'option-1',
        },
        // TODO - when we build knobs, make sure this story demos multiple kinds of dropdown items
        // {
        //   text: 'Option 2',
        //   value: 'option-2',
        //   element: Link,
        //   to: '/link',
        // },
        {
          text: 'Option 2',
          value: 'option-2',
        },
      ],
    }}
    iconName="settings"
  />
);

defaultStory.story = {
  name: 'Default',
};

export const informational = () => (
  <SprkDropdown
    variant="informational"
    title="My Choices"
    choices={{
      choiceFunction: choiceText => {
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
            title: 'Choice Title',
            infoLine1: 'Information about this choice',
            infoLine2: 'More Information',
          },
          value: 'choice-title-1',
          isActive: false,
        },
        // TODO - when we build knobs, make sure this story demos multiple kinds of dropdown items
        // {
        //   element: Link,
        //   content: {
        //     title: 'Choice Title',
        //     infoLine1: 'Information about this choice',
        //     infoLine2: 'More Information',
        //   },
        //   to: '/button',
        //   value: 'choice-title-2',
        //   isActive: true,
        // },
      ],
    }}
    defaultTriggerText="Make a selection..."
  />
);
