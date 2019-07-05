import { Component, Input, OnChanges, AfterContentInit } from '@angular/core';

@Component({
  selector: 'sprk-stepper-slider',
  template: `
    <li
      class="sprk-c-Stepper__slider sprk-c-Stepper__slider--active sprk-u-Width-100"
      [ngStyle]="myStyle"
      *ngIf="selected && hasDescription"
    >
      <div
        class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description"
      >
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
        >
          <span
            class="sprk-c-Stepper__step-icon sprk-u-Visibility--hidden"
          ></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            {{ title }}
          </h3>
        </span>
        <div class="sprk-c-Stepper__step-description">
          <ng-container [ngTemplateOutlet]="content"></ng-container>
        </div>
      </div>
    </li>
  `
})
export class SprkStepperSliderComponent implements OnChanges, AfterContentInit {
  name = 'Angular';
  @Input() offsetTop = 0;
  @Input() title: string;
  @Input() content;
  @Input() selected: boolean;
  @Input() hasDescription: boolean;

  myStyle;

  ngOnChanges() {
    /// NEEDS LEFT OFFSET
    this.myStyle = { top: this.offsetTop + 'px' };
  }

  ngAfterContentInit() {}
}
