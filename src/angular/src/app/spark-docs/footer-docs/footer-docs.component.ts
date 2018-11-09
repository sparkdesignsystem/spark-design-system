import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Footer Without Global Section
      </h2>

      <sprk-footer idString="footer-1" [localLinks]="localLinks"></sprk-footer>
    </div>

    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Footer With Global Section
      </h2>

      <sprk-footer idString="footer-1" [localLinks]="localLinks" [globalLinks]="globalLinks" globalHeading="Global Links"></sprk-footer>
    </div>
  `
})
export class FooterDocsComponent {
  constructor() {}

  globalLinks = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      icon: 'auto-loans',
      iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'cats'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      imgSrc:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgCSS: 'sprk-u-Width-20',
      imgAlt: 'Foo',
      analytics: 'link-2'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      imgSrc:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgCSS: 'sprk-u-Width-20',
      imgAlt: 'Foo',
      analytics: 'link-2'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      icon: 'auto-loans',
      iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'cats'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      icon: 'payment-center',
      iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'cats'
    }
  ];

  localLinks = [
    {
      heading: 'Site Links',
      links: [
        {
          text: 'About This',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'About This Other Thing',
          href: '/alerts'
        },
        {
          text: 'About That',
          href: '/alerts'
        },
        {
          text: 'Link Item',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'This Link Item',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        }
      ]
    },
    {
      heading: 'Learn More',
      links: [
        {
          text: 'About This Other Thing',
          href: '/alerts'
        },
        {
          text: 'About This',
          href: '/alerts'
        },
        {
          text: 'About That',
          href: '/alerts'
        },
        {
          text: 'Link Item',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        }
      ]
    },
    {
      heading: 'Support',
      links: [
        {
          text: 'Share Your Screen',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'Opt Out',
          href: '/alerts'
        },
        {
          text: 'About That',
          href: '/alerts'
        },
        {
          text: 'Disclosures and Other Things',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'We Want Your Feedback',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        }
      ]
    }
  ];
}
