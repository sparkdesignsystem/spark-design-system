import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  isValidPhone,
  isValidDate,
  formatDate,
  formatPhone,
  isValidMonetary,
  formatSSN,
  isValidSSN,
} from '@sparkdesignsystem/spark/es5/sparkExports';
import {
  SprkTextInput,
  SprkRevealInput,
  SprkSelectionInput,
  SprkDatePickerInput,
} from '@sparkdesignsystem/spark-react';
import { Box } from '../../../../.storybook/story-layout';

storiesOf('Inputs', module)
  .add('text input', () => (
    <Box>
      <SprkTextInput
        label="Text Input Label"
        name="text-input-label"
      />
    </Box>
  ))
  .add('huge text input', () => (
    <Box>
      <SprkTextInput
        type="hugeTextInput"
        label="Text Input Label"
        name="text-input-label"
      />
    </Box>
  ))
  .add('checkboxes', () => (
    <Box>
      <SprkSelectionInput
        groupLabel="Checkbox Input"
        choices={[
          {
            label: 'Checkbox Item 1',
            name: 'check[]',
            value: 'item-1',
          },
          {
            label: 'Checkbox Item 2',
            name: 'check[]',
            value: 'item-2',
          },
          {
            label: 'Checkbox Item 3',
            name: 'check[]',
            value: 'item-2',
          },
        ]}
        variant="checkbox"
      />
    </Box>
  ))
  .add('radio buttons', () => (
    <Box>
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
            value: 'item-2',
          },
        ]}
        variant="radio"
      />
    </Box>
  ))
  .add('select', () => (
    <Box>
      <SprkSelectionInput
        choices={[
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
          {
            label: 'Grouped Options',
            options: [
              {
                label: 'Grouped Option 1',
                value: 'grouped-option-1',
              },
              {
                label: 'Grouped Option 2',
                value: 'grouped-option-2',
              },
              {
                label: 'Grouped Option 3',
                value: 'grouped-option-3',
              },
            ],
          },
        ]}
        name="name"
        variant="select"
      />
    </Box>
  ))
  .add('textarea', () => (
    <Box>
      <SprkTextInput
        label="Description"
        name="description"
        type="textarea"
      />
    </Box>
  ))
  .add('ssn input', () => (
    <Box>
      <SprkRevealInput
        label="Social Security Number"
        toggleLabel="Show SSN"
        name="ssn"
      />
    </Box>
  ))
  .add('search input', () => (
    <Box>
      <SprkTextInput
        label="Search"
        name="Search"
        placeholder="Search"
      />
    </Box>
  ))
  .add('inline search input', () => (
    <Box>
      <SprkTextInput
        leadingIcon="search"
        hiddenLabel
        name="InlineSearch"
        placeholder="Search"
      />
    </Box>
  ))
  .add('monetary input', () => (
    <Box>
      <SprkTextInput
        label="Payment"
        textIcon
        name="monetary"
        placeholder="0.00"
      />
    </Box>
  ))
  .add('password input', () => (
    <Box>
      <SprkRevealInput
        label="Password"
        toggleLabel="Show Password"
        name="password-1"
      />
    </Box>
  ))
  .add('helper text', () => (
    <Box>
      <SprkRevealInput
        label="Password"
        toggleLabel="Show Password"
        name="password-1"
      />
    </Box>
  ))
  .add('phone number input', () => (
    <Box>
      <SprkTextInput
        label="Phone Number"
        name="phone"
        placeholder="(000) 000-0000"
        errorMessage="Incorrect phone number."
      />
    </Box>
  ))
  .add('date input', () => (
    <Box>
      <SprkTextInput
        label="Date"
        name="date"
        placeholder="01/01/2019"
        errorMessage="Incorrect date."
      />
    </Box>
  ))
  .add('date picker', () => (
    <Box>
      <SprkDatePickerInput
        label="Date"
        name="date"
        placeholder="01/01/2019"
        errorMessage="Incorrect date."
      />
    </Box>
  ));
