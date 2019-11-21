import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTableModule } from './sprk-table.module';
import { SprkTableComponent } from './sprk-table.component';
import { markdownLinkBuilder } from '../../../../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Table',
  component: SprkTableComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: markdownLinkBuilder('table'),
    docs: { iframeHeight: 380 },
  },
};

const modules = {
  imports: [
    SprkTableModule,
  ],
};

export const columnComparison = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-table idString="table-1">
      <thead sprkTableHead>
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
    </sprk-table>
  `,
});

export const secondary = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-table
      idString="table-2"
      additionalTableClasses="sprk-b-Table--secondary"
    >
      <thead sprkTableHead>
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
    </sprk-table>
  `,
});

export const groupedColumns = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-table idString="table-3">
      <thead sprkTableHead>
        <tr>
          <th rowspan="2">Column Heading</th>
          <th colspan="3">Column Heading</th>
          <th rowspan="2">Column Heading</th>
        </tr>
        <tr>
          <th sprkTableGroupedColumn>SubHeading</th>
          <th sprkTableGroupedColumn>SubHeading</th>
          <th sprkTableGroupedColumn>SubHeading</th>
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
    </sprk-table>
  `,
});

export const rowComparison = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-table idString="table-4">
      <thead sprkTableHead>
        <tr>
          <th sprkTableEmptyHeading></th>
          <th>Column Heading</th>
          <th>Column Heading</th>
          <th>Column Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
      </tbody>
    </sprk-table>
  `,
});

export const secondaryRowComparison = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-table idString="table-5">
      <tbody>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td class="sprk-o-Stack sprk-o-Stack--end-column">
            <div class="sprk-o-Stack__item">
              <button
                class="sprk-c-Button sprk-c-Button--secondary"
                type="button"
              >
                Learn More
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td class="sprk-o-Stack sprk-o-Stack--end-column">
            <div class="sprk-o-Stack__item">
              <button
                class="sprk-c-Button sprk-c-Button--secondary"
                type="button"
              >
                Learn More
              </button>
            </div>
          </td>
        </tr>
        <tr>
          <th sprkTableRowHeading>Row Heading</th>
          <td>Data</td>
          <td>Data</td>
          <td class="sprk-o-Stack sprk-o-Stack--end-column">
            <div class="sprk-o-Stack__item">
              <button
                class="sprk-c-Button sprk-c-Button--secondary"
                type="button"
              >
                Learn More
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </sprk-table>
  `,
});
