import React from 'react';
import { SprkSelectionInput } from '@sparkdesignsystem/spark-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

function SprkSelectionInputDocs() {
  const checkBoxAndRadioChoices = [
    {
      label: 'Item 1',
      name: 'check[]',
      value: 'item-1',
    },
    {
      label: 'Item 2',
      name: 'check[]',
      value: 'item-2',
      defaultChecked: true,
    },
  ];
  const selectChoices = [
    {
      label: 'Item 1',
      name: 'check[]',
      value: 'item-1',
    },
    {
      label: 'Item 2',
      name: 'check[]',
      value: 'item-2',
    },
    {
      label: 'Grouped Options',
      options: [
        {
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
      ],
    },
    {
      label: 'Item 3',
      name: 'check[]',
      value: 'item-3',
    },
  ];

  const selectNotRequired = [
    {
      label: 'Please select...',
      name: '',
      value: '',
    },
    {
      label: 'Item 2',
      name: 'check[]',
      value: 'item-2',
    },
    {
      label: 'Item 3',
      name: 'check[]',
      value: 'item-3',
    },
  ];

  return (
    <>
      <ExampleContainer heading="Checkbox">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxAndRadioChoices}
          variant="checkbox"
        />
      </ExampleContainer>

      <ExampleContainer heading="Radio">
        <SprkSelectionInput
          groupLabel="Radio Input"
          choices={checkBoxAndRadioChoices}
          variant="radio"
        />
      </ExampleContainer>

      <ExampleContainer heading="Select">
        <SprkSelectionInput label="Select Box Label" choices={selectChoices} variant="select" />
      </ExampleContainer>

      <ExampleContainer heading="Select - Error ">
        <SprkSelectionInput
          choices={selectChoices}
          variant="select"
          label="Select Box Label"
          name="select"
          valid={false}
          errorMessage="There is an error in the field."
        />
      </ExampleContainer>

      <ExampleContainer heading="Select - Disabled ">
        <SprkSelectionInput
          choices={selectNotRequired}
          label="Select Box Label"
          variant="select"
          name="select"
          disabled
          errorMessage="There is an error in the field."
        />
      </ExampleContainer>

      <ExampleContainer heading="Select (not required)">
        <SprkSelectionInput
          choices={selectNotRequired}
          variant="select"
          label="Select Box Label"
        />
      </ExampleContainer>

      <ExampleContainer heading="Select With Helper And Default Option Of Item 2">
        <SprkSelectionInput
          choices={selectChoices}
          label="Select Box Label"
          helperText="Optional helper text."
          variant="select"
          name="select-with-helper"
          defaultValue="item-2"
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge">
        <SprkSelectionInput
          choices={selectChoices}
          name="select-huge"
          helperText="Optional helper text."
          variant="hugeSelect"
          label="Huge Select Box Label"
          defaultValue=""
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge Error">
        <SprkSelectionInput
          choices={selectChoices}
          name="select-huge"
          variant="hugeSelect"
          label="Huge Select Box Label"
          valid={false}
          errorMessage="There is an error in the field."
          defaultValue=""
        />
      </ExampleContainer>

       <ExampleContainer heading="Select Huge With Default Value Of Item 3">
         <SprkSelectionInput
           choices={selectChoices}
           helperText="Optional helper text."
           variant="hugeSelect"
           label="Huge Select Box Label"
           defaultValue="item-3"
         />
       </ExampleContainer>

       <ExampleContainer heading="Select Huge Disabled">
         <SprkSelectionInput
           choices={selectChoices}
           helperText="Optional helper text."
           variant="hugeSelect"
           label="Disabled Label"
           data-my-attr="my-test-attr"
           disabled
           defaultValue=""
         />
       </ExampleContainer>
    </>
  );
}

export default SprkSelectionInputDocs;
