import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'sprk-promo-docs',
  template: `
    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Promo Base
        </h2>

        <sprk-promo title="Title"
          subtitle="Subtitle subtitle subtitle"
          cta="button"
          ctaText="Learn More">
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
        </sprk-promo>
      </div>
    </div>

  <div class="drizzle-o-ContentGrouping sprk-u-mbh">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Promo With Icon
      </h2>

      <sprk-promo title="Title"
        subtitle="Subtitle subtitle subtitle"
        media="icon"
        iconType="bell"
        iconHref="sparkdesignsystem.com"
        additionalClassesIcon="sprk-c-Icon--xxl sprk-b-TypeBodyTwo"
        cta="button"
        ctaText="Learn More">
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
      </sprk-promo>
    </div>
  </div>

  <div class="drizzle-o-ContentGrouping sprk-u-mbh">
    <div class="sprk-o-CenteredColumn">
      <h2 class="drizzle-b-h2">
        Promo With Image
      </h2>

      <sprk-promo
        title="Title"
        subtitle="Subtitle"
        media="img"
        imgAlt="placeholder"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
        cta="button"
        ctaText="Learn More">
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
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
        subtitle="Subtitle"
        mediaRev="yes"
        media="img"
        imgAlt="placeholder"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg"
        imgHref="https://sparkdesignsystem.com"
        cta="button"
        ctaText="Learn More">
          Lorem ipsum dolor. Sit amet pede. Tempus donec et. Suspendisse id inventore integer eum non enim diam habitant. Maecenas nunc per lacus neque egestas. Diam quod curabitur.
      </sprk-promo>
    </div>
  </div>
  `,
  styles: ['']
})
export class PromoDocsComponent {
  constructor() {}
}
