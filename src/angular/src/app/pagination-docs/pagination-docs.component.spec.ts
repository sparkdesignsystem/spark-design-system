import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../spark-core-angular/spark-core-angular.module';
import { PaginationDocsComponent } from './pagination-docs.component';

describe('PaginationDocsComponent', () => {
  let component: PaginationDocsComponent;
  let fixture: ComponentFixture<PaginationDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule],
      declarations: [ PaginationDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
