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
        [topLinks]="topLinks"
        [bottomLinks]="bottomLinks"
        [linkColumns]="linkColumns"
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
        [topLinks]="topLinks"
        [linkColumns]="linkColumns"
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
  linkColumns = [
    {
      heading: 'Column 1',
    },
    {
      heading: 'Column 2',
    },
    {
      heading: 'Column 3',
    },
  ];

  topLinks = [
    {
      text: 'Item 1',
      href: '/alerts',
      linkAnalytics: 'Link to Item 1',
    },
    {
      text: 'Item 2',
      href: '/icons',
    },
    {
      text: 'Item 3',
      href: '/links',
    },
  ];

  bottomLinks = [
    {
      text: 'Item 1',
      href: '/alerts',
      analytics: 'Link to Item 1',
    },
    {
      text: 'Item 2',
      href: '/icons',
    },
    {
      text: 'Item 3',
      href: '/links',
    },
  ];

  socialLinks = [
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'facebook',
      analytics: 'Link',
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'instagram',
      analytics: 'Link',
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'twitter',
      analytics: 'Link',
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'youtube',
      analytics: 'Link',
    },
  ];

  feedbackLinks = [
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'paper-plane',
      text: 'Feedback Link 1',
      analytics: 'Link to Item 1',
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'computer-screen',
      text: 'Feedback Link 2',
      analytics: 'Link to Item 2',
    },
  ];

  imgs = [
    {
      alt: 'Placeholder Alt Text.',
      src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      href: '/alerts',
      analytics: 'Test 1',
    },
    {
      alt: 'Placeholder Alt Text.',
      src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      href: '/icons',
      analytics: 'Test 2',
    },
    {
      alt: 'Placeholder Alt Text.',
      src: 'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      href: '/links',
      analytics: 'Test 3',
    },
  ];
  constructor() { }
}
