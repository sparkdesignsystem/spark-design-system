import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <sprk-card cardType="base">
        This is a base Spark card!
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Button CTA
      </h2>

      <sprk-card
        cardType="teaser"
        title="Spark Card With Button CTA!"
        imgSrc=""
        imgAlt="Placeholder Image"
        imgHref="staging.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark">
        Spark Card Content placeholder!
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Link CTA
      </h2>

      <sprk-card
        cardType="teaser"
        title="Spark Card with a link CTA"
        imgSrc=""
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="link"
        ctaText="Neat!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Link: Spark"
        >
        Hello, World.
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Different Element Order
      </h2>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Two Up
      </h2>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Three Up
      </h2>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Four Up
      </h2>
    </div>
  `,
  styles: ['']
})
export class CardDocsComponent {

  constructor() { }
}
