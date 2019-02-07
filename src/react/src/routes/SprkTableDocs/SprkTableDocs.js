import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkTable } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkTableDocs = () => {
  return (
    <CentralColumnLayout>
      
      <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--spacing-medium"
          idString="table-1"
          columns={[
            { header: 'Column Heading', name: 'column1'},
            { header: 'Column Heading 2', name: 'column2'},
            { header: 'Column Heading 3', name: 'column3'}
          ]}
          rows={[
            { column1: 1, column2: 'Data 1', column3: 'Data 2' },
            { column1: 2, column2: 'Data 1', column3: 'Data 2' },
            { column1: 3, column2: 'Data 1', column3: 'Data 2' },
            { column1: 4, column2: 'Data 1', column3: 'Data 2' },
            { column1: 5, column3: 'Data 2', column2: 'Data 1' }
          ]}
          >
        </SprkTable>
      </ExampleContainer>

       <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--secondary sprk-b-Table--spacing-medium"
          idString="table-2"
          columns={[
            { header: 'Column Heading', name: 'column1' },
            { header: 'Column Heading 2', name: 'column2' },
            { header: 'Column Heading 3', name: 'column3' }
          ]}
          rows={[
            { column1: 1, column2: 'Data 1', column3: 'Data 2' },
            { column1: 2, column2: 'Data 1', column3: 'Data 2' },
            { column1: 3, column2: 'Data 1', column3: 'Data 2' },
            { column1: 4, column2: 'Data 1', column3: 'Data 2' },
            { column1: 5, column3: 'Data 2', column2: 'Data 1' }
          ]}>
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--grouped-columns sprk-b-Table--spacing-medium"
          idString="table-3"
          columns={[
            { header: 'Column Heading', name: 'column1', rowspan: 2, order: 1 },
            { header: 'Column Heading 2', name: 'column2', colspan: 3 },
            { header: 'Column Heading 3', name: 'column3', rowspan: 2, order: 5 }
          ]}
          subHeadings={[
            { header: 'Subheading 1', name: 'subheading1', order: 2 },
            { header: 'Subheading 2', name: 'subheading2', order: 3 },
            { header: 'Subheading 3', name: 'subheading3', order: 4 },
          ]}
          rows={[
            { column1: 1, subheading1: 'Data 1', subheading2: 'Data 2', subheading3: 'Data 3', column3: 'Data 4' },
            { column1: 2, subheading1: 'Data 1', subheading2: 'Data 2', subheading3: 'Data 3', column3: 'Data 4' },
            { column1: 3, subheading1: 'Data 1', subheading2: 'Data 2', subheading3: 'Data 3', column3: 'Data 4' },
            { column1: 4, subheading1: 'Data 1', subheading2: 'Data 2', subheading3: 'Data 3', column3: 'Data 4' },
            { column1: 5, subheading1: 'Data 1', subheading2: 'Data 2', subheading3: 'Data 3', column3: 'Data 4' }
          ]}
          >
        </SprkTable>
      </ExampleContainer>
{/*
      <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--row-comparison sprk-b-Table--spacing-medium" 
          idString="table-4">
          <thead>
            <tr>
              <th className="sprk-b-Table__empty-heading"></th>
              <th>Column Heading</th>
              <th>Column Heading</th>
              <th>Column Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Row Heading</th>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <th>Row Heading</th>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <th>Row Heading</th>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <th>Row Heading</th>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
          </tbody>
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--secondary-row-comparison sprk-b-Table--spacing-medium" 
          idString="table-5">
          <tbody>
            <tr>
              <th>Row Heading</th>
              <td>Data</td>
              <td>Data</td>
              <td className="sprk-o-Stack sprk-o-Stack--end-column">
                <div className="sprk-o-Stack__item">
                  <button className="sprk-c-Button sprk-c-Button--secondary" type="button">Learn More</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>Row Heading</th>
              <td>Data</td>
              <td>Data</td>
              <td className="sprk-o-Stack sprk-o-Stack--end-column">
                <div className="sprk-o-Stack__item">
                  <button className="sprk-c-Button sprk-c-Button--secondary" type="button">Learn More</button>
                </div>
              </td>
            </tr>
            <tr>
              <th>Row Heading</th>
              <td>Data</td>
              <td>Data</td>
              <td className="sprk-o-Stack sprk-o-Stack--end-column">
                <div className="sprk-o-Stack__item">
                  <button className="sprk-c-Button sprk-c-Button--secondary" type="button">Learn More</button>
                </div>
              </td>
            </tr>
          </tbody>
        </SprkTable>
      </ExampleContainer> */}

    </CentralColumnLayout>
  );
}

export default SprkTableDocs;