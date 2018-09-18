import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { ToggleDocsComponent } from './toggle-docs.component';

describe('ToggleDocsComponent', () => {
  let component: ToggleDocsComponent;
  let fixture: ComponentFixture<ToggleDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule],
      declarations: [ ToggleDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
