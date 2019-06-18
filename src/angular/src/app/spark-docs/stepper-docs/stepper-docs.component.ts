import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper</h2>

      <sprk-stepper #stepper [hasDescription]="false">
        <cdk-step [label]="'1st Step'"></cdk-step>
        <cdk-step [label]="'2nd Step'"></cdk-step>
        <cdk-step [label]="'3rd Step'"></cdk-step>
      </sprk-stepper>

      <h2 class="drizzle-b-h2">Stepper With Description</h2>
      <sprk-stepper #stepper [hasDescription]="true">
        <cdk-step [label]="'1st Step'">
          1
        </cdk-step>
        <cdk-step [label]="'2nd Step'">
          2 Content
        </cdk-step>
        <cdk-step [label]="'3rd Step'">
          3rd
          <img
            src="https://www.pizzeria-kebap-erdal.ch/bilder/startseite/pizzahome.jpg"
            alt="pizza1"
          />
        </cdk-step>
      </sprk-stepper>

      <h2 class="drizzle-b-h2">Stepper Has Dark Bg</h2>
      <div class="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
        <sprk-stepper #stepper [hasDescription]="true" [hasDarkBg]="true">
          <cdk-step [label]="'1st Step'">
            1
          </cdk-step>
          <cdk-step [label]="'2nd Step'">
            2 Content
          </cdk-step>
          <cdk-step [label]="'3rd Step'">
            <div>
              3rd
              <img
                src="https://www.pizzeria-kebap-erdal.ch/bilder/startseite/pizzahome.jpg"
                alt="pizza1"
              />
              <div>
                <button cdkStepperPrevious>Back</button>
                <button (click)="stepper.reset()">Reset</button>
              </div>
            </div>
          </cdk-step>
        </sprk-stepper>
      </div>
    </div>
  `
})
export class StepperDocsComponent {
  constructor() {}
}
