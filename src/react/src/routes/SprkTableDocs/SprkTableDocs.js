import React from 'react';
import { SprkTable, SprkButton } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer heading="Column Comparison">
      <SprkTable
        additionalTableClasses="sprk-b-Table--spacing-medium"
        idString="table-1"
        columns={[
          { name: 'data1', header: 'Column Heading' },
          { name: 'data2', header: 'Column Heading' },
          { name: 'data3', header: 'Column Heading' },
        ]}
        rows={[
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
        ]}
      />
    </ExampleContainer>

    <ExampleContainer heading="Secondary Column Comparison">
      <SprkTable
        variant="secondary"
        additionalTableClasses="sprk-b-Table--spacing-medium"
        idString="table-2"
        columns={[
          { name: 'data1', header: 'Column Heading' },
          { name: 'data2', header: 'Column Heading' },
          { name: 'data3', header: 'Column Heading' },
        ]}
        rows={[
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
          { data1: 'Data 1', data2: 'Data 2', data3: 'Data 3' },
        ]}
      />
    </ExampleContainer>

    <ExampleContainer heading="Grouped Columns">
      <SprkTable
        variant="grouped"
        additionalTableClasses="sprk-b-Table--spacing-medium"
        idString="table-3"
        columns={[
          [
            { header: 'Data 1', rowspan: 2 },
            { header: 'Data 2', colspan: 3 },
            { header: 'Data 3', rowspan: 2 },
          ],
          [
            { header: 'SubHeading 1' },
            { header: 'SubHeading 2' },
            { header: 'Subheading 3' },
          ],
        ]}
        rows={[
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
          ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5'],
        ]}
      />
    </ExampleContainer>

    <ExampleContainer heading="Row Comparison">
      <SprkTable
        variant="rowComparison"
        additionalTableClasses="sprk-b-Table--spacing-medium"
        idString="table-5"
        columns={[
          { name: 'data1', header: 'Column' },
          { name: 'data2', header: 'Column' },
          { name: 'data3', header: 'Column' },
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
    </ExampleContainer>

    <ExampleContainer heading="Secondary Row Comparison">
      <SprkTable
        variant="secondaryRowComparison"
        additionalTableClasses="sprk-b-Table--spacing-medium"
        idString="table-5"
        columns={[{ name: 'data1' }, { name: 'data2' }]}
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
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkTableDocs;
