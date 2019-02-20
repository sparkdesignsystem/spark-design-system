import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkTable } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => {
  return (
    <CentralColumnLayout>
      
      <ExampleContainer>
        <SprkTable 
          variant="grouped"
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-1"
          columns={[[{name: 'email', header: 'Email', rowspan: 2}, {name: 'name', header: 'Name', colspan: 2}, {name: 'phoneNumber', header: 'Phone Number', rowspan: 2}],[{name: 'firstName', header: 
          'First Name'}, {name: 'lastName', header: 'Last Name'}]]}
          // columns={[{key: 'email', header: 'Email'}, {key: 'phoneNumber', header: 'Phone Number'}, {key: 'name', header: 'Name'}]}
          data={[{rowHeading: 'Person', email: "katie@email.com", phoneNumber: '(555) 518-6595', firstName: 'Katie', lastName: 'Guernsey'}]}
          // button={{element: 'button', rest: 'href="#nogo" target="_blank"',}}
          >
        </SprkTable>
      </ExampleContainer>

    </CentralColumnLayout>
  );
}

export default SprkTableDocs;