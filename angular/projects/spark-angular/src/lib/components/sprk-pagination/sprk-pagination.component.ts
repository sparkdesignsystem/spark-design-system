import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sprk-pagination',
  template: `
    <nav
      aria-label="Pagination Navigation"
      [ngClass]="getClasses()"
      [attr.data-id]="idString"
    >
      <sprk-unordered-list
        listType="horizontal"
        additionalClasses="sprk-c-Pagination sprk-o-HorizontalList--spacing-medium"
      >
        <sprk-list-item>
          <a
            sprkLink
            variant="plain"
            (click)="goBack($event, currentPage)"
            [isDisabled]="currentPage === 1"
            class="sprk-c-Pagination__icon"
            [analyticsString]="analyticsStringLinkPrev"
            aria-label="Previous Page"
            href="#"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-left"
            ></sprk-icon>
          </a>
        </sprk-list-item>

        <sprk-list-item *ngIf="showNumbers()">
          <a
            sprkLink
            href="#"
            (click)="goToPage($event, 1)"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-c-Pagination__link--current': currentPage === 1
            }"
            [analyticsString]="analyticsStringFirstLink"
            [attr.aria-current]="currentPage === 1"
            aria-label="Page 1"
          >
            1
          </a>
        </sprk-list-item>

        <sprk-list-item
          *ngIf="showNumbers() && currentPage !== 2 && totalPages() === 3"
        >
          <a
            sprkLink
            href="#"
            (click)="goToPage($event, 2)"
            class="sprk-c-Pagination__link"
            [attr.aria-current]="false"
            aria-label="Page 2"
          >
            2
          </a>
        </sprk-list-item>

        <sprk-list-item
          *ngIf="showNumbers() && currentPage > 2 && totalPages() > 3"
        >
          ...
        </sprk-list-item>

        <sprk-list-item
          *ngIf="showNumbers() && currentPage > 1 && currentPage < totalPages()"
        >
          <a
            sprkLink
            href="#"
            (click)="goToPage($event, currentPage)"
            class="sprk-c-Pagination__link sprk-c-Pagination__link--current"
            aria-current="true"
            [analyticsString]="analyticsStringSecondLink"
            attr.aria-label="Page {{ currentPage }}"
          >
            {{ currentPage }}
          </a>
        </sprk-list-item>

        <sprk-list-item
          *ngIf="
            showNumbers() && currentPage < totalPages() - 1 && totalPages() > 3
          "
        >
          ...
        </sprk-list-item>

        <sprk-list-item *ngIf="showNumbers() && totalPages() > 1">
          <a
            sprkLink
            href="#"
            (click)="goToPage($event, totalPages())"
            [ngClass]="{
              'sprk-c-Pagination__link': true,
              'sprk-c-Pagination__link--current': currentPage === totalPages()
            }"
            attr.aria-label="Page {{ totalPages() }}"
            [analyticsString]="analyticsStringThirdLink"
            [attr.aria-current]="currentPage === totalPages()"
          >
            {{ totalPages() }}
          </a>
        </sprk-list-item>

        <sprk-list-item>
          <a
            sprkLink
            href="#"
            variant="plain"
            [isDisabled]="isLastPage()"
            (click)="goForward($event, currentPage)"
            class="sprk-c-Pagination__icon"
            [analyticsString]="analyticsStringLinkNext"
            aria-label="Next Page"
          >
            <span class="sprk-u-ScreenReaderText">{{ nextLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-right"
            ></sprk-icon>
          </a>
        </sprk-list-item>
      </sprk-unordered-list>
    </nav>
  `
})
export class SprkPaginationComponent {
  /**
   * If set to `pager`, the component will render
   * in the Pager variant with no visible number
   * links. Otherwise, the component will render in
   * the Default variant if there three or fewer
   * pages or in the Long variant if there are
   * more than three pages.
   */
  @Input()
  paginationType = 'default';
  /**
   * The total number of items in the
   * paged data. This is used to calculate
   * the number of pages.
   */
  @Input()
  totalItems: number;
  /**
   * The total number of items
   * to render per page. This is
   * used to calculate the number of pages.
   */
  @Input()
  itemsPerPage: number;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * Screen reader text for the "Next Page" icon.
   */
  @Input()
  nextLinkText = 'Next';
  /**
   * Screen reader text for the "Previous Page"
   * icon.
   */
  @Input()
  prevLinkText = 'Prev';
  /**
   * The value supplied will be assigned
   * to the `data-analytics` attribute on
   * the first link. Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsStringFirstLink: string;
  /**
   * The value supplied will be assigned
   * to the `data-analytics` attribute on
   * the second link. Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsStringSecondLink: string;
  /**
   * The value supplied will be assigned
   * to the `data-analytics` attribute on
   * the third link. Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsStringThirdLink: string;
  /**
   * The value supplied will be assigned
   * to the `data-analytics` attribute on
   * the "Next" link. Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsStringLinkNext: string;
  /**
   * The value supplied will be assigned
   * to the `data-analytics` attribute on
   * the "Prev" link. Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsStringLinkPrev: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;

  /**
   * @ignore
   */
  private _currentPage = 1;

  /**
   * The current page number.
   * In the Default and Long variants,
   * this value corresponds to the active page link.
   */
  @Input()
  set currentPage(value: number) {
    if (value > this.totalPages()) {
      value = this.totalPages();
    } else if (value < 1) {
      value = 1;
    }

    this._currentPage = value;
  }
  get currentPage(): number {
    return this._currentPage;
  }

  /**
   * Accepts a function to run when the
   * previous link is clicked.
   * On click, `previousClick`
   * will emit the click event and current page.
   */
  @Output()
  previousClick = new EventEmitter();
  /**
   * Accepts a function
   * to run when the next link is clicked.
   * On click, `nextClick` will emit the click event and current page.
   */
  @Output()
  nextClick = new EventEmitter();
  /**
   * Accepts a function to run when the individual page
   * links are clicked. On click, `pageClick` will
   * emit the click event and current page.
   */
  @Output()
  pageClick = new EventEmitter();

  /**
   * @ignore
   */
  goToPage(event, page): void {
    event.preventDefault();
    this.currentPage = page;
    this.pageClick.emit({ event, page });
  }

  /**
   * @ignore
   */
  goBack(event, page): void {
    event.preventDefault();
    let newPage = page;

    if (this.currentPage > 1) {
      newPage = this.currentPage - 1;
      this.currentPage = newPage;
    }

    // Page is still returning the old page. This allows us to
    // close Issue 1401 without introducing a breaking change.
    this.previousClick.emit({ event, page, newPage });
  }

  /**
   * @ignore
   */
  goForward(event, page): void {
    event.preventDefault();
    let newPage = page;

    if (this.currentPage < this.totalPages()) {
      newPage = this.currentPage + 1;
      this.currentPage = newPage;
    }

    // Page is still returning the old page. This allows us to
    // close Issue 1401 without introducing a breaking change.
    this.nextClick.emit({ event, page, newPage });
  }

  /**
   * @ignore
   * @returns total number of pages based on total
   * number of items and the desired number of
   * items to show per page.
   */
  totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  /**
   * @ignore
   * @returns true if currently on the last page.
   */
  isLastPage(): boolean {
    return this.currentPage === this.totalPages();
  }

  /**
   * @ignore
   * @returns true if the component is in
   * either the default or long variant.
   */
  showNumbers(): boolean {
    return this.paginationType !== 'pager';
  }

  /**
   * @ignore
   */
  getClasses(): string {
    const classArray: string[] = [''];

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
  constructor() {}
}
