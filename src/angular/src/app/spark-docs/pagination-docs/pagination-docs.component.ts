import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-pagination-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Use Case
      </h2>
      <div class="sprk-u-AbsoluteCenter">
        <div class="sprk-u-Width-80 sprk-u-mbl">
          <sprk-table>
            <thead sprkTableHead>
              <tr>
                <th>#</th>
                <th>Distance</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="
                  let run of runConfig.data.slice(
                    (runConfig.currentPage - 1) * runConfig.itemsPerPage,
                    (runConfig.currentPage - 1) * runConfig.itemsPerPage +
                      runConfig.itemsPerPage
                  )
                "
              >
                <td>{{ runConfig.data.indexOf(run) + 1 }}</td>
                <td>{{ run.distance }} {{ run.unit }}</td>
                <td>{{ runTime(run.time) }}</td>
              </tr>
            </tbody>
          </sprk-table>
        </div>
      </div>

      <sprk-pagination
        [currentPage]="runConfig.currentPage"
        [totalItems]="runConfig.data.length"
        [itemsPerPage]="runConfig.itemsPerPage"
        (nextClick)="this.runConfig.currentPage = $event.newPage"
        (previousClick)="this.runConfig.currentPage = $event.newPage"
        (pageClick)="this.runConfig.currentPage = $event.page"
      >
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination with 1-5 pages
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="1"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="2"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="3"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="4"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="5"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination with 1-5 pages
      </h2>
      <p class="sprk-u-mbm">
        Note: "long" has been removed as a valid type. This should render the
        same as "default".
      </p>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="1"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="2"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="3"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="4"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="5"
        [itemsPerPage]="1"
        additionalClasses="sprk-u-mbm"
      >
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Pager
      </h2>

      <sprk-pagination
        paginationType="pager"
        [currentPage]="1"
        [totalItems]="3"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Minimum Configuration
      </h2>

      <sprk-pagination></sprk-pagination>
    </div>
  `,
  styles: ['']
})
export class PaginationDocsComponent implements OnInit {
  constructor() {}

  runConfig = {
    currentPage: 1,
    itemsPerPage: 3,
    pageStartIndex: 0,
    pageEndIndex: 3,
    data: [
      {
        distance: 6,
        unit: 'miles',
        time: 60
      },
      {
        distance: 8,
        unit: 'miles',
        time: 81
      },
      {
        distance: 4,
        unit: 'miles',
        time: 32
      },
      {
        distance: 20,
        unit: 'miles',
        time: 180
      },
      {
        distance: 10,
        unit: 'miles',
        time: 90
      },
      {
        distance: 9.65,
        unit: 'miles',
        time: 89
      },
      {
        distance: 50,
        unit: 'miles',
        time: 568
      },
      {
        distance: 26.2,
        unit: 'miles',
        time: 208
      }
    ]
  };

  runTime(time) {
    time = parseFloat(time);
    if (time > 0 && time / 60 < 1) {
      return time + ' Minutes';
    } else {
      time = time / 60;
      return time.toFixed(2) + ' Hour(s)';
    }
  }

  ngOnInit() {}
}
