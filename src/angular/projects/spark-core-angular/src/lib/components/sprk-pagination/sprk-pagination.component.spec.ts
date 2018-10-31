import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkUnorderedListComponent } from '../sprk-unordered-list/sprk-unordered-list.component';
import { SparkPaginationComponent } from './sprk-pagination.component';

describe('SparkPaginationComponent', () => {
  let component: SparkPaginationComponent;
  let fixture: ComponentFixture<SparkPaginationComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SparkPaginationComponent,
        SparkUnorderedListComponent,
        SparkIconComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkPaginationComponent);
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

  it('should add the correct pagination type if paginationType is supplied', () => {
    component.paginationType = 'long';
    component.prevLinkText = 'Back';
    fixture.detectChanges();
    expect(component.paginationType).toEqual('long');
  });

  it('should add the correct back link text if it is supplied', () => {
    component.paginationType = 'long';
    component.currentPage = 3;
    component.prevLinkText = 'Back';
    fixture.detectChanges();
    expect(component.paginationType).toEqual('long');
  });

  it('should add the correct aria-label to links based on page number', () => {
    component.paginationType = 'long';
    component.currentPage = 1;
    component.totalItems = 100;
    component.itemsPerPage = 25;
    fixture.detectChanges();
    const pageItem = element.querySelectorAll('.sprk-b-Link');
    expect(pageItem[1].hasAttribute('aria-label')).toEqual(true);
    expect(pageItem[1].getAttribute('aria-label')).toEqual('Page 1');
    component.currentPage = 3;
    fixture.detectChanges();
    expect(pageItem[2].hasAttribute('aria-label')).toEqual(true);
    expect(pageItem[2].getAttribute('aria-label')).toEqual('Page 3');
  });

  it('should add the correct pagination type if paginationType is supplied', () => {
    component.paginationType = 'pager';
    fixture.detectChanges();
    expect(component.paginationType).toEqual('pager');
  });

  it('should add the correct classes if additionalClasses has a value', () => {
    component.paginationType = 'long';
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
      element.querySelector('.sprk-b-Link').hasAttribute('data-analytics')
    ).toEqual(true);
    expect(
      element.querySelector('.sprk-b-Link').getAttribute('data-analytics')
    ).toEqual('previous');
  });

  it('should set the data-analytics attribute given a value in the analyticsStringLinkNext Input', () => {
    component.analyticsStringLinkNext = 'foo';
    fixture.detectChanges();
    let item = element.querySelectorAll('.sprk-b-Link');
    item = item[4];
    expect(item.hasAttribute('data-analytics')).toEqual(true);
    expect(item.getAttribute('data-analytics')).toEqual('foo');
  });

  it('should emit pageClick when an individual page is clicked', done => {
    let called = false;
    component.currentPage = 2;
    component.totalItems = 3;
    component.itemsPerPage = 1;
    fixture.detectChanges();
    component.pageClick.subscribe(g => {
      called = true;
      done();
    });
    let pageItem = element.querySelectorAll('.sprk-b-Link');
    pageItem = pageItem[1];
    pageItem.click();
    expect(called).toEqual(true);
  });

  it('should emit previousClick when previous link is clicked', done => {
    let called = false;
    component.currentPage = 2;
    fixture.detectChanges();
    component.previousClick.subscribe(g => {
      called = true;
      done();
    });
    let item = element.querySelectorAll('.sprk-b-Link');
    item = item[0];
    item.click();
    expect(called).toEqual(true);
  });

  it('should emit previousClick when goBack is ran', done => {
    let called = false;
    component.currentPage = 2;
    component.goBack({ preventDefault: () => {} }, 2);
    component.goForward({ preventDefault: () => {} }, 2);
    fixture.detectChanges();
    component.previousClick.subscribe(g => {
      called = true;
      done();
    });
    let item = element.querySelectorAll('.sprk-b-Link');
    item = item[0];
    item.click();
    expect(called).toEqual(true);
  });

  it('should emit nextClick when next link is clicked', done => {
    let called = false;
    component.currentPage = 1;
    component.totalItems = 3;
    component.itemsPerPage = 1;
    fixture.detectChanges();
    component.nextClick.subscribe(g => {
      called = true;
      done();
    });
    let item = element.querySelectorAll('.sprk-b-Link');
    item = item[4];
    item.click();
    expect(called).toEqual(true);
  });
});
