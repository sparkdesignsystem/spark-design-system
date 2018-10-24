import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Base
        </h2>
        <sprk-footer
          [navLinks]="navLinks"
          [badges]="badges"
          additionalClassesBadges="sprk-u-Width-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam in laoreet ante, non feugiat neque. Suspendisse
          et ipsum leo. Quisque non consectetur justo.
        </sprk-footer>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Base With Award Component
        </h2>
        <sprk-footer
          splitAt="huge"
          [navLinks]="navLinks"
          [badges]="badges"
          additionalClassesBadges="sprk-u-Width-25"
          additionalClassesAwardImgOne="sprk-u-Width-35"
          additionalClassesAwardImgTwo="sprk-u-Width-35"
          disclaimer="true"
          disclaimerCopy="this is some copy for the award disclaimer in the footer"
          disclaimerTitle="Footer Disclaimer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam in laoreet ante, non feugiat neque. Suspendisse
          et ipsum leo. Quisque non consectetur justo.

          <sprk-award
            optional-slot
            disclaimer="false"
            title="Spark Award Component"
            additionalClassesImgOne="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
            additionalClassesImgTwo="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
            imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgOneAlt="placeholder!"
            imgOneHref="https://www.sparkdesignsystem.com/"
            imgTwoHref="https://www.sparkdesignsystem.com/"
            imgTwoAlt="placeholder!"
            analyticsStringImgOne="Foo"
            analyticsStringImgTwo="Test">
          </sprk-award>
        </sprk-footer>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Base With Columns of Links
        </h2>
        <sprk-footer
          [navLinks]="navLinks"
          [siteLinkCols]="siteLinkCols"
          [socialLinks]="socialLinks"
          [feedbackLinks]="feedbackLinks"
          splitAt="huge"
          [badges]="badges"
          additionalClassesBadges="sprk-u-Width-25"
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
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Base Footer With Link Columns And Award Pattern
        </h2>
        <sprk-footer
          [siteLinkCols]="siteLinkCols"
          [navLinks]="navLinks"
          [socialLinks]="socialLinks"
          [feedbackLinks]="feedbackLinks"
          splitAt="huge"
          [badges]="badges"
          additionalClassesBadges="sprk-u-Width-25"
          additionalClassesAwardImgOne="sprk-u-Width-35"
          additionalClassesAwardImgTwo="sprk-u-Width-35"
          disclaimer="true"
          disclaimerCopy="this is some copy for the award disclaimer in the footer"
          disclaimerTitle="Footer Disclaimer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam in laoreet ante, non feugiat neque. Suspendisse
          et ipsum leo. Quisque non consectetur justo.

          <sprk-award
            optional-slot
            disclaimer="false"
            title="Spark Award Component"
            additionalClassesImgOne="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
            additionalClassesImgTwo="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
            imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgOneAlt="placeholder!"
            imgOneHref="https://www.sparkdesignsystem.com/"
            imgTwoHref="https://www.sparkdesignsystem.com/"
            imgTwoAlt="placeholder!"
            analyticsStringImgOne="Foo"
            analyticsStringImgTwo="Test">
          </sprk-award>
        </sprk-footer>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Base Footer With Award Pattern And Products
        </h2>
        <sprk-footer
          [siteLinkCols]="siteLinkCols"
          [navLinks]="navLinks"
          [socialLinks]="socialLinks"
          [feedbackLinks]="feedbackLinks"
          splitAt="huge"
          [badges]="badges"
          additionalClassesBadges="sprk-u-Width-25"
          additionalClassesAwardImgOne="sprk-u-Width-35"
          additionalClassesAwardImgTwo="sprk-u-Width-35"
          disclaimer="true"
          disclaimerCopy="this is some copy for the award disclaimer in the footer"
          disclaimerTitle="Footer Disclaimer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam in laoreet ante, non feugiat neque. Suspendisse
          et ipsum leo. Quisque non consectetur justo.

          <sprk-award
            optional-slot
            disclaimer="false"
            title="Spark Award Component"
            additionalClassesImgOne="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
            additionalClassesImgTwo="drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large"
            imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
            imgOneAlt="placeholder!"
            imgOneHref="https://www.sparkdesignsystem.com/"
            imgTwoHref="https://www.sparkdesignsystem.com/"
            imgTwoAlt="placeholder!"
            analyticsStringImgOne="Foo"
            analyticsStringImgTwo="Test">
          </sprk-award>
        </sprk-footer>
      </div>
    </div>
  `,
  styles: ['']
})
export class FooterDocsComponent {
  siteLinkCols = [
    {
      heading: 'Column 1',
      siteLinks: [
        {
          text: 'Column 1 Link 1',
          href: '/alerts',
          linkAnalytics: 'Link to Item 1'
        },
        {
          text: 'Column 1 Link 2',
          href: '/alerts',
          linkAnalytics: 'Link to Item 2'
        },
        {
          text: 'Column 1 Link 3',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        },
        {
          text: 'Column 1 Link 4',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        },
        {
          text: 'Column 1 Link 5',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        },
        {
          text: 'Column 1 Link 6',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        }
      ]
    },
    {
      heading: 'Column 2',
      siteLinks: [
        {
          text: 'Column 2 Link 1',
          href: '/masthead',
          linkAnalytics: 'Link to Item 1'
        },
        {
          text: 'Column 2 Link 2',
          href: '/alerts',
          linkAnalytics: 'Link to Item 2'
        },
        {
          text: 'Column 2 Link 3',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        },
        {
          text: 'Column 2 Link 4',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        }
      ]
    },
    {
      heading: 'Column 3',
      siteLinks: [
        {
          text: 'Column 3 Link 1',
          href: '/alerts',
          linkAnalytics: 'Link to Item 1'
        },
        {
          text: 'Column 3 Link 2',
          href: '/alerts',
          linkAnalytics: 'Link to Item 2'
        },
        {
          text: 'Column 3 Link 3',
          href: '/award',
          linkAnalytics: 'Link to Item 3'
        }
      ]
    }
  ];

  navLinks = [
    {
      text: 'Item 1',
      href: '/alerts',
      analytics: 'Link to Item 1'
    },
    {
      text: 'Item 2',
      href: '/icons'
    },
    {
      text: 'Item 3',
      href: '/links'
    }
  ];

  socialLinks = [
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'facebook',
      analytics: 'Link'
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'instagram',
      analytics: 'Link'
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'twitter',
      analytics: 'Link'
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'youtube',
      analytics: 'Link'
    }
  ];

  feedbackLinks = [
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'paper-plane',
      text: 'Feedback Link 1',
      analytics: 'Link to Item 1'
    },
    {
      href: 'https://www.sparkdesignsystem.com/',
      icon: 'computer-screen',
      text: 'Feedback Link 2',
      analytics: 'Link to Item 2'
    }
  ];

  badges = [
    {
      alt: 'Placeholder Alt Text.',
      src:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      href: '/alerts',
      analytics: 'Test 1'
    },
    {
      alt: 'Placeholder Alt Text.',
      src:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      href: '/icons',
      analytics: 'Test 2'
    },
    {
      alt: 'Placeholder Alt Text.',
      src:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      href: '/links',
      analytics: 'Test 3'
    }
  ];
  constructor() {}
}
