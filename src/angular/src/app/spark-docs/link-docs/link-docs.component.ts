import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-link-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Link
      </h2>

      <sprk-link href="/links">
        This is a standard Spark Link!
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Standalone Link
      </h2>

      <sprk-link linkType="standalone" href="/links">
        Hello, World.
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Additional Classes
      </h2>

      <sprk-link additionalClasses="sprk-u-mbm" href="/links">
        Link with Margin Bottom class
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Disabled Link
      </h2>

      <sprk-link linkType="disabled" href="/links">
        This is a Spark Disabled Link
      </sprk-link>
    </div>
  `,
  styles: ['']
})
export class LinkDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
