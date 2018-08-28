import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Buttons
      </h2>

      <sprk-stack itemSpacing="medium">
        <sprk-button sprkStackItem>Hello, World.</sprk-button>
        <sprk-button sprkStackItem buttonType="secondary">Hello, World.</sprk-button>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Buttons, Side by Side at Medium breakpoint, Huge size spacing
      </h2>

      <sprk-stack itemSpacing="huge" splitAt="medium">
        <sprk-button sprkStackItem>Hello, World.</sprk-button>
        <sprk-button sprkStackItem buttonType="secondary">Hello, World.</sprk-button>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Three Cards
      </h2>

      <sprk-stack itemSpacing="huge" splitAt="large">
        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--equal@m"
          cardType="teaser"
          title="Test Card for Stack!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--equal@m"
          cardType="teaser"
          title="Spark Design System"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--equal@m"
          cardType="teaser"
          title="Spark Cards in a Stack Component"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>
      </sprk-stack>
    </div>
  `,
  styles: ['']
})
export class StackDocsComponent {
  constructor() {}
}
