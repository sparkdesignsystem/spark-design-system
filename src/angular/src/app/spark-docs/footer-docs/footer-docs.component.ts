import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Footer Without Global Section
      </h2>

      <sprk-footer idString="footer-1"></sprk-footer>
    </div>

    <div class="sprk-o-CenteredColumn sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Footer With Global Section
      </h2>

      <sprk-footer idString="footer-1" globalSection="true" globalLinks="globalLinks" globalHeading="Global Links"></sprk-footer>
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
      analytics: 'link-1'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      icon: 'amount-money',
      analytics: 'link-2'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/footer',
      icon: 'access',
      analytics: 'link-3'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      icon: 'payment-center',
      analytics: 'link-4'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur.',
      href: '/icons',
      icon: 'cooling',
      analytics: 'link-5'
    }
  ];
}
