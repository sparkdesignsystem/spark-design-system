import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-pagination-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Default Pagination
      </h2>

      <h2 class="drizzle-b-h2 sprk-u-AbsoluteCenter">
        Runs
      </h2>

      <ul class="drizzle-b-List sprk-u-AbsoluteCenter">
        <li class="sprk-u-mbm" *ngFor="let run of pagedItemsDefault">
          <h3 class="drizzle-b-h3">Run #: {{ totalRunsDefault.indexOf(run) + 1 }}</h3>
          <h3 class="drizzle-b-h3">Distance: {{ run.distance }} {{ run.unit }}</h3>
          <h3 class="drizzle-b-h3">Time: {{ runTime(run.time) }}</h3>
        </li>
      </ul>

      <sprk-pagination
        paginationType="default"
        [currentPage]="1"
        nextLinkText="Next"
        prevLinkText="Prev"
        [totalItems]="3"
        [itemsPerPage]="1"
        (previousClick)="goBack($event, 'default')"
        (pageClick)="goToPage($event, 'default')"
        (nextClick)="goForward($event, 'default')">
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Long Pagination
      </h2>

      <h2 class="drizzle-b-h2 sprk-u-AbsoluteCenter">
        Runs
      </h2>

      <div class="sprk-u-AbsoluteCenter">
        <ul class="drizzle-b-List">
          <li class="sprk-u-mbm" *ngFor="let run of pagedItems">
            <h3 class="drizzle-b-h3">Run #: {{ totalRuns.indexOf(run) + 1 }}</h3>
            <h3 class="drizzle-b-h3">Distance: {{ run.distance }} {{ run.unit }}</h3>
            <h3 class="drizzle-b-h3">Time: {{ runTime(run.time) }}</h3>
          </li>
        </ul>
      </div>

      <sprk-pagination
        additionalClasses="sprk-u-mbl"
        paginationType="long"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="longConfig[0].currentPage"
        [totalItems]="longConfig[0].totalItems"
        [itemsPerPage]="longConfig[0].itemsPerPage"
        (previousClick)="goBack($event, 'long')"
        (pageClick)="goToPage($event, 'long')"
        (nextClick)="goForward($event, 'long')">
      </sprk-pagination>
    </div>

    <sprk-divider additionalClasses="sprk-u-mbh"></sprk-divider>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Pager
      </h2>

      <h2 class="drizzle-b-h2 sprk-u-AbsoluteCenter">
        Runs
      </h2>

      <div class="sprk-u-AbsoluteCenter">
        <ul class="drizzle-b-List">
          <li class="sprk-u-mbm" *ngFor="let run of pagedItemsPager">
            <h3 class="drizzle-b-h3">Run #: {{ totalRunsDefault.indexOf(run) + 1 }}</h3>
            <h3 class="drizzle-b-h3">Distance: {{ run.distance }} {{ run.unit }}</h3>
            <h3 class="drizzle-b-h3">Time: {{ runTime(run.time) }}</h3>
          </li>
        </ul>
      </div>

      <sprk-pagination
        paginationType="pager"
        nextLinkText="Next"
        prevLinkText="Prev"
        [currentPage]="defaultConfig[0].currentPage"
        [totalItems]="defaultConfig[0].totalItems"
        [itemsPerPage]="defaultConfig[0].itemsPerPage"
        (previousClick)="goBack($event, 'pager')"
        (pageClick)="goToPage($event, 'pager')"
        (nextClick)="goForward($event, 'pager')">
      </sprk-pagination>
    </div>
  `,
  styles: ['']
})
export class PaginationDocsComponent implements OnInit {
  private pagedItems: any[];
  private pagedItemsDefault: any[];
  private pagedItemsPager: any[];

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

  longConfig = [
    {
      currentPage: 1,
      totalItems: this.totalRuns.length,
      itemsPerPage: 2
    }
  ];

  totalRunsDefault = this.totalRuns.slice(2);

  defaultConfig = [
    {
      currentPage: 1,
      totalItems: this.totalRunsDefault.length,
      itemsPerPage: 1
    }
  ];

  runTime(time) {
    time = parseFloat(time);
    if (time > 0 && time / 60 < 1) {
      return time + ' Minutes';
    } else {
      time = time / 60;
      return time.toFixed(2) + ' Hour(s)';
    }
  }

  goBack(event, type) {
    if (type === 'long') {
      this.showItemsGoBack(event, this.longConfig[0], this.totalRuns, type);
    } else {
      this.showItemsGoBack(
        event,
        this.defaultConfig[0],
        this.totalRunsDefault,
        type
      );
    }
  }

  goForward(event, type) {
    if (type === 'long') {
      this.showItemsGoForward(event, this.longConfig[0], this.totalRuns, type);
    } else {
      this.showItemsGoForward(
        event,
        this.defaultConfig[0],
        this.totalRunsDefault,
        type
      );
    }
  }

  goToPage(event, type) {
    if (type === 'long') {
      this.showItems(event, this.longConfig[0], this.totalRuns, type);
    } else {
      this.showItems(event, this.defaultConfig[0], this.totalRunsDefault, type);
    }
  }

  pageNum(event, config) {
    let currentPageNum: number;
    if (event === null) {
      return (currentPageNum = config.currentPage);
    } else {
      return (currentPageNum = event.page);
    }
  }

  showItems(event, config, data, type) {
    const startIndex = (this.pageNum(event, config) - 1) * config.itemsPerPage;
    const endIndex = Math.min(
      startIndex + config.itemsPerPage - 1,
      config.totalItems - 1
    );
    // Return new array with data item(s) to show per page
    if (type === 'long') {
      return (this.pagedItems = data.slice(startIndex, endIndex + 1));
    } else if (type === 'default') {
      return (this.pagedItemsDefault = data.slice(startIndex, endIndex + 1));
    } else {
      return (this.pagedItemsPager = data.slice(startIndex, endIndex + 1));
    }
  }

  showItemsGoBack(event, config, data, type) {
    const startIndex = (this.pageNum(event, config) - 2) * config.itemsPerPage;
    const endIndex = Math.min(
      startIndex + config.itemsPerPage - 1,
      config.totalItems - 1
    );
    if (type === 'long') {
      return (this.pagedItems = data.slice(startIndex, endIndex + 1));
    } else if (type === 'default') {
      return (this.pagedItemsDefault = data.slice(startIndex, endIndex + 1));
    } else {
      return (this.pagedItemsPager = data.slice(startIndex, endIndex + 1));
    }
  }

  showItemsGoForward(event, config, data, type) {
    const startIndex = this.pageNum(event, config) * config.itemsPerPage;
    const endIndex = Math.min(
      startIndex + config.itemsPerPage - 1,
      config.totalItems - 1
    );
    if (type === 'long') {
      return (this.pagedItems = data.slice(startIndex, endIndex + 1));
    } else if (type === 'default') {
      return (this.pagedItemsDefault = data.slice(startIndex, endIndex + 1));
    } else {
      return (this.pagedItemsPager = data.slice(startIndex, endIndex + 1));
    }
  }

  ngOnInit() {
    // Setup pagination on init
    this.showItems(null, this.longConfig[0], this.totalRuns, 'long');
    this.showItems(
      null,
      this.defaultConfig[0],
      this.totalRunsDefault,
      'default'
    );
    this.showItems(null, this.defaultConfig[0], this.totalRunsDefault, 'pager');
  }
}
