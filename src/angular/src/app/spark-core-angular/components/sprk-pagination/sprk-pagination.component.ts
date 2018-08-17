import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'sprk-pagination',
  template: `
    <nav aria-label="Pagination Navigation" [ngClass]="getClasses()" *ngIf="paginationType === 'default'">
      <sprk-list listType="bare" additionalClasses="sprk-c-Pagination">
        <li class="sprk-c-Pagination__item">
          <a
            (click)="goBack($event, currentPage)"
            [ngClass]="{ 'sprk-b-Link': true, 'sprk-b-Link--standalone': true, 'sprk-b-Link--disabled': currentPage === 1 }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkPrev">
            {{ prevLinkText }}
          </a>
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--current':currentPage === 1}">
          <a
            (click)="goToPage($event, 1)"
            class="sprk-b-Link sprk-b-Link--standalone"
            href="#"
            [attr.data-analytics]="analyticsStringFirstLink"
            [attr.aria-current]="currentPage === 1"
            aria-label="Page 1">
            1
          </a>
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--current': currentPage === 2}">
          <a
            (click)="goToPage($event, 2)"
            class="sprk-b-Link sprk-b-Link--standalone"
            href="#"
            [attr.data-analytics]="analyticsStringSecondLink"
            [attr.aria-current]="currentPage === 2"
            aria-label="Page 2">
            2
          </a>
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--current':currentPage === 3}">
          <a
            (click)="goToPage($event, 3)"
            class="sprk-b-Link sprk-b-Link--standalone"
            href="#"
            [attr.data-analytics]="analyticsStringThirdLink"
            [attr.aria-current]="currentPage === 3"
            aria-label="Page 3">
            3
          </a>
        </li>

        <li class="sprk-c-Pagination__item">
          <a
            (click)="goForward($event, currentPage)"
            [ngClass]="{ 'sprk-b-Link': true, 'sprk-b-Link--standalone': true, 'sprk-b-Link--disabled': isLastPage() || currentPage === isLastPage() - 1 }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkNext">
            {{ nextLinkText }}
          </a>
        </li>
      </sprk-list>
    </nav>

    <nav aria-label="Pagination Navigation" [ngClass]="getClasses()" *ngIf="paginationType === 'long'">
      <sprk-list listType="bare" additionalClasses="sprk-c-Pagination">
        <li class="sprk-c-Pagination__item sprk-c-Pagination__item--long">
          <a
            (click)="goBack($event, currentPage)"
            [ngClass]="{ 'sprk-b-Link': true, 'sprk-b-Link--standalone': true, 'sprk-b-Link--disabled': currentPage === 1 }"
            href="#">
            {{ prevLinkText }}
          </a>
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--long': true, 'sprk-u-Display--none': currentPage === 1}">
          <a
            (click)="goToPage($event, 1)"
            class="sprk-b-Link sprk-b-Link--standalone"
            href="#"
            [attr.data-analytics]="analyticsStringFirstLink"
            attr.aria-label="Page 1">
            1
          </a>
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--long': true, 'sprk-u-Display--none': currentPage === 1 || currentPage === 2 }">
          ...
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--long': true, 'sprk-c-Pagination__item--current': true}">
          <a
            (click)="goToPage($event, currentPage)"
            class="sprk-b-Link sprk-b-Link--standalone"
            href="#"
            aria-current="true"
            [attr.data-analytics]="analyticsStringSecondLink"
            attr.aria-label="Page {{ currentPage }}">
            {{ currentPage }}
          </a>
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--long': true, 'sprk-u-Display--none': currentPage === totalPages() || currentPage === (totalPages() - 1) }">
          ...
        </li>

        <li
          [ngClass]="{'sprk-c-Pagination__item': true, 'sprk-c-Pagination__item--long': true, 'sprk-u-Display--none': currentPage === totalPages()}">
          <a
            (click)="goToPage($event, totalPages())"
            class="sprk-b-Link sprk-b-Link--standalone"
            href="#"
            [attr.data-analytics]="analyticsStringThirdLink"
            attr.aria-label="Page {{ totalPages() }}">
            {{ totalPages() }}
          </a>
        </li>

        <li class="sprk-c-Pagination__item sprk-c-Pagination__item--long">
          <a
            (click)="goForward($event, currentPage)"
            [ngClass]="{ 'sprk-b-Link': true, 'sprk-b-Link--standalone': true, 'sprk-b-Link--disabled': isLastPage() || currentPage === isLastPage() - 1 }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkNext">
            {{ nextLinkText }}
          </a>
        </li>
      </sprk-list>
    </nav>

    <nav aria-label="Pagination Navigation" [ngClass]="getClasses()" *ngIf="paginationType === 'pager'">
      <sprk-list listType="bare" additionalClasses="sprk-c-Pagination">
        <li class="sprk-c-Pagination__item">
          <a
            (click)="goBack($event, currentPage)"
            [ngClass]="{ 'sprk-b-Link': true, 'sprk-b-Link--standalone': true, 'sprk-b-Link--disabled': currentPage === 1 }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkPrev">
            {{ prevLinkText }}
          </a>
        </li>

        <li class="sprk-c-Pagination__item">
          <a
            (click)="goForward($event, currentPage)"
            [ngClass]="{ 'sprk-b-Link': true, 'sprk-b-Link--standalone': true, 'sprk-b-Link--disabled': isLastPage() || currentPage === isLastPage() - 1 }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkNext">
            {{ nextLinkText }}
          </a>
        </li>
      </sprk-list>
    </nav>
  `,
  styles: ['']
})
export class SparkPaginationComponent {
  @Input() paginationType: string = 'default'; // default, long, pager
  @Input() nextLinkText: string = 'Next'; // Text to display for next link
  @Input() prevLinkText: string = 'Prev'; // Text to display for previous link
  @Input() currentPage: number = 1; // The currently active page
  @Input() totalItems: number; // Total number of items
  @Input() itemsPerPage: number; // Total number of items to show per page
  @Input() analyticsStringFirstLink: string;
  @Input() analyticsStringSecondLink: string;
  @Input() analyticsStringThirdLink: string;
  @Input() analyticsStringLinkNext: string;
  @Input() analyticsStringLinkPrev: string;
  @Input() additionalClasses: string;

  // Will be emitted to the parent component on the click event
  @Output() previousClick = new EventEmitter();
  @Output() nextClick = new EventEmitter();
  @Output() pageClick = new EventEmitter<object>();

  goToPage(event, page): void {
    event.preventDefault();
    // Update currentPage to new selected page
    this.currentPage = page;
    // Emit out click event and page when clicked
    this.pageClick.emit({event, page});
  }

  goBack(event, page): void {
    event.preventDefault();
    if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
    this.previousClick.emit({event, page});
  }

  goForward(event, page): void {
    event.preventDefault();
    if (this.currentPage < this.totalPages()) this.currentPage = this.currentPage + 1;
    this.nextClick.emit({event, page});
  }

  // Returns total # of
  // pages based on total # of
  // items & desired # of items to show per page
  totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Returns true if currently on the last page
  isLastPage(): boolean {
    return this.currentPage === this.totalPages();
  }

  getClasses(): string {
    let classArray: Array<String> = [
      ''
    ];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }
  constructor(public ref: ElementRef) {}
}
