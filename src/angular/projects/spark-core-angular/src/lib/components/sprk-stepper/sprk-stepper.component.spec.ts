import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkStepperComponent } from './sprk-stepper.component';

@Component({
  selector: 'sprk-test',
  template: `
    <sprk-stepper>
    </ssprk-stepper>
  `
})
export class TestComponent {}

describe('SparkStepperComponent', () => {
  let component: SparkStepperComponent;
  let fixture: ComponentFixture<SparkStepperComponent>;
  let element: HTMLElement;

  let testComponent: TestComponent;
  let testFixture: ComponentFixture<TestComponent>;
  let testElement;
  let testTab1;
  let testTab2;
  let testPanel1;
  let testPanel2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SparkStepperComponent, TestComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    testFixture = TestBed.createComponent(TestComponent);
    testComponent = testFixture.componentInstance;

    fixture = TestBed.createComponent(SparkStepperComponent);
    component = fixture.componentInstance;
    component.ngAfterViewInit();
    testFixture.detectChanges();

    element = fixture.nativeElement.querySelector('div');
    testElement = testFixture.nativeElement.querySelector('sprk-stepper');

    testTab1 = testElement.querySelectorAll('.sprk-c-Stepper__step')[0];
    testTab2 = testElement.querySelectorAll('.sprk-c-Stepper__step')[1];
    testPanel1 = testElement.querySelectorAll(
      '.sprk-c-Stepper__step-content'
    )[0];
    testPanel2 = testElement.querySelectorAll(
      '.sprk-c-Stepper__step-content'
    )[1];
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should add classes if additionalClasses has a value', () => {
    component.additionalClasses = 'sprk-u-man';
    fixture.detectChanges();
    expect(element.classList.toString()).toEqual('sprk-c-Stepper sprk-u-man');
  });

  it('should create an id for each tab', () => {
    expect(testTab1.id).toContain('tabbed-navigation');
    expect(testTab2.id).toContain('tabbed-navigation');
    expect(testTab1.id).not.toEqual(testTab2.id);
  });
});
