import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-pagination-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination - 1 page
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="1"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination - 2 pages
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="2"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination - 3 pages
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="3"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination - 4 pages
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="4"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination - 5+ pages
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        [totalItems]="5"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h3 class="drizzle-b-h3">
        Note: "long" has been removed as a valid type. This should render the
        same as "default".
      </h3>
      <h2 class="drizzle-b-h2">
        Long Pagination - 1 Page
      </h2>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="1"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination - 2 Pages
      </h2>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="2"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination - 3 Pages
      </h2>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="3"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination - 4 Pages
      </h2>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="4"
        [itemsPerPage]="1"
      >
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination - 5+ Pages
      </h2>

      <sprk-pagination
        paginationType="long"
        [currentPage]="1"
        [totalItems]="5"
        [itemsPerPage]="1"
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
        (previousClick)="goBack($event, 'pager')"
        (pageClick)="goToPage($event, 'pager')"
        (nextClick)="goForward($event, 'pager')"
        idString="pagination-3"
      >
      </sprk-pagination>
    </div>
  `,
  styles: ['']
})
export class PaginationDocsComponent implements OnInit {
  constructor() {}

  totalRuns = [
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
    },
    {
      distance: 3.1,
      unit: 'miles',
      time: 21
    }
  ];

  ngOnInit() {}
}
