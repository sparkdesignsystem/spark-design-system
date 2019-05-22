import { Component } from '@angular/core';

@Component({
  selector: 'sprk-carousel-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Carousel</h2>
      <sprk-carousel
        additionalClasses="sprk-u-BackgroundColor--blue sprk-o-Box sprk-o-Box--large"
        idString="stepper-carousel-01"
        analyticsString="stepper-carousel-01"
      >
        <sprk-carousel-item imageSrc="https://via.placeholder.com/150" altText="hi">
        </sprk-carousel-item>
        <sprk-carousel-item imageSrc="https://via.placeholder.com/350" altText="hi">
        </sprk-carousel-item>
        <sprk-carousel-item imageSrc="https://via.placeholder.com/550" altText="hi">
        </sprk-carousel-item>
        <sprk-carousel-item imageSrc="https://via.placeholder.com/850" altText="hi">
        </sprk-carousel-item>
      </sprk-carousel>
    </div>
  `,
  styles: ['']
})
export class CarouselDocsComponent {
  constructor() {}
}
