import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkStepperComponent } from './sprk-stepper.component';

describe('SprkStepperComponent', () => {
  let component: SprkStepperComponent;
  let fixture: ComponentFixture<SprkStepperComponent>;
  let stepperElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SprkStepperComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkStepperComponent);
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
      stepperElement.classList.contains('sprk-c-Stepper--has-dark-bg'),
    ).toEqual(true);
  });

  it('should add the correct classes if additionalClasses has a value ', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Stepper sprk-u-pam sprk-u-man',
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
