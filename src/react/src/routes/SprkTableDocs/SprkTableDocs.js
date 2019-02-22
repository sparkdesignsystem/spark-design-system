import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkTable, SprkButton } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => {
  return (
    <CentralColumnLayout>
      
      <ExampleContainer>
        <SprkTable 
          variant="secondaryRowComparison"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-1"
          columns={[{name: 'data1'}, {name: 'data1'}]}
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