import React from 'react';
import { Link } from 'react-router-dom';
import { SprkButton, SprkDropdown } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const informationalChoices = {
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
      Placeholder
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
    },
    {
      element: Link,
      content: {
        title: 'Choice Title 2',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information',
      },
      to: '/button',
      value: 'choice-title-2',
      isActive: true,
    },
  ],
};

const choices = {
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
    },
    {
      text: 'Option 2',
      value: 'option-2',
      element: Link,
      to: '/link',
    },
    {
      text: 'Option 3',
      value: 'option-3',
    },
  ],
};

const SprkDropdownDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer heading="Base">
      <SprkDropdown choices={choices} iconName="settings" />
    </ExampleContainer>
    <ExampleContainer heading="Informational">
      <SprkDropdown
        variant="informational"
        title="My Choices"
        choices={informationalChoices}
        defaultTriggerText="Make a selection..."
      />
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkDropdownDocs;
