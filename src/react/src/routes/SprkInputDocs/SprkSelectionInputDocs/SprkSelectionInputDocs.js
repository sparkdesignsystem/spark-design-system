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
      ],
    },
  ];

  return (
    <React.Fragment>
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
        <SprkSelectionInput choices={selectChoices} variant="select" />
      </ExampleContainer>

      <ExampleContainer heading="Select With Helper And Default Option Of Item 2">
        <SprkSelectionInput
          choices={selectChoices}
          helperText="Optional helper text."
          variant="select"
          defaultValue="item-2"
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge">
        <SprkSelectionInput
          choices={selectChoices}
          helperText="Optional helper text."
          variant="hugeSelect"
          label="Huge Select Box Label"
          defaultValue=""
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge With Default Value">
        <SprkSelectionInput
          choices={selectChoices}
          helperText="Optional helper text."
          variant="hugeSelect"
          label="Huge Select Box Label"
          defaultValue="item-1"
        />
      </ExampleContainer>
    </React.Fragment>
  );
}

export default SprkSelectionInputDocs;
