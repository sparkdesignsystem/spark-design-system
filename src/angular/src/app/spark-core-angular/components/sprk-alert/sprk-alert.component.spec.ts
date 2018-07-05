import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkAlertComponent } from './sprk-alert.component';

describe('SparkAlertComponent', () => {
  let component: SparkAlertComponent;
  let fixture: ComponentFixture<SparkAlertComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkAlertComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAlertComponent);
    component = fixture.componentInstance;
    alertElement = fixture.nativeElement.querySelector('div');
    alertElement = alertElement.querySelector('div');
  })

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the element', () => {
    fixture.detectChanges();
    expect(alertElement.classList.toString()).toEqual(component.getClasses());
  });

  it('should add the correct class if alertType is not set', () => {
    fixture.detectChanges();
    expect(alertElement.classList.toString()).toEqual('sprk-c-Alert__icon');
  });

  it('should add the correct class if alertType is success', () => {
    component.alertType = 'success';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Alert__icon sprk-c-Alert__icon--success');
  });

  it('should add the correct class if alertType is fail', () => {
    component.alertType = 'fail';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Alert__icon sprk-c-Alert__icon--fail');
  });

  it('should add the correct class if alertType is info', () => {
    component.alertType = 'info';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Alert__icon sprk-c-Alert__icon--info');
  });

  it('should add the correct classes if alertType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Alert__icon sprk-u-pam sprk-u-man');
  });

  it('should add the correct classes if alertType and additionalClasses have values', () => {
    component.alertType = 'info';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Alert__icon sprk-c-Alert__icon--info sprk-u-pam sprk-u-man');
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    component.analyticsString='Product: Alert: Alert 1';
    fixture.detectChanges();
    expect(alertElement.parentElement.hasAttribute('data-analytics')).toEqual(true);
    expect(alertElement.parentElement.getAttribute('data-analytics')).toEqual('Product: Alert: Alert 1');
  });
});
