import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkDropdown } from '@sparkdesignsystem/spark-core-react';
import { Link } from 'react-router-dom';

const SprkDropdownDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base">
        <SprkDropdown choiceFunction={choiceFunction} choices={choices} iconType="settings" />
      </ExampleContainer>
      <ExampleContainer heading="Informational">
        <SprkDropdown
          variant="informational"
          title="My Choices"
          choices={informationalChoices}
          choiceFunction={choiceFunction}
          defaultTriggerText="Make a selection..." />
      </ExampleContainer>
    </CentralColumnLayout>
  );
};


const choiceFunction = (choiceText) => {console.log(choiceText);}

const informationalChoices = [
  {
    content: {
      title: 'Choice Title 1',
      infoLine1: 'Information about this choice',
      infoLine2: 'More Information'
    },
    value: 'choice-title-1',
    active: false
  },
  {
    content: {
      title: 'Choice Title 2',
      infoLine1: 'Information about this choice',
      infoLine2: 'More Information'
    },
    value: 'choice-title-2',
    active: true
  }
];

const choices = [
  {
    text: 'Option 1',
    value: 'option-1',
    element: 'a',
    href: '/link',
    target: '_blank'
  },
  {
    text: 'Option 2',
    value: 'option-2',
    element: Link,
    to: '/link'
  },
  {
    text: 'Option 3',
    value: 'option-3'
  }
];

export default SprkDropdownDocs;
