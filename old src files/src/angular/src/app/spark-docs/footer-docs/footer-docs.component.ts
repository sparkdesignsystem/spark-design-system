import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer Without Global Section</h2>

      <sprk-footer
        idString="footer-1"
        [localLinks]="localLinks"
        [socialLinks]="socialLinks"
        [badgeLinks]="badgeLinks"
        [awards]="awards"
        awardsHeading="Awards Heading"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
      ></sprk-footer>
    </div>

    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer With Global Section</h2>

      <sprk-footer
        idString="footer-2"
        [localLinks]="localLinks"
        [globalLinks]="globalLinks"
        [socialLinks]="socialLinks"
        [badgeLinks]="badgeLinks"
        [awards]="awards"
        awardsHeading="Awards Heading"
        globalHeading="Global Site Links"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
        [disclaimerToggle]="disclaimerToggle"
      ></sprk-footer>
    </div>

    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer Without Social Links</h2>

      <sprk-footer
        idString="footer-3"
        [localLinks]="localLinks"
        [globalLinks]="globalLinks"
        [badgeLinks]="badgeLinks"
        [awards]="awards"
        awardsHeading="Awards Heading"
        globalHeading="Global Site Links"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
        [disclaimerToggle]="disclaimerToggle"
      ></sprk-footer>
    </div>

    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer Without Badge Links</h2>

      <sprk-footer
        idString="footer-4"
        [localLinks]="localLinks"
        [globalLinks]="globalLinks"
        [socialLinks]="socialLinks"
        [awards]="awards"
        awardsHeading="Awards Heading"
        globalHeading="Global Site Links"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
        [disclaimerToggle]="disclaimerToggle"
      ></sprk-footer>
    </div>

    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer Without Awards</h2>

      <sprk-footer
        idString="footer-5"
        [localLinks]="localLinks"
        [globalLinks]="globalLinks"
        [badgeLinks]="badgeLinks"
        globalHeading="Global Site Links"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
        [disclaimerToggle]="disclaimerToggle"
      ></sprk-footer>
    </div>

    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer Without Disclaimer Toggle And Award</h2>

      <sprk-footer
        idString="footer-6"
        [localLinks]="localLinks"
        [globalLinks]="globalLinks"
        [badgeLinks]="badgeLinks"
        globalHeading="Global Site Links"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
      ></sprk-footer>
    </div>

    <div class="sprk-u-mbh">
      <h2 class="drizzle-b-h2">Footer With Two Columns of Local Links</h2>

      <sprk-footer
        idString="footer-7"
        [localLinks]="localLinksTwoCol"
        [globalLinks]="globalLinks"
        [socialLinks]="socialLinks"
        [badgeLinks]="badgeLinks"
        [awards]="awards"
        awardsHeading="Awards Heading"
        globalHeading="Global Site Links"
        connectHeading="Connect With Us"
        [disclaimerText]="disclaimerText"
        [disclaimerToggle]="disclaimerToggle"
      ></sprk-footer>
    </div>
  `
})
export class FooterDocsComponent {
  constructor() {}

  globalLinks = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/global-1',
      icon: 'auto-loans',
      iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'cats'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/global-2',
      imgSrc:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgCSS: 'sprk-u-Width-20',
      imgAlt: 'Foo',
      analytics: 'link-2'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/global-3',
      imgSrc:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgCSS: 'sprk-u-Width-20',
      imgAlt: 'Foo',
      analytics: 'link-2'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/global-4',
      icon: 'auto-loans',
      iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'cats'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/global-5',
      icon: 'payment-center',
      iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
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
          href: '/about-this',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'About This Other Thing',
          href: '/about-this-other-thing'
        },
        {
          text: 'About That',
          href: '/about-that'
        },
        {
          text: 'Link Item',
          href: '/link-item',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'This Link Item',
          href: '/this-link-item',
          analyticsString: 'Link to Sub Item 1'
        }
      ]
    },
    {
      heading: 'Learn More',
      links: [
        {
          text: 'About This Other Thing',
          href: '/learn-more-1'
        },
        {
          text: 'About This',
          href: '/learn-more-2'
        },
        {
          text: 'About That',
          href: '/learn-more-3'
        },
        {
          text: 'Link Item',
          href: '/learn-more-4',
          analyticsString: 'Link to Sub Item 1'
        }
      ]
    },
    {
      heading: 'Support',
      links: [
        {
          text: 'Share Your Screen',
          href: '/share-screen',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'Opt Out',
          href: '/opt-out'
        },
        {
          text: 'About That',
          href: '/about-that'
        },
        {
          text: 'Disclosures and Other Things',
          href: '/things',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'We Want Your Feedback',
          href: '/feedback',
          analyticsString: 'Link to Sub Item 1'
        }
      ]
    }
  ];

  localLinksTwoCol = [
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

  socialLinks = [
    {
      href: '/icons-1',
      icon: 'facebook-two-color',
      iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'facebook'
    },
    {
      href: '/icons-2',
      icon: 'twitter-two-color',
      iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'twitter'
    },
    {
      href: '/icons-3',
      icon: 'instagram-two-color',
      iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'instagram'
    }
  ];

  badgeLinks = [
    {
      href: '/badge-1',
      icon: 'townhouse',
      iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'townhouse'
    },
    {
      href: '/badge-2',
      icon: 'townhouse',
      iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'townhouse'
    },
    {
      href: '/badge-3',
      icon: 'townhouse',
      iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
      analytics: 'link-1',
      iconScreenReaderText: 'townhouse'
    }
  ];

  awards = [
    {
      href: '/awards-1',
      imgSrc:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgCSS: 'drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large',
      imgAlt: 'Foo',
      analytics: 'link-1'
    },
    {
      href: '/awards-2',
      imgSrc:
        'https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg',
      imgCSS: 'drizzle-c-Logo-placeholder drizzle-c-Logo-placeholder--large',
      imgAlt: 'Foo',
      analytics: 'link-2'
    }
  ];

  disclaimerToggle = [
    {
      title: 'Super Award Disclaimer',
      body: 'Body text for my super award!',
      analytics: 'disclaimer'
    },
    {
      title: 'Super Award Disclaimer',
      body: 'Body text for my second super amazing award!',
      analytics: 'disclaimer-two'
    }
  ];

  disclaimerText = [
    {
      text: 'Consectetur. Lorem ipsum dolor sit amet.'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      text: 'asdf aksldjf Lorem ipsum dolor sit amet, consectetur'
    },
    {
      text: 'sdf sdf Disclaimer aosdf jsdaf'
    },
    {
      text: 'asdf sdf Disclaimer'
    }
  ];
}
