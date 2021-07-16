import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SprkStepperStepComponent } from './sprk-stepper-step.component';
import { SprkLinkComponent } from '../../sprk-link/sprk-link.component';

describe('SprkStepperStepComponent', () => {
  let component: SprkStepperStepComponent;
  let fixture: ComponentFixture<SprkStepperStepComponent>;
  let stepElement: HTMLElement;
  let stepTriggerElement: HTMLElement;
  let contentElement: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [SprkStepperStepComponent, SprkLinkComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkStepperStepComponent);
    component = fixture.componentInstance;
    stepElement = fixture.nativeElement.querySelector('li');
    stepTriggerElement = stepElement.querySelector('a');
    contentElement = stepElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(stepElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if variant is not set', () => {
    expect(component.getClasses()).toEqual('sprk-c-Stepper__step');
  });

  it('should add the correct class if variant is hasDescription', () => {
    component.variant = 'hasDescription';
    fixture.detectChanges();
    expect(
      contentElement.classList.contains(
        'sprk-c-Stepper__step-content--has-description',
      ),
    ).toEqual(true);
  });

  it('should add the correct class if isDefaultActive is true', () => {
    component.isDefaultActive = true;
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Stepper__step sprk-c-Stepper__step--selected',
    );
  });

  it('should add the correct classes if isDefaultActive has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Stepper__step sprk-u-pam sprk-u-man',
    );
  });

  it('should add the correct classes if isDefaultActive and additionalClasses have values', () => {
    component.isDefaultActive = true;
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Stepper__step sprk-u-pam sprk-u-man sprk-c-Stepper__step--selected',
    );
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString = 'Click';
    fixture.detectChanges();
    expect(stepElement.hasAttribute('data-analytics')).toEqual(true);
    expect(stepElement.getAttribute('data-analytics')).toEqual('Click');
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(stepElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(stepElement.getAttribute('data-id')).toBeNull();
  });
});
