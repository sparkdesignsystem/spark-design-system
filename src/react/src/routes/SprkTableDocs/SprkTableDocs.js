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