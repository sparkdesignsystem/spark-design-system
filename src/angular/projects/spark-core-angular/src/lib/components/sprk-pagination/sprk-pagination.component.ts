import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'sprk-pagination',
  template: `
    <nav
      aria-label="Pagination Navigation"
      [ngClass]="getClasses()"
      *ngIf="paginationType === 'default'"
      [attr.data-id]="idString"
    >
      <sprk-unordered-list
        listType="horizontal"
        additionalClasses="sprk-c-Pagination sprk-o-HorizontalList--spacing-medium"
      >
        <li>
          <a
            (click)="goBack($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__icon': true,
              'sprk-b-Link': true,
              'sprk-b-Link--disabled': currentPage === 1,
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkPrev"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon iconType="chevron-left"></sprk-icon>
          </a>
        </li>

        <li>
          <a
            (click)="goToPage($event, 1)"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-c-Pagination__link--current': currentPage === 1,
              'sprk-b-Link': true,
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringFirstLink"
            [attr.aria-current]="currentPage === 1"
            aria-label="Page 1"
          >
            1
          </a>
        </li>

        <li>
          <a
            (click)="goToPage($event, 2)"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-c-Pagination__link--current': currentPage === 2,
              'sprk-b-Link': true,
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringSecondLink"
            [attr.aria-current]="currentPage === 2"
            aria-label="Page 2"
          >
            2
          </a>
        </li>

        <li>
          <a
            (click)="goToPage($event, 3)"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-c-Pagination__link--current': currentPage === 3,
              'sprk-b-Link': true,
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringThirdLink"
            [attr.aria-current]="currentPage === 3"
            aria-label="Page 3"
          >
            3
          </a>
        </li>

        <li>
          <a
            (click)="goForward($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__icon': true,
              'sprk-b-Link': true,
              'sprk-b-Link--disabled': isLastPage(),
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkNext"
          >
            <span class="sprk-u-ScreenReaderText">{{ nextLinkText }}</span>
            <sprk-icon iconType="chevron-right"></sprk-icon>
          </a>
        </li>
      </sprk-unordered-list>
    </nav>

    <nav
      aria-label="Pagination Navigation"
      [ngClass]="getClasses()"
      *ngIf="paginationType === 'long'"
      [attr.data-id]="idString"
    >
      <sprk-unordered-list
        listType="horizontal"
        additionalClasses="sprk-c-Pagination sprk-o-HorizontalList--spacing-small"
      >
        <li>
          <a
            (click)="goBack($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__icon': true,
              'sprk-b-Link': true,
              'sprk-b-Link--disabled': currentPage === 1,
              'sprk-b-Link--plain': true
            }"
            href="#"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon iconType="chevron-left"></sprk-icon>
          </a>
        </li>

        <li>
          <a
            (click)="goToPage($event, 1)"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-b-Link': true,
              'sprk-c-Pagination__link--current': currentPage === 1,
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringFirstLink"
            aria-label="Page 1"
          >
            1
          </a>
        </li>

        <li
          [ngClass]="{
            'sprk-u-Display--none': currentPage === 1 || currentPage === 2
          }"
        >
          ...
        </li>

        <li
          [ngClass]="{
            'sprk-u-Display--none':
              currentPage === 1 || currentPage === totalPages()
          }"
        >
          <a
            (click)="goToPage($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-b-Link': true,
              'sprk-c-Pagination__link--current': true,
              'sprk-b-Link--plain': true
            }"
            href="#"
            aria-current="true"
            [attr.data-analytics]="analyticsStringSecondLink"
            attr.aria-label="Page {{ currentPage }}"
          >
            {{ currentPage }}
          </a>
        </li>

        <li
          [ngClass]="{
            'sprk-u-Display--none':
              currentPage === totalPages() || currentPage === totalPages() - 1
          }"
        >
          ...
        </li>

        <li>
          <a
            (click)="goToPage($event, totalPages())"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-b-Link': true,
              'sprk-c-Pagination__link--current': currentPage === totalPages(),
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringThirdLink"
            attr.aria-label="Page {{ totalPages() }}"
          >
            {{ totalPages() }}
          </a>
        </li>

        <li>
          <a
            (click)="goForward($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__icon': true,
              'sprk-b-Link': true,
              'sprk-b-Link--disabled': isLastPage(),
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkNext"
          >
            <span class="sprk-u-ScreenReaderText">Next</span>
            <sprk-icon iconType="chevron-right"></sprk-icon>
          </a>
        </li>
      </sprk-unordered-list>
    </nav>

    <nav
      aria-label="Pagination Navigation"
      [ngClass]="getClasses()"
      *ngIf="paginationType === 'pager'"
      [attr.data-id]="idString"
    >
      <sprk-unordered-list
        listType="horizontal"
        additionalClasses="sprk-c-Pagination sprk-o-HorizontalList--spacing-large"
      >
        <li class="sprk-c-Pagination__item">
          <a
            (click)="goBack($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__icon': true,
              'sprk-b-Link': true,
              'sprk-b-Link--standalone': true,
              'sprk-b-Link--disabled': currentPage === 1,
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkPrev"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon iconType="chevron-left"></sprk-icon>
          </a>
        </li>

        <li class="sprk-c-Pagination__item">
          <a
            (click)="goForward($event, currentPage)"
            [ngClass]="{
              'sprk-c-Pagination__icon': true,
              'sprk-b-Link': true,
              'sprk-b-Link--standalone': true,
              'sprk-b-Link--disabled': isLastPage(),
              'sprk-b-Link--plain': true
            }"
            href="#"
            [attr.data-analytics]="analyticsStringLinkNext"
          >
            <span class="sprk-u-ScreenReaderText">{{ nextLinkText }}</span>
            <sprk-icon iconType="chevron-right"></sprk-icon>
          </a>
        </li>
      </sprk-unordered-list>
    </nav>
  `
})
export class SparkPaginationComponent {
  @Input()
  paginationType = 'default'; // default, long, pager
  @Input()
  nextLinkText = 'Next'; // Text to display for next link
  @Input()
  prevLinkText = 'Prev'; // Text to display for previous link
  @Input()
  currentPage = 1; // The currently active page
  @Input()
  totalItems: number; // Total number of items
  @Input()
  itemsPerPage: number; // Total number of items to show per page
  @Input()
  analyticsStringFirstLink: string;
  @Input()
  analyticsStringSecondLink: string;
  @Input()
  analyticsStringThirdLink: string;
  @Input()
  analyticsStringLinkNext: string;
  @Input()
  analyticsStringLinkPrev: string;
  @Input()
  idString: string;
  @Input()
  additionalClasses: string;

  // Will be emitted to the parent component on the click event
  @Output()
  previousClick = new EventEmitter();
  @Output()
  nextClick = new EventEmitter();
  @Output()
  pageClick = new EventEmitter<object>();

  goToPage(event, page): void {
    event.preventDefault();
    // Update currentPage to new selected page
    this.currentPage = page;
    // Emit out click event and page when clicked
    this.pageClick.emit({ event, page });
  }

  goBack(event, page): void {
    event.preventDefault();
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    }
    this.previousClick.emit({ event, page });
  }

  goForward(event, page): void {
    event.preventDefault();
    if (this.currentPage < this.totalPages()) {
      this.currentPage = this.currentPage + 1;
    }
    this.nextClick.emit({ event, page });
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
    const classArray: string[] = [''];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
  constructor(public ref: ElementRef) {}
}
