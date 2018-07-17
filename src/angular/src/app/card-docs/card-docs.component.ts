import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <sprk-card cardType="base">
        <h4>This is a base Spark card!</h4>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Random Things
      </h2>

      <sprk-card cardType="base">
        <h4>
          This is a base Spark card!
        </h4>

        <p>
          You can put anything in here, really.
        </p>

        <sprk-icon iconType="bell" additionalClasses="sprk-c-Icon--l"></sprk-icon>

        <sprk-list listType="indented">
          <sprk-list-item>hi</sprk-list-item>
          <sprk-list-item>ciao</sprk-list-item>
          <sprk-list-item>bonjour</sprk-list-item>
        </sprk-list>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Additoinal Classes
      </h2>

      <sprk-card cardType="base" additionalClasses="sprk-u-mbl">
        <h4>
          This is a base Spark card!
        </h4>

        <p>
          You can put anything in here, really.
        </p>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Button CTA
      </h2>

      <sprk-card
        cardType="teaser"
        title="Spark Card With Button CTA!"
        body="
          Content placeholder! Things! Content placeholder!
          Things! Content placeholder! Things! Content placeholder!
          Things!
        "
        imgSrc=""
        imgAlt="Placeholder Image"
        imgHref="staging.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Link CTA
      </h2>

      <sprk-card
        cardType="teaser"
        title="Spark Card with a link CTA"
        body="
          Content placeholder! Things! Content placeholder!
          Things! Content placeholder! Things! Content placeholder!
          Things!
        "
        imgSrc=""
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="link"
        ctaText="Neat!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Link: Spark">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Heading on Top
      </h2>

      <sprk-card
        cardType="teaserHeading"
        title="Teaser Heading On Top of Image"
        body="
          Placeholder text that is here in this card!
        "
        imgSrc=""
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="link"
        ctaText="Neat!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Link: Spark">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Two Up
      </h2>

      <div class="sprk-o-Stack sprk-o-Stack--large sprk-o-Stack--split@l">
        <sprk-card
          cardType="teaserHeading"
          additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--equal@l"
          title="Teaser Heading On Top of Image"
          body="
            Placeholder text that is here in this card!
          "
          imgSrc=""
          imgAlt="Placeholder Image"
          imgHref="www.sparkdesignsystem.com"
          ctaType="link"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>

        <sprk-card
          cardType="teaserHeading"
          additionalClasses="sprk-o-Stack__item sprk-o-Stack__item--equal@l"
          title="Teaser Heading On Top of Image"
          body="
            Placeholder text that is here in this card!
          "
          imgSrc=""
          imgAlt="Placeholder Image"
          imgHref="www.sparkdesignsystem.com"
          ctaType="link"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>
      </div>
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
