import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAngularModule } from '../../spark-angular/spark-angular.module';
import { IconSetDocsComponent } from './icon-set-docs.component';

describe('IconSetDocsComponent', () => {
  let component: IconSetDocsComponent;
  let fixture: ComponentFixture<IconSetDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkAngularModule],
      declarations: [IconSetDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSetDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
