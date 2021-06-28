import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SprkLinkDirective } from '../../directives/sprk-link/sprk-link.directive';
import { SprkUnorderedListComponent } from '../sprk-unordered-list/sprk-unordered-list.component';
import { SprkListItemComponent } from '../sprk-list-item/sprk-list-item.component';
import { SprkPaginationComponent } from './sprk-pagination.component';

describe('SprkPaginationComponent', () => {
  let component: SprkPaginationComponent;
  let fixture: ComponentFixture<SprkPaginationComponent>;
  let element;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          SprkPaginationComponent,
          SprkUnorderedListComponent,
          SprkIconComponent,
          SprkLinkDirective,
          SprkListItemComponent,
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkPaginationComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct aria-label to links based on page number', () => {
    // < 1 ... 4 >
    component.currentPage = 1;
    component.totalItems = 100;
    component.itemsPerPage = 25;
    fixture.detectChanges();
    const pageItem = element.querySelectorAll('.sprk-b-Link');
    expect(pageItem[1].hasAttribute('aria-label')).toEqual(true);
    expect(pageItem[1].getAttribute('aria-label')).toEqual('Page 1');
    expect(pageItem[2].hasAttribute('aria-label')).toEqual(true);
    expect(pageItem[2].getAttribute('aria-label')).toEqual('Page 4');
  });

  it('should add the correct classes if additionalClasses has a value', () => {
    component.currentPage = 7;
    component.totalItems = 7;
    component.itemsPerPage = 1;
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(' sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsStringLinkPrev Input', () => {
    component.analyticsStringLinkPrev = 'previous';
    fixture.detectChanges();
    expect(
      element.querySelector('.sprk-b-Link').hasAttribute('data-analytics'),
    ).toEqual(true);
    expect(
      element.querySelector('.sprk-b-Link').getAttribute('data-analytics'),
    ).toEqual('previous');
  });

  it('should set the data-analytics attribute given a value in the analyticsStringLinkNext Input', () => {
    component.analyticsStringLinkNext = 'foo';
    fixture.detectChanges();
    const item = element.querySelectorAll('.sprk-c-Pagination__icon')[1];
    expect(item.hasAttribute('data-analytics')).toEqual(true);
    expect(item.getAttribute('data-analytics')).toEqual('foo');
  });

  it('should emit pageClick when an individual page is clicked', (done) => {
    let called = false;
    component.currentPage = 2;
    component.totalItems = 3;
    component.itemsPerPage = 1;
    fixture.detectChanges();
    component.pageClick.subscribe((g) => {
      called = true;
      done();
    });
    let pageItem = element.querySelectorAll('.sprk-b-Link');
    pageItem = pageItem[1];
    pageItem.click();
    expect(called).toEqual(true);
  });

  it('should emit previousClick when prev link is clicked', (done) => {
    let called = false;
    const expectedPage = 2;
    const expectedNewPage = 1;
    let actualPage = -1;
    let actualNewPage = -1;

    component.currentPage = 2;
    component.totalItems = 3;
    component.itemsPerPage = 1;

    component.previousClick.subscribe((g) => {
      called = true;
      actualPage = g.page;
      actualNewPage = g.newPage;
      done();
    });

    const item = element.querySelectorAll('a.sprk-c-Pagination__icon')[0];
    item.click();

    expect(called).toEqual(true);
    // Page is still returning the old page. This allows us to
    // close Issue 1401 without introducing a breaking change.
    expect(actualPage).toEqual(expectedPage);
    expect(actualNewPage).toEqual(expectedNewPage);
  });

  it('should emit nextClick when next link is clicked', (done) => {
    let called = false;
    const expectedPage = 2;
    const expectedNewPage = 3;
    let actualPage = -1;
    let actualNewPage = -1;

    component.currentPage = 2;
    component.totalItems = 3;
    component.itemsPerPage = 1;

    component.nextClick.subscribe((g) => {
      called = true;
      actualPage = g.page;
      actualNewPage = g.newPage;
      done();
    });

    const item = element.querySelectorAll('a.sprk-c-Pagination__icon')[1];
    item.click();

    expect(called).toEqual(true);
    // Page is still returning the old page. This allows us to
    // close Issue 1401 without introducing a breaking change.
    expect(actualPage).toEqual(expectedPage);
    expect(actualNewPage).toEqual(expectedNewPage);
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(element.querySelector('nav').getAttribute('data-id')).toEqual(
      testString,
    );
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(element.querySelector('nav').getAttribute('data-id')).toBeNull();
  });

  it('should allow for single-page configurations', () => {
    component.totalItems = 1;
    component.itemsPerPage = 1;
    component.currentPage = 1;
    fixture.detectChanges();

    // expect 1 page
    expect(element.querySelectorAll('.sprk-c-Pagination__link').length).toEqual(
      1,
    );
    // expect 1 selected page with text 1
    expect(
      element
        .querySelector('.sprk-c-Pagination__link--current')
        .textContent.trim(),
    ).toEqual('1');
  });

  it('should calculate total pages correctly', () => {
    component.totalItems = 1;
    component.itemsPerPage = 1;
    component.currentPage = 1;
    fixture.detectChanges();

    let expectedPages = 1;
    expect(component.totalPages()).toEqual(expectedPages);

    component.totalItems = 2;
    fixture.detectChanges();
    expectedPages = 2;
    expect(component.totalPages()).toEqual(expectedPages);

    component.totalItems = 5;
    component.itemsPerPage = 2;
    fixture.detectChanges();
    expectedPages = 3;
    expect(component.totalPages()).toEqual(expectedPages);
  });

  it('renders three numbered pages and no ellipses with 3 or fewer pages', () => {
    // < 1 2 3 >
    component.totalItems = 30;
    component.itemsPerPage = 10;
    fixture.detectChanges();

    expect(
      element.querySelectorAll('a.sprk-c-Pagination__icon').length,
    ).toEqual(2); // 2 chevrons
    expect(
      element.querySelectorAll('a.sprk-c-Pagination__link').length,
    ).toEqual(3); // 3 pages
    expect(
      Array.from(element.querySelectorAll('a')).filter(
        (x: HTMLLIElement) => x.textContent === '...',
      ).length,
    ).toEqual(0); // 0 chevrons
  });

  it('renders ellipses with more than 3 pages', () => {
    const str = '...';
    // < 1 ... 3 ... 5 >
    component.totalItems = 50;
    component.itemsPerPage = 10;
    component.currentPage = 3;
    fixture.detectChanges();

    expect(
      element.querySelectorAll('a.sprk-c-Pagination__icon').length,
    ).toEqual(2); // 2 chevrons
    expect(
      element.querySelectorAll('a.sprk-c-Pagination__link').length,
    ).toEqual(3); // 3 pages
    expect(
      Array.from(element.querySelectorAll('li')).filter(
        (x: HTMLLIElement) => x.textContent.trim() === str,
      ).length,
    ).toEqual(2); // 2 ellipses

    // < 1 ... 4 5 >
    component.currentPage = 4;

    fixture.detectChanges();
    expect(
      Array.from(element.querySelectorAll('li')).filter(
        (x: HTMLLIElement) => x.textContent.trim() === str,
      ).length,
    ).toEqual(1); // 1 ellipsis
  });

  it('handles currentPage outside bounds', () => {
    // should render 5 pages
    component.totalItems = 5;
    component.itemsPerPage = 1;
    component.currentPage = 99;

    fixture.detectChanges();

    expect(component.currentPage).toEqual(5);

    component.currentPage = -99;
    fixture.detectChanges();

    expect(component.currentPage).toEqual(1);
  });

  it('defaults currentPage to 1', () => {
    expect(component.currentPage).toEqual(1);
  });

  it('renders ellipses with more than 3 pages in long variant', () => {
    // < 1 ... 3 ... 5 >
    component.paginationType = 'long';
    component.totalItems = 50;
    component.itemsPerPage = 10;
    component.currentPage = 3;
    fixture.detectChanges();

    const str = '...';
    expect(
      element.querySelectorAll('a.sprk-c-Pagination__icon').length,
    ).toEqual(2); // 2 chevrons
    expect(
      element.querySelectorAll('a.sprk-c-Pagination__link').length,
    ).toEqual(3); // 3 pages
    expect(
      Array.from(element.querySelectorAll('li')).filter(
        (x: HTMLLIElement) => x.textContent.trim() === str,
      ).length,
    ).toEqual(2); // 2 ellipses

    // < 1 ... 4 5 >
    component.currentPage = 4;
    fixture.detectChanges();
    expect(
      Array.from(element.querySelectorAll('li')).filter(
        (x: HTMLLIElement) => x.textContent.trim() === str,
      ).length,
    ).toEqual(1); // 1 ellipsis
  });

  it('renders three numbered pages and no ellipses with 3 or fewer pages in long variant', () => {
    const str = '...';
    // < 1 2 3 >
    component.paginationType = 'long';
    component.totalItems = 30;
    component.itemsPerPage = 10;
    fixture.detectChanges();

    expect(
      element.querySelectorAll('a.sprk-c-Pagination__icon').length,
    ).toEqual(2); // 2 chevrons
    expect(
      element.querySelectorAll('a.sprk-c-Pagination__link').length,
    ).toEqual(3); // 3 pages
    expect(
      Array.from(element.querySelectorAll('a')).filter(
        (x: HTMLLIElement) => x.textContent.trim() === str,
      ).length,
    ).toEqual(0); // 0 chevrons
  });

  it('should not change page when going back from page 1', () => {
    // < 1 2 3 >
    component.totalItems = 3;
    component.itemsPerPage = 1;
    component.currentPage = 1;
    fixture.detectChanges();

    const goBackArrow = element.querySelectorAll('.sprk-b-Link')[0];
    goBackArrow.click();

    expect(component.currentPage).toEqual(1);
  });

  it('should not change page when going forward from last page', () => {
    // < 1 2 3 >
    component.totalItems = 3;
    component.itemsPerPage = 1;
    component.currentPage = 3;
    fixture.detectChanges();

    const goForwardArrow = element.querySelectorAll('.sprk-b-Link')[4];
    goForwardArrow.click();

    expect(component.currentPage).toEqual(3);
  });
});
