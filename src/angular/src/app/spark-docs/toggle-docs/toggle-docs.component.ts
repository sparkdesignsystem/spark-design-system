import { Component } from '@angular/core';

@Component({
  selector: 'sprk-toggle-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Toggle
      </h2>

      <sprk-toggle
        title="This is a Spark toggle!"
        body="This is some copy for the toggle about toggle things."
        analyticsString="My disclaimer Title">
      </sprk-toggle>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Toggle With Additional Classes
      </h2>

      <sprk-toggle
        title="This is a Spark toggle with width set at 10%"
        body="This is some copy for the toggle about toggle things."
        analyticsString="My disclaimer Title"
        additionalClasses="sprk-u-Width-10">
      </sprk-toggle>
    </div>
  `,
  styles: ['']
})
export class ToggleDocsComponent {
  constructor() {}
}
