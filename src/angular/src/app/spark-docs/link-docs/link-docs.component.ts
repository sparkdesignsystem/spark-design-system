import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-link-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link</h2>

      <sprk-link
        href="/links"
        idString="link-1"
        analyticsString="object.action.event"
        target="_blank"
      >
        This is a standard Spark Link!
      </sprk-link>

      <p>
        Here is a
        <sprk-link
          href="/links"
          idString="link-1"
          analyticsString="object.action.event"
          target="_blank"
        >
          link
        </sprk-link>
        in the middle of a line
      </p>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Standalone Link</h2>

      <sprk-link
        linkType="standalone"
        href="/links"
        idString="link-2"
        analyticsString="object.action.event"
      >
        Hello, World.
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Additional Classes</h2>

      <sprk-link
        additionalClasses="sprk-u-mbm"
        href="/links"
        idString="link-3"
        analyticsString="object.action.event"
      >
        Link with Margin Bottom class
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Disabled Link</h2>

      <sprk-link
        linkType="disabled"
        href="/links"
        idString="link-4"
        analyticsString="object.action.event"
      >
        This is a Spark Disabled Link
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Icon With Text Link</h2>

      <sprk-link
        linkType="icon"
        href="/links"
        idString="link-5"
        analyticsString="object.action.event"
      >
        <sprk-icon
          iconType="communication"
          additionalClasses="sprk-c-Icon--l sprk-c-Icon--current-color sprk-u-mrs"
        ></sprk-icon>

        Message Us
      </sprk-link>
    </div>
  `,
  styles: ['']
})
export class LinkDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
