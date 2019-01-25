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
          idString="table-1">
          <thead className="sprk-b-Table__head">
            <tr>
              <th>Column Heading</th>
              <th>Column Heading</th>
              <th>Column Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
          </tbody>
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--secondary sprk-b-Table--spacing-medium"
          idString="table-2">
          <thead className="sprk-b-Table__head">
            <tr>
              <th>Column Heading</th>
              <th>Column Heading</th>
              <th>Column Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
            </tr>
          </tbody>
        </SprkTable>
      </ExampleContainer>

      <ExampleContainer>
        <SprkTable 
          additionalTableClasses="sprk-b-Table--grouped-columns sprk-b-Table--spacing-medium"
          idString="table-3">
          <thead className="sprk-b-Table__head">
            <tr>
              <th rowSpan="2">Column Heading</th>
              <th colSpan="3">Column Heading</th>
              <th rowSpan="2">Column Heading</th>
            </tr>
            <tr>
              <th className="sprk-b-Table--grouped-column">SubHeading</th>
              <th className="sprk-b-Table--grouped-column">SubHeading</th>
              <th className="sprk-b-Table--grouped-column">SubHeading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
              <td>Data 5</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
              <td>Data 5</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
              <td>Data 5</td>
            </tr>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
              <td>Data 5</td>
            </tr>
          </tbody>
        </SprkTable>
      </ExampleContainer>

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
      </ExampleContainer>

    </CentralColumnLayout>
  );
}

export default SprkTableDocs;