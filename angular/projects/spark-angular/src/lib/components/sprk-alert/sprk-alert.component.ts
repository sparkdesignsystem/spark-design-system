import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-alert',
  template: `
    <div
      *ngIf="visible"
      [ngClass]="getClassesAlertContainer()"
      role="alert"
      [attr.data-analytics]="analyticsString"
      [attr.data-id]="idString"
    >
      <div class="sprk-c-Alert__content">
        <sprk-icon
          iconType="{{ icon }}"
          additionalClasses="sprk-c-Alert__icon sprk-c-Icon--l sprk-c-Icon--stroke-current-color"
          aria-hidden="true"
        ></sprk-icon>

        <p class="sprk-c-Alert__text"><ng-content></ng-content></p>
      </div>

      <button
        *ngIf="dismissible !== false"
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        (click)="alertDismiss($event)"
      >
        <sprk-icon
          iconType="close"
          additionalClasses="sprk-c-Icon--stroke-current-color"
          aria-hidden="true"
        ></sprk-icon>
      </button>
    </div>
  `
})
export class SprkAlertComponent {
  @Input()
  alertType: string;
  @Input()
  analyticsString: string;
  @Input()
  idString: string;
  @Input()
  additionalClasses: string;
  @Input()
  dismissible: boolean; // Shows/hides dismiss button based on value

  public icon: string;
  public visible = true;

  getClassesAlertContainer(): string {
    const alertClassArray: string[] = ['sprk-c-Alert'];

    switch (this.alertType) {
      case 'success':
        alertClassArray.push('sprk-c-Alert--success');
        this.icon = 'check-mark';
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

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        alertClassArray.push(className);
      });
    }

    return alertClassArray.join(' ');
  }

  alertDismiss(event): void {
    this.visible = false;
  }
}
