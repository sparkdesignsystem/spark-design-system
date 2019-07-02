import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper</h2>

      <!-- {{
        Needs hasDescription or none of the descriptions will show */
      }} -->
      <sprk-stepper [hasDescription]="true">
        <sprk-stepper-step title="Step 1">
          Description
        </sprk-stepper-step>
        <sprk-stepper-step title="Step 2" [isSelected]="true">
          Description
        </sprk-stepper-step>
        <sprk-stepper-step title="Step 3">
          Description
        </sprk-stepper-step>
      </sprk-stepper>
    </div>
  `
})
export class StepperDocsComponent {
  constructor() {}
}
