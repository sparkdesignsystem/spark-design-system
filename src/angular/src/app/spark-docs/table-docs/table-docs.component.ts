import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tables-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Column Comparison
      </h2>

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
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Grouped Columns
      </h2>

      <sprk-table idString="table-2">
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
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Row Comparison
      </h2>

      <sprk-table idString="table-3">
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
    </div>
`,
  styles: ['']
})
export class TableDocsComponent {
  constructor() {}
}
