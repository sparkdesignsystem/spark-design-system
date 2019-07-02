import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper',
  template: `
    <h1>Stepper here</h1>
    <sprk-stepper-slider></sprk-stepper-slider>
    <sprk-stepper-step-item></sprk-stepper-step-item>
  `
})
export class SprkStepperComponent {
  name = 'Angular';
}
