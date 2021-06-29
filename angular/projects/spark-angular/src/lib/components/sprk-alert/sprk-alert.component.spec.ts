import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SprkAlertComponent } from './sprk-alert.component';
import { Component } from '@angular/core';
import { SprkAlertModule } from './sprk-alert.module';

@Component({
  selector: `sprk-test`,
  template: `<sprk-alert
    [variant]="variant"
    [isDismissible]="isDismissible"
    [dismissible]="dismissible"
    [isVisible]="isVisible"
  ></sprk-alert>`,
})
class WrappedAlertComponent {
  variant: string;
  isDismissible: boolean = undefined;
  dismissible: boolean = undefined;
  isVisible: boolean = true;
}
describe('SprkAlertComponent', () => {
  let component: SprkAlertComponent;
  let fixture: ComponentFixture<SprkAlertComponent>;
  let alertElement: HTMLElement;
  let dismissElement: HTMLElement;
  let iconElement: HTMLElement;
  let dismissIconElement: HTMLElement;

  let wrappedComponent: WrappedAlertComponent;
  let wrappedFixture: ComponentFixture<WrappedAlertComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SprkAlertModule],
        declarations: [WrappedAlertComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SprkAlertComponent);
    component = fixture.componentInstance;
    component.isVisible = true;
    fixture.detectChanges();
    alertElement = fixture.nativeElement.querySelector('div');
    dismissElement = fixture.nativeElement.querySelector('button');
    iconElement = fixture.nativeElement.querySelector(
      '.sprk-c-Alert__content .sprk-c-Alert__icon',
    );
    dismissIconElement = fixture.nativeElement.querySelector(
      '.sprk-c-Alert__icon--dismiss',
    );

    wrappedFixture = TestBed.createComponent(WrappedAlertComponent);
    wrappedComponent = wrappedFixture.componentInstance;
    wrappedComponent.isVisible = true;
    wrappedFixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('getClassesAlertContainer should match what gets set on the container', () => {
    fixture.detectChanges();
    expect(alertElement.classList.toString()).toEqual(
      component.getClassesAlertContainer(),
    );
  });

  it('should default to info alertType if alertType and variant are not set', () => {
    fixture.detectChanges();
    expect(component.variant).toEqual(undefined);
    expect(component.alertType).toEqual('info');
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--info',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#bell-filled',
    );
  });

  it('should prefer variant if both variant and alertType are set', () => {
    component.alertType = 'success';
    component.variant = 'fail';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--success')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--fail',
    );
  });

  it('should add the correct class if alertType is success', () => {
    component.alertType = 'success';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--info')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--success',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#check-mark-filled',
    );
  });

  it('should add the correct class if variant is success', () => {
    component.variant = 'success';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--info')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--success',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#check-mark-filled',
    );
  });

  it('should add the correct class if alertType is fail', () => {
    component.alertType = 'fail';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--info')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--fail',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#exclamation-filled',
    );
  });

  it('should add the correct class if variant is fail', () => {
    component.variant = 'fail';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--info')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--fail',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#exclamation-filled',
    );
  });

  it('should add the correct class if alertType is info', () => {
    component.alertType = 'info';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--success')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--info',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#bell-filled',
    );
  });

  it('should add the correct class if variant is info', () => {
    component.variant = 'info';
    fixture.detectChanges();
    expect(alertElement.classList.contains('sprk-c-Alert--success')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--info',
    );
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#bell-filled',
    );
  });

  it('should add the correct classes if alertType and variant have no values, but additionalClasses does', () => {
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.variant).toEqual(undefined);
    expect(component.alertType).toEqual('info');
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--info sprk-u-pam sprk-u-man',
    );
  });

  it('should add the correct classes if alertType and additionalClasses have values', () => {
    component.alertType = 'success';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.variant).toEqual(undefined);
    expect(alertElement.classList.contains('sprk-c-Alert--info')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--success sprk-u-pam sprk-u-man',
    );
  });

  it('should add the correct classes if variant and additionalClasses have values', () => {
    component.variant = 'success';
    component.additionalClasses = 'sprk-u-pam sprk-u-man';
    fixture.detectChanges();
    expect(component.alertType).toEqual('info');
    expect(alertElement.classList.contains('sprk-c-Alert--info')).toEqual(
      false,
    );
    expect(component.getClassesAlertContainer()).toEqual(
      'sprk-c-Alert sprk-c-Alert--success sprk-u-pam sprk-u-man',
    );
  });

  it('should emit dismissEvent when dismiss button is clicked', (done) => {
    let called = false;
    fixture.detectChanges();
    component.dismissEvent.subscribe((g) => {
      called = true;
      done();
    });
    dismissElement.click();
    expect(called).toEqual(true);
  });

  it('should set the data-analytics attribute given a value in the analyticsString Input', () => {
    const alertStr = 'Alert One';
    component.analyticsString = alertStr;
    fixture.detectChanges();
    expect(alertElement.getAttribute('data-analytics')).toEqual(alertStr);
  });

  it('should hide the alert if the dismiss button is clicked', () => {
    component.isDismissible = true;
    fixture.detectChanges();
    dismissElement.click();
    fixture.detectChanges();
    expect(component.isVisible).toBe(false);
  });

  it('should add data-id when idString has a value', () => {
    const testString = 'element-id';
    component.idString = testString;
    fixture.detectChanges();
    expect(alertElement.getAttribute('data-id')).toEqual(testString);
  });

  it('should not add data-id when idString has no value', () => {
    component.idString = null;
    fixture.detectChanges();
    expect(alertElement.getAttribute('data-id')).toBeNull();
  });

  it('should render a close icon if no value is set for dismissIconName', () => {
    fixture.detectChanges();
    expect(
      dismissIconElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#close');
  });

  it('should render a custom icon if a value is set for dismissIconName', () => {
    component.dismissIconName = 'arrow-right';
    fixture.detectChanges();
    expect(
      dismissIconElement.querySelector('use').getAttribute('xlink:href'),
    ).toEqual('#arrow-right');
  });

  it('should render a custom icon if a value is set for iconName', () => {
    component.iconName = 'arrow-right';
    fixture.detectChanges();
    expect(iconElement.querySelector('use').getAttribute('xlink:href')).toEqual(
      '#arrow-right',
    );
  });

  it('should not be dismissible if dismissible is set to false', () => {
    wrappedComponent.dismissible = true;
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(1);
    wrappedComponent.dismissible = false;
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(0);
  });

  it('should not be dismissible if isDismissible is set to false', () => {
    wrappedComponent.isDismissible = true;
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(1);
    wrappedComponent.isDismissible = false;
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(0);
  });

  it('should prefer isDismissible over dismissible', () => {
    wrappedComponent.isDismissible = true;
    wrappedComponent.dismissible = false;
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(1);
    wrappedComponent.isDismissible = false;
    wrappedComponent.dismissible = true;
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(0);
  });

  it('should not change dismissible if another Input is changed', () => {
    wrappedComponent.variant = 'fail';
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(1);
    wrappedComponent.variant = 'success';
    wrappedFixture.detectChanges();
    expect(
      wrappedFixture.nativeElement.querySelectorAll('button').length,
    ).toEqual(1);
  });
});
