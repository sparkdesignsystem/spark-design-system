import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkTable from './SprkTable';
import SprkButton from '../../../components/buttons/react/SprkButton';

storiesOf('Base|Tables', module)
  .add('Column Comparison', () => (
    <SprkTable
      additionalTableClasses="sprk-b-Table--spacing-medium"
      idString="table-1"
      columns={
        [
          {
            name: 'data1',
            header: 'Column Heading',
          },
          {
            name: 'data2',
            header: 'Column Heading',
          },
          {
            name: 'data3',
            header: 'Column Heading',
          },
        ]
      }
      rows={[{
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      ]}
    />
  ))
  .add('Secondary', () => (
    <SprkTable
      variant="secondary"
      additionalTableClasses="sprk-b-Table--spacing-medium"
      idString="table-2"
      columns={[{
        name: 'data1',
        header: 'Column Heading',
      },
      {
        name: 'data2',
        header: 'Column Heading',
      },
      {
        name: 'data3',
        header: 'Column Heading',
      },
      ]}
      rows={[{
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
      ]}
    />
  ))
  .add('Grouped Columns', () => (
    <SprkTable
      variant="grouped"
      additionalTableClasses="sprk-b-Table--spacing-medium"
      idString="table-3"
      columns={[
        [{
          header: 'Column Heading',
          rowspan: 2,
        },
        {
          header: 'Column Heading',
          colspan: 3,
        },
        {
          header: 'Column Heading',
          rowspan: 2,
        },
        ],
        [{
          header: 'SubHeading',
        },
        {
          header: 'SubHeading',
        },
        {
          header: 'Subheading',
        },
        ],
      ]}
      rows={[
        ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
        ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
        ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
        ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
      ]}
    />
  ))
  .add('Row Comparison', () => (
    <SprkTable
      variant="rowComparison"
      additionalTableClasses="sprk-b-Table--spacing-medium"
      idString="table-5"
      columns={[{
        name: 'data1',
        header: 'Column',
      },
      {
        name: 'data2',
        header: 'Column',
      },
      {
        name: 'data3',
        header: 'Column',
      },
      ]}
      rows={[{
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        data3: 'Data',
      },
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        data3: 'Data',
      },
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        data3: 'Data',
      },
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        data3: 'Data',
      },
      ]}
    />
  ))
  .add('Secondary Row Comparison', () => (
    <SprkTable
      variant="secondaryRowComparison"
      additionalTableClasses="sprk-b-Table--spacing-medium"
      idString="table-5"
      columns={[{
        name: 'data1',
      },
      {
        name: 'data2',
      },
      ]}
      rows={[{
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        button: <SprkButton variant="secondary">Learn More</SprkButton>,
      },
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        button: <SprkButton variant="secondary">Learn More</SprkButton>,
      },
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        button: <SprkButton variant="secondary">Learn More</SprkButton>,
      },
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        button: <SprkButton variant="secondary">Learn More</SprkButton>,
      },
      ]}
    />
  ));
