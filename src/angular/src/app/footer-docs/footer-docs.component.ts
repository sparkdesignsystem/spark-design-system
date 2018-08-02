import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-footer
          [bottomLinks]="bottomLinks"
          [imgs]="imgs"
          additionalClassesBaseImgs="sprk-u-Width-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam in laoreet ante, non feugiat neque. Suspendisse
          et ipsum leo. Quisque non consectetur justo.
        </sprk-footer>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Award Component
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-footer
          award="true"
          [bottomLinks]="bottomLinks"
          splitAt="huge"
          [imgs]="imgs"
          additionalClassesBaseImgs="sprk-u-Width-25"
          additionalClassesAwardImgOne="sprk-u-Width-35"
          additionalClassesAwardImgTwo="sprk-u-Width-35"
          disclaimer="true"
          disclaimerCopy="this is some copy for the award disclaimer in the footer"
          disclaimerTitle="Footer Disclaimer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam in laoreet ante, non feugiat neque. Suspendisse
          et ipsum leo. Quisque non consectetur justo.
        </sprk-footer>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Optional Elements
      </h2>

      <div class="sprk-o-CenteredColumn">
      <sprk-footer
        [bottomLinks]="bottomLinks"
        [socialLinks]="socialLinks"
        [feedbackLinks]="feedbackLinks"
        splitAt="huge"
        [imgs]="imgs"
        additionalClassesBaseImgs="sprk-u-Width-25"
        additionalClassesAwardImgOne="sprk-u-Width-35"
        additionalClassesAwardImgTwo="sprk-u-Width-35"
        disclaimerCopy="this is some copy for the award disclaimer in the footer"
        disclaimerTitle="Footer Disclaimer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam in laoreet ante, non feugiat neque. Suspendisse
        et ipsum leo. Quisque non consectetur justo.
      </sprk-footer>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Optional Elements And Award Pattern
      </h2>

      <div class="sprk-o-CenteredColumn">
      <sprk-footer
        award="true"
        [bottomLinks]="bottomLinks"
        [socialLinks]="socialLinks"
        [feedbackLinks]="feedbackLinks"
        splitAt="huge"
        [imgs]="imgs"
        additionalClassesBaseImgs="sprk-u-Width-25"
        additionalClassesAwardImgOne="sprk-u-Width-35"
        additionalClassesAwardImgTwo="sprk-u-Width-35"
        disclaimer="true"
        disclaimerCopy="this is some copy for the award disclaimer in the footer"
        disclaimerTitle="Footer Disclaimer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam in laoreet ante, non feugiat neque. Suspendisse
        et ipsum leo. Quisque non consectetur justo.
      </sprk-footer>
      </div>
    </div>
  `,
  styles: ['']
})
export class FooterDocsComponent {
  bottomLinks = [
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

  socialLinks = [
    {
      socialHref: 'https://www.sparkdesignsystem.com/',
      socialIcon: 'facebook',
    },
    {
      socialHref: 'https://www.sparkdesignsystem.com/',
      socialIcon: 'instagram',
    },
    {
      socialHref: 'https://www.sparkdesignsystem.com/',
      socialIcon: 'twitter',
    },
    {
      socialHref: 'https://www.sparkdesignsystem.com/',
      socialIcon: 'youtube',
    },
  ];

  feedbackLinks = [
    {
      feedbackHref: 'https://www.sparkdesignsystem.com/',
      feedbackIcon: 'paper-plane',
      feedbackText: 'Feedback Link 1'
    },
    {
      feedbackHref: 'https://www.sparkdesignsystem.com/',
      feedbackIcon: 'computer-screen',
      feedbackText: 'Feedback Link 2'
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
