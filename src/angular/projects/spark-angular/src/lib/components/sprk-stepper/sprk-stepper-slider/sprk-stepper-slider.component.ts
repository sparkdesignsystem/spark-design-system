import { Component, Input, TemplateRef, OnChanges } from '@angular/core';

@Component({
  selector: 'sprk-stepper-slider',
  template: `
    <div
      class="sprk-c-Stepper__slider sprk-c-Stepper__slider--active"
      [ngStyle]="myStyle"
    >
      <div
        class="sprk-c-Stepper__step-content sprk-c-Stepper__step-content--has-description"
      >
        Slider
        {{ offsetTop }}
        <span
          class="sprk-c-Stepper__step-header sprk-b-Link sprk-b-Link--plain"
          aria-controls="target-1"
          id="step-1"
        >
          <span
            class="sprk-c-Stepper__step-icon sprk-u-Visibility--hidden"
          ></span>
          <h3 class="sprk-c-Stepper__step-heading" data-sprk-stepper="heading">
            Step One
          </h3>
        </span>
      </div>
    </div>
  `
})
export class SprkStepperSliderComponent implements OnChanges {
  @Input() offsetTop = 0;
  @Input() content: TemplateRef<any>;

  myStyle;

  ngOnChanges() {
    /// NEEDS LEFT OFFSET
    this.myStyle = { top: this.offsetTop + 'px' };
  }
}
