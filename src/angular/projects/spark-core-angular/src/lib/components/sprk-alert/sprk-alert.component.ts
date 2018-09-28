import { Component, Input } from '@angular/core';

import { dismissAlert } from '@sparkdesignsystem/spark-core/es5/alerts';

@Component({
  selector: 'sprk-alert',
  template: `
    <div
      role="alert"
      [attr.data-analytics]="analyticsString"
      [ngClass]="getClassesAlertContainer()">
      <div [ngClass]="getClasses()">
        <sprk-icon iconType="{{ icon }}" additionalClasses="sprk-c-Icon--l"></sprk-icon>
      </div>

      <div class="sprk-c-Alert__text">
        <p class="sprk-b-TypeBodyOne sprk-u-TextColor--gray-dark">
          <ng-content></ng-content>
        </p>
      </div>

      <button
        *ngIf="dismissible"
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        (click)="alertDismiss($event)">
        <sprk-icon iconType="times" additionalClasses="sprk-c-Icon--l"></sprk-icon>
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

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Alert__icon'];

    switch (this.alertType) {
      case 'success':
        classArray.push('sprk-c-Alert__icon--success');
        this.icon = 'check';
        break;
      case 'info':
        classArray.push('sprk-c-Alert__icon--info');
        this.icon = 'bell';
        break;
      case 'fail':
        classArray.push('sprk-c-Alert__icon--fail');
        this.icon = 'exclamation';
        break;
      default:
        break;
    }

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }

  getClassesAlertContainer(): string {
    const alertClassArray: string[] = ['sprk-c-Alert'];

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
