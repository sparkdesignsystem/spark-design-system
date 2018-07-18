import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Masthead</h2>
        <sprk-masthead 
          additionalClasses="angular-docs-u-Masthead-docs"
          clientName="Rob Copeland"
          [loanNumber]="1234567890"
          [wideNavLinks]="links" 
          [narrowNavLinks]="links"></sprk-masthead>
      </div>
  `,
  styles: [``]
})

export class MastheadDocsComponent {
  links = [
    {
      text: 'Item 1',
      href: '/alerts',
      analyticsString: 'Link to Item 1',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/alerts',
          analyticsString: 'Link to Sub Item 1'
        },
        {
          text: 'Item 2',
          href: '/alerts'
        },
        {
          text: 'Item 3',
          href: '/alerts'
        },
      ]
    },
    {
      text: 'Item 2',
      href: '/icons',
      active: false
    },
    {
      text: 'Item 3',
      href: '/links',
      active: false
    },
    {
      text: 'Item 4',
      href: '/buttons',
      active: false
    },
    {
      text: 'Item 5',
      href: '#nogo',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '#nogo'
        },
        {
          text: 'Item 2',
          href: '#nogo'
        },
        {
          text: 'Item 3',
          href: '#nogo'
        },
        {
          text: 'Item 4',
          href: '#nogo'
        },
      ]
    },
  ];
  constructor() { }
}
