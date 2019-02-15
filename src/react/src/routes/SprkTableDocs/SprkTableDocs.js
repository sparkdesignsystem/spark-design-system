import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkTable } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => {
  return (
    <CentralColumnLayout>
      
      <ExampleContainer>
        <SprkTable 
          variant="html"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-1"
          // columns={[[{key: 'email', header: 'Email', rowspan: 2}, {key: 'name', header: 'Name', colspan: 2}, {key: 'phoneNumber', header: 'Phone Number', rowspan: 2}],[{key: 'firstName', header: 
          // 'First Name'}, {key: 'lastName', header: 'Last Name'}]]}
          // columns={[{key: 'email', header: 'Email'}, {key: 'phoneNumber', header: 'Phone Number'}, {key: 'name', header: 'Name'}]}
          // data={[{key: 'kg1234', rowHeading: 'Person', email: "katie@email.com", phoneNumber: '(555) 518-6595', name: 'Katie Guernsey'}]}
          // button={{element: 'button', rest: 'href="#nogo" target="_blank"',}}
          >
          <thead>

          </thead>
          <tbody>
            
          </tbody>
        </SprkTable>
      </ExampleContainer>

    </CentralColumnLayout>
  );
}

export default SprkTableDocs;