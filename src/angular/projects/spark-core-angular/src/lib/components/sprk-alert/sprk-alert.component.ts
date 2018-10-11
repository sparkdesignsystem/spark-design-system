import { Component, Input } from '@angular/core';
import { dismissAlert } from '@sparkdesignsystem/spark-core/es5/alerts';

@Component({
  selector: 'sprk-alert',
  template: `
  <div
      *ngIf="visible"
      [ngClass]="getClassesAlertContainer()"
      role="alert"
      [attr.data-analytics]="analyticsString">
      <div class="sprk-c-Alert__content">
        <sprk-icon iconType="{{ icon }}" additionalClasses="sprk-c-Alert__icon sprk-c-Icon--l" aria-hidden="true"></sprk-icon>

        <p class="sprk-b-TypeBodyTwo">
          <ng-content></ng-content>
        </p>
      </div>

      <button
        *ngIf="dismissible !== false"
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        (click)="alertDismiss($event)">
        <sprk-icon iconType="times" additionalClasses="sprk-c-Icon--l" aria-hidden="true"></sprk-icon>
      </button>
    </div>
  `
})
export class SparkAlertComponent {
  @Input()
  alertType: string;
  @Input()
  analyticsString: string;
  @Input()
  additionalClasses: string;
  @Input()
  dismissible: boolean;

  public icon: string;
  public visible = true;

  getClassesAlertContainer(): string {
    const alertClassArray: string[] = ['sprk-c-Alert'];

    switch (this.alertType) {
      case 'success':
        alertClassArray.push('sprk-c-Alert--success');
        this.icon = 'check';
        break;
      case 'info':
        alertClassArray.push('sprk-c-Alert--info');
        this.icon = 'bell';
        break;
      case 'fail':
        alertClassArray.push('sprk-c-Alert--fail');
        this.icon = 'exclamation';
        break;
      default:
        break;
    }

    if (this.dismissible === false) {
      alertClassArray.push('sprk-c-Alert--no-dismiss');
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        alertClassArray.push(className);
      });
    }

    return alertClassArray.join(' ');
  }

  alertDismiss(event): void {
    dismissAlert(event.currentTarget.parentElement);
  }
}
