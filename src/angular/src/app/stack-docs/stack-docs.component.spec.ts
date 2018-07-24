import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../spark-core-angular/spark-core-angular.module';
import { StackDocsComponent } from './stack-docs.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StackDocsComponent', () => {
  let component: StackDocsComponent;
  let fixture: ComponentFixture<StackDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule, RouterTestingModule],
      declarations: [ StackDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });
});
