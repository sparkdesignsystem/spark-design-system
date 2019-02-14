import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkTable } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => {
  return (
    <CentralColumnLayout>
      
      <ExampleContainer>
        <SprkTable 
          variant="secondaryRowComparison"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-1"
          // columns={[[{key: 'email', header: 'Email', rowspan: 2}, {key: 'name', header: 'Name', colspan: 2}, {key: 'phoneNumber', header: 'Phone Number', rowspan: 2}],[{key: 'firstName', header: 
          // 'First Name'}, {key: 'lastName', header: 'Last Name'}]]}
          columns={[{key: 'email', header: 'Email'}, {key: 'phoneNumber', header: 'Phone Number'}, {key: 'name', header: 'Name'}]}
          data={[{key: 'kg1234', rowHeading: 'Person', email: "katieguernsey@quickenloans.com", phoneNumber: '(517) 879-9637', name: 'Katie Guernsey'}]}
          >
        </SprkTable>
      </ExampleContainer>

    </CentralColumnLayout>
  );
}

export default SprkTableDocs;