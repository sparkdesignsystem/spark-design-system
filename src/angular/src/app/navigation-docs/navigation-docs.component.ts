import { Component } from '@angular/core';

@Component({
  selector: 'sprk-navigation-docs',
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
      href: '/alerts',
      active: false
    },
    {
      text: 'Item 2',
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
    {
      text: 'Item 3',
      href: '#nogo',
      active: false
    },
    {
      text: 'Item 4',
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
