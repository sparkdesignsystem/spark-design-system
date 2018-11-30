import { Component } from '@angular/core';

@Component({
  selector: 'sprk-toggle-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Toggle</h2>

      <sprk-toggle
        title="This is a Spark toggle!"
        analyticsString="My disclaimer Title"
        idString="toggle-1"
      >
        <p>This is some copy for the toggle about toggle things.</p>
      </sprk-toggle>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Toggle With Additional Classes</h2>

      <sprk-toggle
        title="This is a Spark toggle with width set at 10%"
        analyticsString="My disclaimer Title"
        additionalClasses="sprk-u-Width-10"
        idString="toggle-2"
      >
        <p class="sprk-b-TypeBodyFour">
          This is some copy for the toggle about toggle things.
        </p>
      </sprk-toggle>
    </div>
  `
})
export class ToggleDocsComponent {
  constructor() {}
}
