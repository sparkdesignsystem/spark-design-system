import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '../../../../dist/spark-angular/lib/spark-angular.module';
import { DropdownDocsComponent } from './dropdown-docs.component';

describe('DropdownDocsComponent', () => {
  let component: DropdownDocsComponent;
  let fixture: ComponentFixture<DropdownDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [DropdownDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
