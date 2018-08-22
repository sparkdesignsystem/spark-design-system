import { Component } from '@angular/core';

@Component({
  selector: 'sprk-highlight-board-docs',
  template: `
  <div class="drizzle-o-ContentGrouping">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Highlight Board Default
      </h2>

      <sprk-highlight-board
        heading="Highlight Board Heading Example"
        subHeading="Sub heading example for the Highlight Board component."
        ctaText="Learn More"
        imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg">
      </sprk-highlight-board>
    </div>
  </div>

  <div class="drizzle-o-ContentGrouping">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Highlight Board With No Image
      </h2>

      <sprk-highlight-board
        heading="Highlight Board Heading Example"
        subHeading="Sub heading example for the Highlight Board component."
        ctaText="Learn More"
        type="noImage">
      </sprk-highlight-board>
    </div>
  </div>

  <div class="drizzle-o-ContentGrouping">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Highlight Board Stacked
      </h2>

      <sprk-highlight-board
        heading="Highlight Board Heading Example"
        subHeading="Sub heading example for the Highlight Board component."
        ctaText="Learn More"
        type="stacked"
        imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg">
      </sprk-highlight-board>
    </div>
  </div>

  <div class="drizzle-o-ContentGrouping">
    <h2 class="drizzle-b-h2">
      Highlight Board Full Width
    </h2>

    <sprk-highlight-board
      heading="Highlight Board Heading Example"
      subHeading="Sub heading example for the Highlight Board component."
      ctaText="Learn More"
      ctaTwoText="CTA Two"
      type="fullWidth"
      imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg">
    </sprk-highlight-board>
  </div>
  `,
  styles: ['']
})

export class HighlightBoardDocsComponent {
  constructor() { }
}
