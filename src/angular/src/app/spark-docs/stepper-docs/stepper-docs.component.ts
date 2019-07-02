import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper</h2>

      <sprk-stepper>
        <sprk-stepper-step title="1">
          Description
        </sprk-stepper-step>
      </sprk-stepper>
    </div>
  `
})
export class StepperDocsComponent {
  constructor() {}
}
