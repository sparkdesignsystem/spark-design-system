import { Component } from '@angular/core';

@Component({
  selector: 'sprk-highlight-board-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">Highlight Board Default</h2>

        <sprk-highlight-board
          heading="Hello, Welcome To Spark Design System"
          ctaText="Designers"
          ctaHref="https://sparkdesignsystem.com/"
          ctaText2="Developers"
          ctaHref2="https://sparkdesignsystem.com/"
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="placeholder"
          idString="highlightboard-1"
        >
        </sprk-highlight-board>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">Highlight Board Default 2</h2>

        <sprk-highlight-board
          heading="Highlight Board Heading Example"
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="placeholder"
          idString="highlightboard-2"
        >
        </sprk-highlight-board>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">Highlight Board With No Image</h2>

        <sprk-highlight-board
          heading="Highlight Board Heading Example"
          ctaText="Learn More"
          ctaText2="Learn More"
          type="noImage"
          idString="highlightboard-3"
        >
        </sprk-highlight-board>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">Highlight Board Stacked</h2>

        <sprk-highlight-board
          heading="Highlight Board Heading Example"
          ctaText="Learn More"
          type="stacked"
          imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="placeholder"
          idString="highlightboard-4"
        >
        </sprk-highlight-board>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Highlight Board Full Width</h2>

      <sprk-highlight-board
        heading="Hello, Welcome To Spark"
        ctaText="Designers"
        ctaHref="https://sparkdesignsystem.com/"
        ctaText2="Developers"
        ctaHref2="https://sparkdesignsystem.com/"
        imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        imgAlt="placeholder"
        idString="highlightboard-5"
        additionalClasses="sprk-u-FullWidth"
      >
      </sprk-highlight-board>
    </div>
  `,
  styles: ['']
})
export class HighlightBoardDocsComponent {
  constructor() {}
}
