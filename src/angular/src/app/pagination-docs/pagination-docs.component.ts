import { Component } from '@angular/core';

@Component({
  selector: 'sprk-pagination-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination
      </h2>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        nextLinkText="Next"
        prevLinkText="Prev"
        [totalItems]="3"
        [itemsPerPage]="1"
        (previousClick)="goBack($event)"
        (pageClick)="goToPage($event)"
        (nextClick)="goForward($event)">
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination
      </h2>

      <sprk-pagination
        additionalClasses="sprk-u-mbl"
        paginationType="long"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="5"
        [totalItems]="200"
        [itemsPerPage]="10"
        (previousClick)="goBack($event)"
        (pageClick)="goToPage($event)"
        (nextClick)="goForward($event)">
      </sprk-pagination>

      <sprk-pagination
        paginationType="long"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="1"
        [totalItems]="20"
        [itemsPerPage]="5"
        (previousClick)="goBack($event)"
        (pageClick)="goToPage($event)"
        (nextClick)="goForward($event)">
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Pager
      </h2>

      <sprk-pagination
        paginationType="pager"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="1"
        [totalItems]="2"
        [itemsPerPage]="1"
        (previousClick)="goBack($event)"
        (pageClick)="goToPage($event)"
        (nextClick)="goForward($event)">
      </sprk-pagination>
    </div>
  `,
  styles: ['']
})

export class PaginationDocsComponent {
  constructor() { }

  goBack(event) {
    event.preventDefault();
  }

  goForward(event) {
    event.preventDefault();
  }

  goToPage(event) {
    event.preventDefault();
  }
}
