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
  /**
   * The type of Alert variant to render.
   * 	Can be `info`, `fail`, or `success`.
   */
  @Input()
  alertType: string;
  /**
   * The value supplied will be assigned to the
   * `data-analytics` attribute on the component.
   * Intended for an outside
   * library to capture data.
   */
  @Input()
  analyticsString: string;
  /**
   * The value supplied will be assigned
   * to the `data-id` attribute on the
   * component. This is intended to be
   * used as a selector for automated
   * tools. This value should be unique
   * per page.
   */
  @Input()
  idString: string;
  /**
   * Expects a space separated string
   * of classes to be added to the
   * component.
   */
  @Input()
  additionalClasses: string;
  /**
   * If `false`, the dismiss button will not be rendered and
   * the Alert will not dismissible.
   * If `true`, the dismiss button will be rendered and
   * the Alert will be dismissible.
   */
  @Input()
  dismissible: boolean;

  /**
   * @ignore
   */
  public icon: string;
  /**
   * @ignore
   */
  public visible = true;

  /**
   * @ignore
   */
  getClassesAlertContainer(): string {
    const alertClassArray: string[] = ['sprk-c-Alert'];

    switch (this.alertType) {
      case 'success':
        alertClassArray.push('sprk-c-Alert--success');
        this.icon = 'check-mark-filled';
        break;
      case 'info':
        alertClassArray.push('sprk-c-Alert--info');
        this.icon = 'bell-filled';
        break;
      case 'fail':
        alertClassArray.push('sprk-c-Alert--fail');
        this.icon = 'exclamation-filled';
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

  /**
   * When the dismiss button is clicked
   * this method sets the visable state to `false`
   * and hides the Alert component.
   */
  alertDismiss(event): void {
    this.visible = false;
  }
}
