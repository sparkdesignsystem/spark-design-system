import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { PaginationDocsComponent } from './pagination-docs.component';

describe('PaginationDocsComponent', () => {
  let component: PaginationDocsComponent;
  let fixture: ComponentFixture<PaginationDocsComponent>;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [PaginationDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDocsComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('pageNum should return page from event object', () => {
    const event: object = { event: 'event', page: 1 };
    const config: object = [
      {
        currentPage: 1,
        totalItems: 6,
        itemsPerPage: 1
      }
    ];

    component.pageNum(event, config);
    component.goToPage(event, 'long');
    component.goToPage(event, 'pager');

    component.goBack(event, 'pager');
    component.goBack(event, 'long');
    component.goBack(event, 'default');

    component.goForward(event, 'default');
    component.goForward(event, 'pager');
    component.goForward(event, 'long');
    expect(component.pageNum(event, config)).toEqual(1);
  });
});
