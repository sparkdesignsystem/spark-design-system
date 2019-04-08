import { Component } from '@angular/core';

@Component({
  selector: 'sprk-stepper-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper</h2>

      <sprk-stepper idString="stepper-1">
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

      <sprk-stepper idString="stepper-1">
        <sprk-stepper-step
          heading="Step 1"
          isDefaultActive="true"
          variant="hasDescription"
        >
          <p class="sprk-b-TypeBodyTwo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </sprk-stepper-step>

        <sprk-stepper-step heading="Step 2" variant="hasDescription">
          <p class="sprk-b-TypeBodyTwo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </sprk-stepper-step>

        <sprk-stepper-step heading="Step 3" variant="hasDescription">
          <p class="sprk-b-TypeBodyTwo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </sprk-stepper-step>
      </sprk-stepper>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Stepper With Dark Background</h2>

      <div class="sprk-u-BackgroundColor--blue sprk-o-Box">
        <sprk-stepper idString="stepper-2" hasDarkBg="true">
          <sprk-stepper-step heading="Step 1" variant="hasDescription">
            <p class="sprk-b-TypeBodyTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </sprk-stepper-step>

          <sprk-stepper-step
            heading="Step 2"
            isDefaultActive="true"
            variant="hasDescription"
          >
            <p class="sprk-b-TypeBodyTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </sprk-stepper-step>

          <sprk-stepper-step heading="Step 3" variant="hasDescription">
            <p class="sprk-b-TypeBodyTwo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </sprk-stepper-step>
        </sprk-stepper>
      </div>
    </div>
  `
})
export class StepperDocsComponent {
  constructor() {}
}
