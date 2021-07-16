import React from 'react';
import SprkTable from './SprkTable';
import SprkButton from '../../components/buttons/SprkButton';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Table',
  component: SprkTable,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkTable'],
    info: `${markdownDocumentationLinkBuilder('table')}`,
  },
};

export const columnComparison = () => (
  <SprkTable
    additionalTableClasses="sprk-b-Table--spacing-medium"
    idString="table-1"
    columns={[
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
    ]}
    rows={[
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
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
    ]}
  />
);

columnComparison.story = {
  name: 'Column Comparison',
};

export const secondary = () => (
  <SprkTable
    variant="secondary"
    additionalTableClasses="sprk-b-Table--spacing-medium"
    idString="table-2"
    columns={[
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
    ]}
    rows={[
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
      {
        data1: 'Data 1',
        data2: 'Data 2',
        data3: 'Data 3',
      },
    ]}
  />
);

secondary.story = {
  name: 'Secondary',
};

export const groupedColumns = () => (
  <SprkTable
    variant="grouped"
    additionalTableClasses="sprk-b-Table--spacing-medium"
    idString="table-3"
    columns={[
      [
        {
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
      [
        {
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
);

groupedColumns.story = {
  name: 'Grouped Columns',
};

export const rowComparison = () => (
  <SprkTable
    variant="rowComparison"
    additionalTableClasses="sprk-b-Table--spacing-medium"
    idString="table-5"
    columns={[
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
    ]}
    rows={[
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
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        data3: 'Data',
      },
    ]}
  />
);

rowComparison.story = {
  name: 'Row Comparison',
};

export const secondaryRowComparison = () => (
  <SprkTable
    variant="secondaryRowComparison"
    additionalTableClasses="sprk-b-Table--spacing-medium"
    idString="table-5"
    columns={[
      {
        name: 'data1',
      },
      {
        name: 'data2',
      },
    ]}
    rows={[
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
      {
        rowHeading: 'Row Heading',
        data1: 'Data',
        data2: 'Data',
        button: <SprkButton variant="secondary">Learn More</SprkButton>,
      },
    ]}
  />
);

secondaryRowComparison.story = {
  name: 'Secondary Row Comparison',
};
