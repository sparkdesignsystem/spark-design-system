import { Component } from '@angular/core';

@Component({
  selector: 'sprk-promo-docs',
  template: `
    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Promo Base
        </h2>

        <sprk-promo title="Placeholder title text">
          Text in the body of the promo.
        </sprk-promo>
      </div>
    </div>

  <div class="drizzle-o-ContentGrouping sprk-u-mbh">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Promo With Icon
      </h2>

      <sprk-promo title="Placeholder title text"
        media="icon"
        iconType="bell"
        iconHref="sparkdesignsystem.com"
        additionalClassesIcon="sprk-c-Icon--l sprk-b-TypeBodyTwo"
        cta="link"
        ctaText="Learn More">
          Text in the body of the promo.
      </sprk-promo>
    </div>
  </div>

  <div class="drizzle-o-ContentGrouping sprk-u-mbh">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Promo With Image
      </h2>

      <sprk-promo
        title="Placeholder title text"
        media="img"
        imgAlt="placeholder"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
        cta="button"
        ctaText="Learn More">
          Text in the body of the promo.
      </sprk-promo>
    </div>
  </div>

  <div class="drizzle-o-ContentGrouping sprk-u-mbh">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Promo With Reversed Image
      </h2>

      <sprk-promo
        title="Placeholder title text"
        mediaRev="yes"
        media="img"
        imgAlt="placeholder"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
        imgHref="https://sparkdesignsystem.com"
        cta="button"
        ctaText="Learn More">
          Text in the body of the promo.
          Text in the body of the promo.
          Text in the body of the promo.
          Text in the body of the promo.
          Text in the body of the promo.
          Text in the body of the promo.
          Text in the body of the promo.
      </sprk-promo>
    </div>
  </div>
  `,
  styles: ['']
})

export class PromoDocsComponent {
  constructor() { }
}
