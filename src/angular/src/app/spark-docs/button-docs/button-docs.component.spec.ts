import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkCoreAngularModule } from '../../spark-core-angular/spark-core-angular.module';
import { ButtonDocsComponent } from './button-docs.component';

describe('ButtonDocsComponent', () => {
  let component: ButtonDocsComponent;
  let fixture: ComponentFixture<ButtonDocsComponent>;
  let spinnerButtonElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SparkCoreAngularModule],
      declarations: [ButtonDocsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocsComponent);
    component = fixture.componentInstance;
    spinnerButtonElement = fixture.nativeElement.querySelectorAll('button')[5];
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add a spinner when the spinner button is clicked', () => {
    spinnerButtonElement.click();
    expect(spinnerButtonElement.querySelector('.sprk-c-Spinner')).toBeTruthy();
  });

  it('should not add another spinner if its already spinning', () => {
    spinnerButtonElement.click();
    spinnerButtonElement.click();
    expect(
      spinnerButtonElement.querySelectorAll('.sprk-c-Spinner').length
    ).toBe(1);
  });
});
