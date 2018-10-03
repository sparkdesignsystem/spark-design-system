import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SparkIconComponent } from '../sprk-icon/sprk-icon.component';
import { SparkAlertComponent } from './sprk-alert.component';

describe('SparkAlertComponent', () => {
  let component: SparkAlertComponent;
  let fixture: ComponentFixture<SparkAlertComponent>;
  let alertElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SparkAlertComponent, SparkIconComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkAlertComponent);
    component = fixture.componentInstance;
    component.visible = true;
    fixture.detectChanges();
    alertElement = fixture.nativeElement.querySelector('div');
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClasses should match what gets set on the icon', () => {
    const icon = alertElement.querySelector('div');
    fixture.detectChanges();

    expect(icon.classList.toString()).toEqual(component.getClasses());
  });

  it('getClassesAlertContainer should match what gets set on the container', () => {
    fixture.detectChanges();
    expect(alertElement.classList.toString()).toEqual(
      component.getClassesAlertContainer()
    );
  });

  it('should add the correct class if alertType is not set', () => {
    component.alertType = '';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual('sprk-c-Alert__icon');
  });

  it('should add the correct class if alertType is success', () => {
    component.alertType = 'success';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Alert__icon sprk-c-Alert__icon--success'
    );
  });

  it('should add the correct class if alertType is fail', () => {
    component.alertType = 'fail';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Alert__icon sprk-c-Alert__icon--fail'
    );
  });

  it('should add the correct class if alertType is info', () => {
    component.alertType = 'info';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Alert__icon sprk-c-Alert__icon--info'
    );
  });

  it('should add the correct classes if alertType has no value, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Alert__icon sprk-u-pam sprk-u-man'
    );
  });

  it('should add the correct classes if alertType and additionalClasses have values', () => {
    component.alertType = 'info';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.getClasses()).toEqual(
      'sprk-c-Alert__icon sprk-c-Alert__icon--info sprk-u-pam sprk-u-man'
    );
  });

  it('should add the correct classes if additionalClasses is set on container', () => {
    component.additionalClasses = 'sprk-u-pam';
    fixture.detectChanges();
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-u-pam'
    );
  });

  it('should add the dismiss button if dismissible is true', () => {
    component.dismissible = true;
    fixture.detectChanges();
    expect(alertElement.querySelector('button')).toBeTruthy();
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const alertStr = 'Alert One';
    component.analyticsString = alertStr;
    fixture.detectChanges();
    expect(alertElement.getAttribute('data-analytics')).toEqual(alertStr);
  });

  it('should hide the alert if the dismiss button is clicked', () => {
    component.dismissible = true;
    fixture.detectChanges();
    alertElement.querySelector('button').click();
    fixture.detectChanges();
    expect(
      alertElement.classList.contains('sprk-u-Display--none')
    ).toBeTruthy();
  });
});
