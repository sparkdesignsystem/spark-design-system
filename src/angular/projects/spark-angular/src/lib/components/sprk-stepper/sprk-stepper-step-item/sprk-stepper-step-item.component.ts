import { Component, Input } from '@angular/core';

@Component({
  selector: 'sprk-stepper-step-item',
  template: `
    <li
      [ngClass]="getClasses()"
      [attr.data-id]="idString"
      [attr.data-analytics]="analyticsString"
    >
      <div
        [ngClass]="{
          'sprk-c-Stepper__step-content': true,
          'sprk-c-Stepper__step-content--has-description': hasDescription
        }"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
        >
          <span class="sprk-c-Stepper__step-icon"></span>
          <h3 class="sprk-c-Stepper__step-heading">
            {{ title }}
          </h3>
        </span>
        <div
          [ngClass]="{
            'sprk-c-Stepper__step-description': true,
            'sprk-u-Display--none': !selected
          }"
          *ngIf="hasDescription === true && selected"
        >
          <p class="sprk-b-TypeBodyTwo">
            <ng-container [ngTemplateOutlet]="content"></ng-container>
          </p>
        </div>
      </div>
    </li>
  `
})
export class SprkStepperStepItemComponent {
  @Input() additionalClasses: string;
  @Input() idString: string;
  @Input() analyticsString: string;

  /** Check if this step is selected */
  @Input() selected: boolean;

  /** Headline of step */
  @Input() title: string;

  /** Order number of the given step. */
  @Input() index: number;

  /** Checks which step is selected */
  @Input() selectedIndex: number;

  /** If there is content for steps */
  @Input() hasDescription: boolean;

  /** Whether the given step is first. */
  @Input() first: boolean;

  /** Whether the given step is last. */
  @Input() last: boolean;

  /** Gets content inside of step */
  @Input() content;

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

    if (this.additionalClasses) {
      this.additionalClasses.split(' ').forEach(className => {
        classArray.push(className);
      });
    }

    return classArray.join(' ');
  }
}
