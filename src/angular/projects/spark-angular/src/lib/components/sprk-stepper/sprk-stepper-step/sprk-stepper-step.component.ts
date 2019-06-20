import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  TemplateRef
} from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'sprk-stepper-step',
  template: `
    <li [ngClass]="getClasses()" (click)="onClick()">
      <!-- {{
        has-description needs to be conditional
      }} -->
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
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            {{ label }}
          </h3>
        </span>

        <!-- {{
          needs:
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
          *ngIf="hasDescription === true && selected"
        >
          <p class="sprk-b-TypeBodyTwo">
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
  @Input() hasDescription: boolean;

  // Contains description
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

  // Sends offsetTop to parent so slider knows where to go
  @Output() getOffset: EventEmitter<any> = new EventEmitter();

  onClick() {
    const offsetTopOfStep = this._element.nativeElement.offsetTop;
    this.getOffset.emit(offsetTopOfStep);
    // getStepContent and emit it
  }

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

  ngOnInit() {
    // console.log('CONTENT', this.content);
    console.log('offsetTop', this._element.nativeElement.offsetTop);
  }

  focus() {
    return this._element.nativeElement.focus();
  }
}
