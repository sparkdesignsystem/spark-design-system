import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkStepperComponent } from './sprk-stepper.component';
import { SparkStepperStepComponent } from './sprk-stepper-step/sprk-stepper-step.component';

describe('SparkStepperComponent', () => {
  let component: SparkStepperComponent;
  let fixture: ComponentFixture<SparkStepperComponent>;
  let stepperElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkStepperComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkStepperComponent);
    component = fixture.componentInstance;
    stepperElement = fixture.nativeElement.querySelector('ol');
    const step = document.createElement('li');
    step.classList.add('sprk-c-Stepper__step');
    step.setAttribute('data-sprk-stepper', 'step');
    stepperElement.appendChild(step);
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(stepperElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if hasDarkBg is not set', () => {
    expect(component.getClasses()).toEqual('sprk-c-Stepper');
  });

  it('should add the correct class if hasDarkBg is true', () => {
    component.hasDarkBg = true;
    fixture.detectChanges();
    expect(
      stepperElement.classList.contains('sprk-c-Stepper--has-dark-bg')
    ).toEqual(true);
  });

  it('should add the correct classes if additionalClasses has a value ', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Stepper sprk-u-pam sprk-u-man'
    );
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(stepperElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(stepperElement.getAttribute('data-id')).toBeNull();
  });
});
