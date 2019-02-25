import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkTable, SprkButton } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => {
  return (
    <CentralColumnLayout>

      <ExampleContainer heading="Column Comparison">
        <SprkTable 
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-1"
          columns={[{name: 'data1', header: 'Column Heading'}, {name: 'data2', header: 'Column Heading'}, {name: 'data3', header: 'Column Heading'}, ]}
          data={[
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
          ]}
          >
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer heading="Secondary Column Comparison">
        <SprkTable
          variant="secondary" 
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-2"
          columns={[{name: 'data1', header: 'Column Heading'}, {name: 'data2', header: 'Column Heading'}, {name: 'data3', header: 'Column Heading'}, ]}
          data={[
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3"},
          ]}
          >
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer heading="Grouped Columns">
        <SprkTable
          variant="grouped"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-3"
          columns={[
            [{name: 'data1', header: 'Data 1', rowspan: 2}, {name: 'data3', header: 'Data 3', colspan: 3}, {name: 'data2', header: 'Data 2', rowspan: 2}],
            [{name: 'data4', header: 'SubHeading 1'}, {name: 'data5', header: 'SubHeading 2'}, {name: 'data6', header: 'Subheading 3'}]
          ]}
          data={[
            {data1: "Data 1", data2: "Data 2",  data3: "Data 3", data4: 'Data 4', data5: 'Data 5'},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: 'Data 4', data5: 'Data 5'},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: 'Data 4', data5: 'Data 5'},
            {data1: "Data 1", data2: "Data 2", data3: "Data 3", data4: 'Data 4', data5: 'Data 5'},
          ]}
        >

        </SprkTable>
      </ExampleContainer>
      
      <ExampleContainer heading="Row Comparison">
        <SprkTable 
          variant="rowComparison"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-5"
          columns={[{name: 'data1', header: "Column"}, {name: 'data2', header: 'Column'}, {name: "data3", header: 'Column'}]}
          data={[
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", data3: "Data"},
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", data3: "Data"},
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", data3: "Data"},
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", data3: "Data"},
          ]}
          >
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer heading="Secondary Row Comparison">
        <SprkTable 
          variant="secondaryRowComparison"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-5"
          columns={[{name: 'data1'}, {name: 'data2'}]}
          data={[
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", button: <SprkButton variant="secondary">Learn More</SprkButton> },
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", button: <SprkButton variant="secondary">Learn More</SprkButton> },
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", button: <SprkButton variant="secondary">Learn More</SprkButton> },
            {rowHeading: 'Row Heading', data1: "Data", data2: "Data", button: <SprkButton variant="secondary">Learn More</SprkButton> },
          ]}
          >
        </SprkTable>
      </ExampleContainer>

    </CentralColumnLayout>
  );
}

export default SprkTableDocs;