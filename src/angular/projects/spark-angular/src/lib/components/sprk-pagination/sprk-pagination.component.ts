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
      [attr.data-id]="idString"
    >
      <sprk-unordered-list
        listType="horizontal"
        additionalClasses="sprk-c-Pagination sprk-o-HorizontalList--spacing-medium"
      >
        <sprk-list-item>
          <sprk-link
            linkType="plain"
            (click)="goBack($event, currentPage)"
            [isDisabled]="currentPage === 1"
            additionalClasses="sprk-c-Pagination__icon"
            [analyticsString]="analyticsStringLinkPrev"
            ariaLabel="Previous Page"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-left"
            ></sprk-icon>
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item *ngIf="showNumbers()">
          <sprk-link
            (click)="goToPage($event, 1)"
            additionalClasses="sprk-c-Pagination__link {{
              currentPage === 1 && 'sprk-c-Pagination__link--current'
            }}"
            [analyticsString]="analyticsStringFirstLink"
            [ariaCurrent]="currentPage === 1"
            ariaLabel="Page 1"
          >
            1
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item
          *ngIf="showNumbers() && currentPage !== 2 && totalPages() === 3"
        >
          <sprk-link
            (click)="goToPage($event, 2)"
            additionalClasses="sprk-c-Pagination__link"
            [ariaCurrent]="false"
            ariaLabel="Page 2"
          >
            2
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item
          *ngIf="showNumbers() && currentPage > 2 && totalPages() > 3"
        >
          ...
        </sprk-list-item>

        <sprk-list-item
          *ngIf="showNumbers() && currentPage > 1 && currentPage < totalPages()"
        >
          <sprk-link
            (click)="goToPage($event, currentPage)"
            additionalClasses="sprk-c-Pagination__link sprk-c-Pagination__link--current"
            ariaCurrent="true"
            [analyticsString]="analyticsStringSecondLink"
            ariaLabel="Page {{ currentPage }}"
          >
            {{ currentPage }}
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item
          *ngIf="
            showNumbers() && currentPage < totalPages() - 1 && totalPages() > 3
          "
        >
          ...
        </sprk-list-item>

        <sprk-list-item *ngIf="showNumbers() && totalPages() > 1">
          <sprk-link
            (click)="goToPage($event, totalPages())"
            additionalClasses="sprk-c-Pagination__link {{
              currentPage === totalPages() && 'sprk-c-Pagination__link--current'
            }}"
            ariaLabel="Page {{ totalPages() }}"
            [analyticsString]="analyticsStringThirdLink"
            [ariaCurrent]="currentPage === totalPages()"
          >
            {{ totalPages() }}
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item>
          <sprk-link
            linkType="plain"
            [isDisabled]="isLastPage()"
            (click)="goForward($event, currentPage)"
            additionalClasses="sprk-c-Pagination__icon"
            [analyticsString]="analyticsStringLinkNext"
            ariaLabel="Next Page"
          >
            <span class="sprk-u-ScreenReaderText">{{ nextLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-right"
            ></sprk-icon>
          </sprk-link>
        </sprk-list-item>
      </sprk-unordered-list>
    </nav>
  `
})
export class SprkPaginationComponent {
  // long and default have been combined and render the same now
  @Input()
  paginationType = 'default';
  @Input()
  totalItems: number; // Total number of items
  @Input()
  itemsPerPage: number; // Total number of items to show per page
  @Input()
  additionalClasses: string;
  @Input()
  nextLinkText = 'Next'; // Screenreader text for next link
  @Input()
  prevLinkText = 'Prev'; // Screenreader text for previous link
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

  private _currentPage = 1;
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

  // Will be emitted to the parent component on the click event
  @Output()
  previousClick = new EventEmitter();
  @Output()
  nextClick = new EventEmitter();
  @Output()
  pageClick = new EventEmitter<object>();

  goToPage(event, page): void {
    event.preventDefault();
    this.currentPage = page;
    this.pageClick.emit({ event, page });
  }

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

  // Returns true if the component is in either the default or long variant
  // These variants render the same now
  showNumbers(): boolean {
    return this.paginationType !== 'pager';
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
