import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Masthead</h2>
        <sprk-masthead
          additionalClasses="angular-docs-u-Masthead-docs"
          greetingName="Hello, Fellow Human"
          [wideNavLinks]="links"
          [secondaryNavLinks]="linksSecondary"
          [narrowNavLinks]="links">
          <img alt="Provide useful alternative text" src="https://sparkdesignsystem.com/assets/toolkit/images/flower.jpg" logo-slot>
          <div class="sprk-b-InputContainer" upper-slot>
            <label for="inline-search" class="sprk-u-ScreenReaderText">Search</label>
            <input
              placeholder="Search"
              class="sprk-b-TextInput sprk-u-Width-100"
              id="inline-search"
              type="search"
              role="search"
              aria-describedby="inline-search--error-container">
            <div class="sprk-b-ErrorText" id="inline-search--error-container">
            </div>
          </div>
          <p lower-slot>Loan Number: #1234567890</p>
        </sprk-masthead>
      </div>
  `,
  styles: [``]
})
export class MastheadDocsComponent {
  linksSecondary = [
    {
      text: 'Item 1',
      href: '/icons',
      active: false
    },
    {
      text: 'Item 2',
      href: '/links',
      active: false
    },
    {
      text: 'Item 3',
      href: '/buttons',
      active: false
    }
  ];

  links = [
    {
      text: 'Item 1',
      href: '/masthead'
    },
    {
      text: 'Item 2',
      href: '/links',
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
        }
      ]
    },
    {
      text: 'Item 3',
      href: '/buttons'
    },
    {
      text: 'Item 4',
      href: '#nogo',
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
        }
      ]
    },
    {
      text: 'Item 5',
      href: '/buttons',
      active: false
    }
  ];
  constructor() {}
}
