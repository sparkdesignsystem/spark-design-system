import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { LinkDocsComponent } from './link-docs.component';

describe('LinkDocsComponent', () => {
  let component: LinkDocsComponent;
  let fixture: ComponentFixture<LinkDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [LinkDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
