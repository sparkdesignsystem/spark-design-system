import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Buttons
      </h2>

      <sprk-stack itemSpacing="medium">
        <button sprkButton sprkStackItem>Hello, World.</button>
        <button sprkButton sprkStackItem additionalClasses="sprk-c-Button--secondary">Hello, World.</button>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Buttons, Side by Side at Medium breakpoint, Huge size spacing
      </h2>

      <sprk-stack itemSpacing="huge" splitAt="medium">
        <button sprkButton sprkStackItem>Hello, World.</button>
        <button sprkButton sprkStackItem additionalClasses="sprk-c-Button--secondary">Hello, World.</button>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Three Cards
      </h2>

      <sprk-stack itemSpacing="huge" splitAt="large">
        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
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
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
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
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
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

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Stack With Two Equal Width Cols, Split At Tiny
      </h2>

      <sprk-stack itemSpacing="medium" splitAt="tiny">
        <div sprkStackItem class="sprk-o-Stack__item--flex@xs">
          <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
             Column One
           </h2>

          <sprk-stack itemSpacing="small">
            <div sprkStackItem>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#">
                Link 1
              </a>
            </div>

            <div sprkStackItem>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#">
                Link 2
              </a>
            </div>

           <div sprkStackItem>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#">
                Link 3
              </a>
            </div>
          </sprk-stack>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--flex@xs">
          <h2 class="sprk-b-TypeDisplaySix sprk-u-mbs">
             Column Two
           </h2>

          <sprk-stack itemSpacing="small">
            <div sprkStackItem>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#">
                Link 1
              </a>
            </div>

            <div sprkStackItem>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#">
                Link 2
              </a>
            </div>

           <div sprkStackItem>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#">
                Link 3
              </a>
            </div>
          </sprk-stack>
        </div>
      </sprk-stack>
    </div>
  `,
  styles: ['']
})
export class StackDocsComponent {
  constructor() {}
}
