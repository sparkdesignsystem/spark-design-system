import React from 'react';
import { SprkSelectionInput } from '@sparkdesignsystem/spark-react';
import ExampleContainer from '../../../containers/ExampleContainer/ExampleContainer';

function SprkSelectionInputDocs() {
  const radioChoices = [
    {
      label: 'Radio Item 1',
      name: 'radio-input',
      value: 'item-1',
      defaultChecked: true,
    },
    {
      label: 'Radio Item 2',
      name: 'radio-input',
      value: 'item-2',
    },
  ];

  const radioChoices1 = [
    {
      label: 'Radio Item 1',
      name: 'radio-input-1',
      value: 'item-1',
      defaultChecked: true,
    },
    {
      label: 'Radio Item 2',
      name: 'radio-input-1',
      value: 'item-2',
    },
  ];

  const checkBoxChoices = [
    {
      label: 'Checkbox Item 1',
      name: 'checkbox-input',
      value: 'item-1',
    },
    {
      label: 'Checkbox Item 2',
      name: 'checkbox-input',
      value: 'item-2',
      defaultChecked: true,
    },
  ];

  const checkBoxChoicesOnChange = [
    {
      label: 'Checkbox Item 1',
      name: 'checkbox-input',
      value: 'item-1',
      onChange: () => {
        console.log('item 1 onChange handler');
      },
    },
    {
      label: 'Checkbox Item 2',
      name: 'checkbox-input',
      value: 'item-2',
      defaultChecked: true,
    },
  ];

  const selectChoices = [
    {
      label: 'Item 1',
      value: 'item-1',
    },
    {
      label: 'Item 2',
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
          label: 'Option 2 With A Longer Label',
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
      value: 'item-3',
    },
  ];

  const selectNotRequired = [
    {
      label: 'Please select...',
      value: '',
    },
    {
      label: 'Item 2',
      value: 'item-2',
    },
    {
      label: 'Item 3',
      value: 'item-3',
    },
  ];

  return (
    <>
      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Checkbox</h1>

      <ExampleContainer heading="Checkbox">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoices}
          variant="checkbox"
          name="checkbox-input"
        />
      </ExampleContainer>

      <ExampleContainer heading="Checkbox With onChange">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoicesOnChange}
          variant="checkbox"
          name="checkbox-input"
        />
      </ExampleContainer>

      <ExampleContainer heading="Checkbox - Error">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoices}
          variant="checkbox"
          name="checkbox-input"
          valid={false}
          errorMessage="There is an error on this field."
        />
      </ExampleContainer>

      <ExampleContainer heading="Checkbox - Disabled">
        <SprkSelectionInput
          groupLabel="Checkbox Input"
          choices={checkBoxChoices}
          variant="checkbox"
          name="checkbox-input"
          disabled
        />
      </ExampleContainer>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Radio</h1>

      <ExampleContainer>
        <SprkSelectionInput
          groupLabel="Legend Label"
          choices={radioChoices1}
          variant="radio"
          name="radio-input"
        />
      </ExampleContainer>

      <ExampleContainer heading="Radio - Disabled">
        <SprkSelectionInput
          groupLabel="Radio Input Disabled"
          choices={radioChoices}
          variant="radio"
          name="radio-input"
          disabled
        />
      </ExampleContainer>

      <ExampleContainer heading="Radio - Error">
        <SprkSelectionInput
          groupLabel="Radio Error"
          choices={radioChoices}
          variant="radio"
          name="radio-input"
          valid={false}
          errorMessage="There is an error on this field."
        />
      </ExampleContainer>

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Select Box</h1>

      <ExampleContainer>
        <SprkSelectionInput
          label="Select Box Label"
          choices={selectChoices}
          variant="select"
        />
      </ExampleContainer>

      <ExampleContainer heading="Select - Error ">
        <SprkSelectionInput
          choices={selectChoices}
          variant="select"
          label="Select Box Label"
          name="select-error"
          valid={false}
          errorMessage="There is an error in the field."
        />
      </ExampleContainer>

      <ExampleContainer heading="Select - Disabled ">
        <SprkSelectionInput
          choices={selectNotRequired}
          label="Select Box Label"
          variant="select"
          name="select-disabled"
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

      <h1 className="sprk-b-TypeDisplayTwo sprk-u-mbm">Select Huge</h1>

      <ExampleContainer>
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
          name="select-huge-error"
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
          name="select-huge-default-value"
          variant="hugeSelect"
          label="Huge Select Box Label"
          defaultValue="item-3"
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge With Value Of Item 2">
        <SprkSelectionInput
          choices={selectChoices}
          helperText="Optional helper text."
          variant="hugeSelect"
          label="Huge Select Box Label"
          name="select-huge-value"
          value="item-2"
          onChangeFunc={() => {
            console.log('test function');
          }}
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge Disabled">
        <SprkSelectionInput
          choices={selectChoices}
          helperText="Optional helper text."
          name="select-huge-disabled"
          variant="hugeSelect"
          label="Disabled Label"
          data-my-attr="my-test-attr"
          disabled
          defaultValue=""
        />
      </ExampleContainer>

      <ExampleContainer heading="Select Huge With Blank First Option">
        <SprkSelectionInput
          choices={selectChoices}
          helperText="Optional helper text."
          variant="hugeSelect"
          name="select-huge-blank-first-option"
          label="Huge Select Box"
          data-my-attr="my-test-attr"
          defaultValue=""
          hasBlankFirstOption
        />
      </ExampleContainer>
    </>
  );
}

export default SprkSelectionInputDocs;
