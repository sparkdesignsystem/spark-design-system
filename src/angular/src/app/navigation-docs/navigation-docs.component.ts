import { Component } from '@angular/core';

@Component({
  selector: 'sprk-alert-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">
          Wide Navigation  
        </h2>
        <sprk-wide-navigation [links]="links"></sprk-wide-navigation>
    </div>
    <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">
          Narrow Navigation  
        </h2>
        <sprk-narrow-navigation></sprk-narrow-navigation>
    </div>
  `,
  styles: ['']
})
export class NavigationDocsComponent {
  links = [
    {
      text: 'Item 1',
      href: 'www.google.com',
      active: false
    },
    {
      text: 'Item 2',
      href: 'www.google.com',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: 'www.google.com'
        },
        {
          text: 'Item 2',
          href: 'www.google.com'
        },
        {
          text: 'Item 3',
          href: 'www.google.com'
        },
        {
          text: 'Item 4',
          href: 'www.google.com'
        },
      ]
    },
    {
      text: 'Item 3',
      href: 'www.google.com',
      active: false
    },
    {
      text: 'Item 4',
      href: 'www.google.com',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: 'www.google.com'
        },
        {
          text: 'Item 2',
          href: 'www.google.com'
        },
        {
          text: 'Item 3',
          href: 'www.google.com'
        },
        {
          text: 'Item 4',
          href: 'www.google.com'
        },
      ]
    },
    {
      text: 'Item 5',
      href: 'www.google.com',
      active: false
    },
  ];

  constructor() { }
}
