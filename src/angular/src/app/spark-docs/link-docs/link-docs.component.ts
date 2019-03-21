import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-link-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">External Links</h2>

      <sprk-link href="https://www.google.com" additionalClasses="sprk-u-mrm"
        >https://www.google.com</sprk-link
      >
      <sprk-link href="http://www.google.com">http://www.google.com</sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Same Page Links</h2>

      <sprk-link href="#info" additionalClasses="sprk-u-mrm"
        >Jump Link</sprk-link
      >
      <sprk-link href="/buttons#foo" aria-label="foo"
        >Jump Link With Page</sprk-link
      >
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link with no href provided</h2>

      <sprk-link>No href provided.</sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link Using External Input</h2>

      <sprk-link href="tel:+123456789" isExternal="true"> Spark </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link Using tel</h2>

      <sprk-link href="tel:+123456789"> Tel Link </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link Using mailto</h2>

      <sprk-link href="mailto:example@example.com"> mailto Link </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Link</h2>

      <sprk-link
        href="/alerts"
        idString="link-1"
        analyticsString="object.action.event"
        target="_blank"
      >
        This is a standard Spark Link!
      </sprk-link>

      <p>
        Here is a
        <sprk-link
          href="/alerts"
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
      <h2 class="drizzle-b-h2">Simple Link</h2>

      <sprk-link
        linkType="simple"
        href="/alerts"
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
        href="/buttons"
        idString="link-3"
        analyticsString="object.action.event"
      >
        Link with Margin Bottom class
      </sprk-link>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Disabled Link</h2>

      <sprk-link
        isDisabled="true"
        href="/buttons"
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
        href="/icons"
        idString="link-5"
        analyticsString="object.action.event"
      >
        <sprk-icon
          iconType="communication"
          additionalClasses="sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-u-mrs"
        ></sprk-icon>

        Message Us
      </sprk-link>
    </div>
    <div id="info">Hi, I'm info!</div>
  `,
  styles: ['']
})
export class LinkDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
