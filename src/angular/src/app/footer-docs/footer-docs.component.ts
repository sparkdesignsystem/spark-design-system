import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <sprk-footer
        [links]="links"
        [imgs]="imgs"
        additionalClassesBaseImgs="sprk-u-Width-15"
        disclaimer="false">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam in laoreet ante, non feugiat neque. Suspendisse
        et ipsum leo. Quisque non consectetur justo.
      </sprk-footer>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Award Component
      </h2>

      <sprk-footer
        award="true"
        [links]="links"
        [imgs]="imgs"
        additionalClassesBaseImgs="sprk-u-Width-15"
        additionalClassesAwardImgOne="sprk-u-Width-25"
        additionalClassesAwardImgTwo="sprk-u-Width-25"
        disclaimer="true"
        disclaimerCopy="this is some copy for the award disclaimer in the footer"
        disclaimerTitle="Footer Disclaimer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam in laoreet ante, non feugiat neque. Suspendisse
        et ipsum leo. Quisque non consectetur justo.
      </sprk-footer>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Optional Elements
      </h2>

      <sprk-footer [links]="links" [imgs]="imgs" additionalClassesBaseImgs="sprk-u-Width-15">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam in laoreet ante, non feugiat neque. Suspendisse
        et ipsum leo. Quisque non consectetur justo.
      </sprk-footer>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Optional Elements And Award Pattern
      </h2>

      <sprk-footer award="true" [links]="links" [imgs]="imgs" additionalClassesBaseImgs="sprk-u-Width-15">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam in laoreet ante, non feugiat neque. Suspendisse
        et ipsum leo. Quisque non consectetur justo.
      </sprk-footer>
    </div>
  `,
  styles: ['']
})
export class FooterDocsComponent {
  links = [
    {
      linkText: 'Item 1',
      linkHref: '/alerts',
      linkAnalytics: 'Link to Item 1',
    },
    {
      linkText: 'Item 2',
      linkHref: '/icons',
    },
    {
      linkText: 'Item 3',
      linkHref: '/links',
    },
  ];

  imgs = [
    {
      imgAlt: 'Placeholder Alt Text.',
      imgSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgHref: '/alerts',
      imgAnalytics: 'Test 1',
    },
    {
      imgAlt: 'Placeholder Alt Text.',
      imgSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgHref: '/icons',
      imgAnalytics: 'Test 2',
    },
    {
      imgAlt: 'Placeholder Alt Text.',
      imgSrc: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgHref: '/links',
      imgAnalytics: 'Test 3',
    },
  ];
  constructor() { }
}
