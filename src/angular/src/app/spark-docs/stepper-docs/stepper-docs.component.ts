import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper</h2>
      <sprk-stepper idString="stepper1">
        <sprk-stepper-step
          title="Step 1"
          idString="step-1"
          analyticsString="step1"
        >
        </sprk-stepper-step>
        <sprk-stepper-step title="Step 2"> </sprk-stepper-step>
        <sprk-stepper-step title="Step 3"> </sprk-stepper-step>
      </sprk-stepper>

      <h2 class="drizzle-b-h2">Stepper With Description and Default Active</h2>
      <sprk-stepper idString="stepper2" [hasDescription]="true">
        <sprk-stepper-step title="Step 1">
          Description
        </sprk-stepper-step>
        <sprk-stepper-step title="Step 2">
          Description
        </sprk-stepper-step>
        <sprk-stepper-step title="Step 3" [isSelected]="true">
          Description
        </sprk-stepper-step>
      </sprk-stepper>

      <h2 class="drizzle-b-h2">Stepper with Dark Background</h2>
      <div class="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
        <sprk-stepper
          analyticsString="stepper-dark-bg"
          idString="stepper3"
          [hasDescription]="true"
          [hasDarkBg]="true"
        >
          <sprk-stepper-step title="Step 1">
            Description
          </sprk-stepper-step>
          <sprk-stepper-step title="Step 2">
            Description
          </sprk-stepper-step>
          <sprk-stepper-step title="Step 3" [isSelected]="true">
            Description
          </sprk-stepper-step>
        </sprk-stepper>
      </div>
    </div>
  `
})
export class StepperDocsComponent {
  constructor() {}
}
