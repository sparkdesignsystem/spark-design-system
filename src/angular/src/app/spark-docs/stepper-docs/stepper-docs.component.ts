import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper</h2>

      <sprk-stepper idString="stepper-1">
        <sprk-stepper-step heading="Step One">
        </sprk-stepper-step>

        <sprk-stepper-step heading="Step Two"></sprk-stepper-step>

        <sprk-stepper-step
          heading="Step Three"
          isDefaultActive="true"
        >
        </sprk-stepper-step>
      </sprk-stepper>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large">
      <h2 class="drizzle-b-h2">Stepper Dark Bg</h2>

      <sprk-stepper idString="stepper-1" [hasDarkBg]="true">
        <sprk-stepper-step heading="Step One"></sprk-stepper-step>

        <sprk-stepper-step heading="Step Two"></sprk-stepper-step>

        <sprk-stepper-step
          heading="Step Three"
          isDefaultActive="true"
        ></sprk-stepper-step>
      </sprk-stepper>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper With Descriptions</h2>

      <sprk-stepper idString="stepper-1" [hasDescription]="true">
        <sprk-stepper-step
          heading="Step 1"
          isDefaultActive="true"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </sprk-stepper-step>

        <sprk-stepper-step heading="Step 2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </sprk-stepper-step>

        <sprk-stepper-step heading="Step 3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </sprk-stepper-step>
      </sprk-stepper>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper With Dark Background</h2>

      <div class="sprk-u-BackgroundColor--blue sprk-o-Box">
        <sprk-stepper idString="stepper-2" hasDarkBg="true">
          <sprk-stepper-step heading="Step 1" variant="hasDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </sprk-stepper-step>

          <sprk-stepper-step
            heading="Step 2"
            isDefaultActive="true"
            variant="hasDescription"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </sprk-stepper-step>

          <sprk-stepper-step heading="Step 3" variant="hasDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </sprk-stepper-step>
        </sprk-stepper>
      </div>
    </div>
  `
})
export class StepperDocsComponent {
  constructor() {}
}
