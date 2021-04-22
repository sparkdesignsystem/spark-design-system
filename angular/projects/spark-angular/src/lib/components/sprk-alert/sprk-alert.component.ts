import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'sprk-alert',
  template: `
    <div
      *ngIf="isVisible"
      [ngClass]="getClassesAlertContainer()"
      role="alert"
      [attr.data-analytics]="analyticsString"
      [attr.data-id]="idString"
    >
      <div class="sprk-c-Alert__content">
        <sprk-icon
          [iconName]="getIconName()"
          additionalClasses="sprk-c-Alert__icon sprk-c-Icon--xl sprk-c-Icon--filled sprk-c-Icon--filled-current-color"
          ariaHidden="true"
        ></sprk-icon>

        <p class="sprk-c-Alert__text"><ng-content></ng-content></p>
      </div>

      <button
        *ngIf="isAlertDismissible !== false"
        class="sprk-c-Alert__icon sprk-c-Alert__icon--dismiss"
        type="button"
        title="Dismiss"
        (click)="alertDismiss($event)"
      >
        <sprk-icon
          iconName="{{ dismissIconName }}"
          additionalClasses="sprk-c-Icon--filled-current-color sprk-c-Icon--stroke-current-color"
          ariaHidden="true"
        ></sprk-icon>
      </button>
    </div>
  `,
})
export class SprkAlertComponent implements OnChanges {
  /**
   * The type of Alert variant to render.
   * Can be `info`, `fail`, or `success`.
   */
  @Input()
  variant: 'success' | 'fail' | 'info';
  /**
   * Deprecated - Use `variant` instead.
   * The type of Alert variant to render.
   * Can be `info`, `fail`, or `success`.
   */
  // TODO: Remove `alertType` and update variant default to be info - issue #1281.
  @Input()
  alertType: 'success' | 'fail' | 'info' = 'info';
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
  isDismissible: boolean;
  /**
   * Deprecated - Use `isDismissible` instead.
   * If `false`, the dismiss button will not be rendered and
   * the Alert will not dismissible.
   * If `true`, the dismiss button will be rendered and
   * the Alert will be dismissible.
   */
  @Input()
  dismissible: boolean;
  /**
   * Determines which icon is rendered.
   * Expects the value to match the exact name
   * of the icon found in the docs.
   * (i.e. `chevron-down`, instead of `chevron down`).
   * A Success Alert will use `check-mark-filled` as a default.
   * An Info Alert will use `bell-filled` as a default.
   * A Fail Alert will use `exclamation-filled` as a default.
   */
  @Input()
  iconName: string;
  /**
   * Determines what dismiss icon is rendered.
   * Expects the value to match the exact name
   * of the icon found in the docs.
   * (i.e. `chevron-down`, instead of `chevron down`).
   */
  @Input()
  dismissIconName: string = 'close';
  /**
   * If `true`, the Alert will be shown.
   * If `false`, the Alert will not be shown.
   */
  @Input()
  isVisible: boolean = true;
  /**
   * Accepts a function to run when the
   * Alert is dismissed.
   */
  @Output()
  dismissEvent = new EventEmitter<any>();
  /**
   * @ignore
   */
  isAlertDismissible: boolean;

  /**
   * @ignore
   */
  getClassesAlertContainer(): string {
    // TODO: Remove `alertType` and update variantToUse to `variant` - issue #1281.
    const variantToUse = this.variant || this.alertType;
    const variantClasses = {
      success: 'sprk-c-Alert--success',
      info: 'sprk-c-Alert--info',
      fail: 'sprk-c-Alert--fail',
    };
    const alertClassArray: string[] = ['sprk-c-Alert'];
    alertClassArray.push(variantClasses[variantToUse]);

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach((className) => {
        alertClassArray.push(className);
      });
    }

    return alertClassArray.join(' ');
  }

  /**
   * @ignore
   */
  getIconName(): string {
    const variantToUse = this.variant || this.alertType;
    const variantIcons = {
      success: 'check-mark-filled',
      info: 'bell-filled',
      fail: 'exclamation-filled',
    };
    const icon =
      this.iconName !== undefined ? this.iconName : variantIcons[variantToUse];

    return icon;
  }

  /**
   * When the dismiss button is clicked
   * this method sets `isVisible` to `false`
   * and hides the Alert component.
   */
  alertDismiss(event): void {
    this.isVisible = false;
    this.dismissEvent.emit();
  }

  // TODO: Remove when `dismissible` is deprecated - issue #1281.
  ngOnChanges(changes: SimpleChanges) {
    if (changes['isDismissible']) {
      this.isAlertDismissible = changes['isDismissible'].currentValue;
    } else if (changes['dismissible']) {
      this.isAlertDismissible = changes['dismissible'].currentValue;
    }
  }
}
