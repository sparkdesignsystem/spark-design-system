import { Component, Input } from '@angular/core';
import { dismissAlert } from '@sparkdesignsystem/spark-core/components/alerts';

@Component({
  selector: 'sprk-alert',
  template: `
    <div
      class="sprk-c-Alert"
      role="alert"
      data-sprk-alert="container"
      [attr.data-analytics]="analyticsString">
      <div [ngClass]="getClasses()">
        <svg
          class="sprk-c-Icon sprk-c-Icon--l"
          viewBox="0 0 448 512"
          aria-hidden="true">
          <use [attr.xlink:href]="icon"></use>
        </svg>
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
        data-sprk-alert="dismiss"
        (click)="alertDismiss($event)">
        <svg
          class="sprk-c-Icon sprk-c-Icon--l"
          viewBox="0 0 384 512"
          aria-hidden="true">
          <use xlink:href="#times"></use>
        </svg>
      </button>
    </div>
  `,
  styles: ['']
})

export class SparkAlertComponent {
  @Input() alertType: string;
  @Input() analyticsString: string;
  @Input() additionalClasses: string;
  @Input() dismissible: boolean;

  public icon: string;

  getClasses(): string {
    let classArray: Array<String> = [
      'sprk-c-Alert__icon'
    ];

    switch (this.alertType) {
      case 'success':
        classArray.push('sprk-c-Alert__icon--success');
        this.icon = '#check';
        break;
      case 'info':
        classArray.push('sprk-c-Alert__icon--info');
          this.icon = '#bell';
        break;
      case 'fail':
        classArray.push('sprk-c-Alert__icon--fail');
        this.icon = '#exclamation';
        break;
      default:
        break;
    }

    if(this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        classArray.push(className);
      })
    }

    return classArray.join(' ');
  }

  alertDismiss(event): void {
    if (this.dismissible) {
      dismissAlert(event.currentTarget.parentElement);
    }
  }
}
