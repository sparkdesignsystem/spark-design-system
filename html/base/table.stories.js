import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Table',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('table')}
    `,
    docs: { iframeHeight: 380 },
  },
};

export const columnComparison = () =>
  `<div class="sprk-b-TableContainer" data-id="table-1">
    <table class="sprk-b-Table sprk-b-Table--spacing-medium">
      <thead>
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
    </table>
  </div>`;

export const secondary = () =>
  `<div class="sprk-b-TableContainer" data-id="table-2">
    <table 
      class="
        sprk-b-Table 
        sprk-b-Table--secondary 
        sprk-b-Table--spacing-medium
      ">
      <thead>
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
    </table>
  </div>`;

export const groupedColumns = () =>
  `<div class="sprk-b-TableContainer" data-id="table-3">
    <table 
      class="
        sprk-b-Table 
        sprk-b-Table--grouped-columns 
        sprk-b-Table--spacing-medium
      ">
      <thead>
        <tr>
          <th rowspan="2">Column Heading</th>
          <th colspan="3">Column Heading</th>
          <th rowspan="2">Column Heading</th>
        </tr>
        <tr>
          <th class="sprk-b-Table--grouped-column">SubHeading</th>
          <th class="sprk-b-Table--grouped-column">SubHeading</th>
          <th class="sprk-b-Table--grouped-column">SubHeading</th>
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
    </table>
  </div>`;

export const rowComparison = () =>
  `<div class="sprk-b-TableContainer" data-id="table-4">
    <table 
      class="
        sprk-b-Table 
        sprk-b-Table--row-comparison 
        sprk-b-Table--spacing-medium
      ">
      <thead>
        <tr>
          <th class="sprk-b-Table__empty-heading"></th>
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
    </table>
  </div>`;

export const secondaryRowComparison = () =>
  `<div class="sprk-b-TableContainer" data-id="table-5">
    <table 
      class="
        sprk-b-Table 
        sprk-b-Table--secondary-row-comparison 
        sprk-b-Table--spacing-medium
      ">
      <tbody>
        <tr>
          <th>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td class="sprk-o-Stack sprk-o-Stack--end-column">
            <div class="sprk-o-Stack__item">
              <button 
                class="
                  sprk-c-Button 
                  sprk-c-Button--secondary
                " 
                type="button">Learn More</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td class="sprk-o-Stack sprk-o-Stack--end-column">
            <div class="sprk-o-Stack__item">
              <button 
                class="
                  sprk-c-Button 
                  sprk-c-Button--secondary
                " 
                type="button">Learn More</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td class="sprk-o-Stack sprk-o-Stack--end-column">
            <div class="sprk-o-Stack__item">
              <button 
                class="
                  sprk-c-Button 
                  sprk-c-Button--secondary
                " 
                type="button">Learn More</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`;
