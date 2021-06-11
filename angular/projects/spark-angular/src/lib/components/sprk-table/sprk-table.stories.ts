import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkTableModule } from './sprk-table.module';
import { SprkTableComponent } from './sprk-table.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkTableEmptyHeadingDirective } from '../../directives/sprk-table-empty-heading/sprk-table-empty-heading.directive';
import { SprkTableHeadDirective } from '../../directives/sprk-table-head/sprk-table-head.directive';
import { SprkTableGroupedColumnDirective } from '../../directives/sprk-table-grouped-column/sprk-table-grouped-column.directive';
import { SprkTableRowHeadingDirective } from '../../directives/sprk-table-row-heading/sprk-table-row-heading.directive';

export default {
  title: 'Components/Table',
  component: SprkTableComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkTableEmptyHeadingDirective,
      SprkTableHeadDirective,
      SprkTableGroupedColumnDirective,
      SprkTableRowHeadingDirective,
    },
    info: `${markdownDocumentationLinkBuilder('table')}`,
    docs: { iframeHeight: 380 },
  },
};

const modules = {
  imports: [SprkTableModule],
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

columnComparison.parameters = {
  jest: ['sprk-table.component', 'sprk-table-head.directive'],
};

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

secondary.parameters = {
  jest: ['sprk-table.component', 'sprk-table-head.directive'],
};

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

groupedColumns.parameters = {
  jest: [
    'sprk-table.component',
    'sprk-table-head.directive',
    'sprk-table-grouped-column.directive',
  ],
};

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

rowComparison.parameters = {
  jest: [
    'sprk-table.component',
    'sprk-table-head.directive',
    'sprk-table-row-heading.directive',
    'sprk-table-empty-heading.directive',
  ],
};

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

secondaryRowComparison.parameters = {
  jest: [
    'sprk-table.component',
    'sprk-table-head.directive',
    'sprk-table-row-heading.directive',
  ],
};
