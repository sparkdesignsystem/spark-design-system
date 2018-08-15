import { Component, OnInit } from '@angular/core';

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

      <ul class="drizzle-b-List">
        <li class="sprk-u-mbm" *ngFor="let run of pagedItems">
          <h3 class="drizzle-b-h3">Run #: {{ totalRuns.indexOf(run) + 1 }}</h3>
          <h3 class="drizzle-b-h3">Distance: {{ run.distance }} {{ run.unit }}</h3>
          <h3 class="drizzle-b-h3">Time: {{ runTime(run.time) }}</h3>
        </li>
      </ul>

      <sprk-pagination
        additionalClasses="sprk-u-mbl"
        paginationType="long"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="longConfig[0].currentPage"
        [totalItems]="longConfig[0].totalItems"
        [itemsPerPage]="longConfig[0].itemsPerPage"
        (previousClick)="goBack($event)"
        (pageClick)="goToPage($event)"
        (nextClick)="goForward($event)">
      </sprk-pagination>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Pager
      </h2>

      <ul class="drizzle-b-List">
        <li class="sprk-u-mbm" *ngFor="let run of pagedItems">
          <h3 class="drizzle-b-h3">Run #: {{ totalRuns.indexOf(run) + 1 }}</h3>
          <h3 class="drizzle-b-h3">Distance: {{ run.distance }} {{ run.unit }}</h3>
          <h3 class="drizzle-b-h3">Time: {{ runTime(run.time) }}</h3>
        </li>
      </ul>

      <sprk-pagination
        paginationType="pager"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="longConfig[0].currentPage"
        [totalItems]="longConfig[0].totalItems"
        [itemsPerPage]="longConfig[0].itemsPerPage"
        (previousClick)="goBack($event)"
        (pageClick)="goToPage($event)"
        (nextClick)="goForward($event)">
      </sprk-pagination>
    </div>
  `,
  styles: ['']
})

export class PaginationDocsComponent implements OnInit {
  private pagedItems: any[];

  constructor() {
  }

  totalRuns = [
    {
      'distance': 6,
      'unit': 'miles',
      'time': '60'
    },
    {
      'distance': 8,
      'unit': 'miles',
      'time': '81'
    },
    {
      'distance': 4,
      'unit': 'miles',
      'time': '32'
    },
    {
      'distance': 20,
      'unit': 'miles',
      'time': '180'
    },
    {
      'distance': 10,
      'unit': 'miles',
      'time': '90'
    }
  ]

  longConfig = [
    {
      'currentPage': 1,
      'totalItems': this.totalRuns.length,
      'itemsPerPage': 1
    },
  ]

  runTime(time) {
    if (time > 0 && time / 60 < 1) {
      return time + ' Minutes';
     } else {
       return time / 60 + ' Hour(s)';
     }
  }

  goBack(event) {
    event.preventDefault();
    this.showItemsLong(event);
  }

  goForward(event) {
    event.preventDefault();
    this.showItemsLong(event);
  }

  goToPage(event) {
    event.preventDefault();
    this.showItemsLong(event);
  }

  showItemsLong(event) {
    let currentPageNum: number;
    // If there was no click event
    if (event == null) {
      currentPageNum = this.longConfig[0].currentPage;
    }
    let startIndex = (currentPageNum - 1) * this.longConfig[0].itemsPerPage;
    let endIndex = Math.min(startIndex + this.longConfig[0].itemsPerPage - 1, this.longConfig[0].totalItems - 1);
    return this.pagedItems = this.totalRuns.slice(startIndex, endIndex + 1);
  }

  ngOnInit() {
    this.showItemsLong(null);
  }
}
