import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  TemplateRef
} from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'sprk-stepper-step',
  template: `
    <li [ngClass]="getClasses()">
      <!-- {{
        has-description needs to be conditional
      }} -->
      <div
        [ngClass]="{
          'sprk-c-Stepper__step-content': true,
          'sprk-c-Stepper__step-content--has-description': true
        }"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          role="tab"
          [attr.aria-selected]="selected"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            {{ label }}
          </h3>
        </span>

        <!-- {{
          needs:
          'sprk-u-HideWhenJs': !isSelected
          *ngIf="hasDescription ==== true"
          id="{{ componentID }}"
          [attr.aria-labelledby]="componentAriaLabelID"
          tabindex="0"
          role="tabpanel"
        }} -->
        <div
          [ngClass]="{
            'sprk-c-Stepper__step-description': true,
            'sprk-u-Display--none': !selected
          }"
        >
          <p class="sprk-b-TypeBodyTwo" select="description">
            <ng-container [ngTemplateOutlet]="content"></ng-container>
          </p>
        </div>
      </div>
    </li>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SprkStepperStepComponent implements OnInit, FocusableOption {
  /** State of the given step. */
  @Input() content: TemplateRef<any>;

  /** State of the given step. */
  @Input() state: string;

  /** Label of the given step. */
  // @Input() label: MatStepLabel | string;
  @Input() label: string;

  /** Overrides for the header icons, passed in via the stepper. */
  // @Input() iconOverrides: {[key: string]: TemplateRef<MatStepperIconContext>};

  /** Index of the given step. */
  @Input() index: number;

  /** Whether the given step is selected. */
  @Input() selected: boolean;

  /** Whether the given step label is active. */
  @Input() active: boolean;

  /** Whether the given step is optional. */
  @Input() optional: boolean;

  /** Whether the given step is first. */
  @Input() first: boolean;

  /** Whether the given step is last. */
  @Input() last: boolean;

  constructor(private _element: ElementRef) {}

  getClasses(): string {
    const classArray: string[] = ['sprk-c-Stepper__step'];

    // Apply Class if active
    if (this.selected) {
      classArray.push('sprk-c-Stepper__step--selected');
    }

    // Apply Class if last
    if (this.last) {
      classArray.push('sprk-c-Stepper__step--last');
    }

    // Apply step if first
    if (this.first) {
      classArray.push('sprk-c-Stepper__step--first');
    }

    return classArray.join(' ');
  }

  ngOnInit() {}

  focus() {
    return this._element.nativeElement.focus();
  }
}
