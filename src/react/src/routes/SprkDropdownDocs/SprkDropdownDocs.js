import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';
import { SprkDropdown } from '@sparkdesignsystem/spark-core-react';

const SprkDropdownDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer heading="Base">
        <SprkDropdown choices={choices} iconType="settings" />
      </ExampleContainer>
      <ExampleContainer heading="Informational">
        <SprkDropdown variant="informational" title="My Choices" choices={informationalChoices} defaultTriggerText="Make a selection..." />
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

const informationalChoices = [
  {
    content: {
      title: 'Choice Title',
      infoLine1: 'Information about this choice',
      infoLine2: 'More Information'
    },
    value: 'Choice Title 1',
    active: false
  },
  {
    content: {
      title: 'Choice Title',
      infoLine1: 'Information about this choice',
      infoLine2: 'More Information'
    },
    value: 'Choice Title 2',
    active: true
  }
];

const choices = [
  {
    text: 'Option 1',
    value: 'Option 1'
  },
  {
    text: 'Option 2',
    value: 'Option 2'
  }
];

export default SprkDropdownDocs;
