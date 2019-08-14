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
        <sprk-list-item>
          <sprk-link
            linkType="plain"
            (click)="goBack($event, currentPage)"
            [isDisabled]="currentPage === 1"
            additionalClasses="sprk-c-Pagination__icon"
            [analyticsString]="analyticsStringLinkPrev"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-left"
            ></sprk-icon>
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item>
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

        <sprk-list-item>
          <sprk-link
            (click)="goToPage($event, 2)"
            additionalClasses="sprk-c-Pagination__link {{
              currentPage === 2 && 'sprk-c-Pagination__link--current'
            }}"
            [analyticsString]="analyticsStringSecondLink"
            [ariaCurrent]="currentPage === 2"
            ariaLabel="Page 2"
          >
            2
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item>
          <sprk-link
            (click)="goToPage($event, 3)"
            additionalClasses="sprk-c-Pagination__link {{
              currentPage === 3 && 'sprk-c-Pagination__link--current'
            }}"
            [analyticsString]="analyticsStringThirdLink"
            [ariaCurrent]="currentPage === 3"
            ariaLabel="Page 3"
          >
            3
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item>
          <sprk-link
            linkType="plain"
            [isDisabled]="isLastPage()"
            (click)="goForward($event, currentPage)"
            additionalClasses="sprk-c-Pagination__icon"
            [analyticsString]="analyticsStringLinkNext"
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
        <sprk-list-item>
          <sprk-link
            linkType="plain"
            [isDisabled]="currentPage === 1"
            (click)="goBack($event, currentPage)"
            additionalClasses="sprk-c-Pagination__icon"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-left"
            ></sprk-icon>
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item>
          <sprk-link
            (click)="goToPage($event, 1)"
            additionalClasses="sprk-c-Pagination__link {{
              currentPage === 1 && 'sprk-c-Pagination__link--current'
            }}"
            [analyticsString]="analyticsStringFirstLink"
            ariaLabel="Page 1"
          >
            1
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item
          [additionalClasses]="{
            'sprk-u-Display--none': currentPage === 1 || currentPage === 2
          }"
        >
          ...
        </sprk-list-item>

        <sprk-list-item
          [additionalClasses]="{
            'sprk-u-Display--none':
              currentPage === 1 || currentPage === totalPages()
          }"
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
          [additionalClasses]="{
            'sprk-u-Display--none':
              currentPage === totalPages() || currentPage === totalPages() - 1
          }"
        >
          ...
        </sprk-list-item>

        <sprk-list-item>
          <sprk-link
            (click)="goToPage($event, totalPages())"
            additionalClasses="sprk-c-Pagination__link {{
              currentPage === totalPages() && 'sprk-c-Pagination__link--current'
            }}"
            [analyticsString]="analyticsStringThirdLink"
            ariaLabel="Page {{ totalPages() }}"
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
          >
            <span class="sprk-u-ScreenReaderText">Next</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-right"
            ></sprk-icon>
          </sprk-link>
        </sprk-list-item>
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
        <sprk-list-item additionalClasses="sprk-c-Pagination__item">
          <sprk-link
            linkType="plain"
            [isDisabled]="currentPage === 1"
            (click)="goBack($event, currentPage)"
            additionalClasses="sprk-c-Pagination__icon sprk-b-Link--simple"
            [analyticsString]="analyticsStringLinkPrev"
          >
            <span class="sprk-u-ScreenReaderText">{{ prevLinkText }}</span>
            <sprk-icon
              additionalClasses="sprk-c-Icon--stroke-current-color"
              iconType="chevron-left"
            ></sprk-icon>
          </sprk-link>
        </sprk-list-item>

        <sprk-list-item additionalClasses="sprk-c-Pagination__item">
          <sprk-link
            linkType="plain"
            [isDisabled]="isLastPage()"
            (click)="goForward($event, currentPage)"
            additionalClasses="sprk-c-Pagination__icon sprk-b-Link--simple"
            [analyticsString]="analyticsStringLinkNext"
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
