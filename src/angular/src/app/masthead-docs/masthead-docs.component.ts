import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Masthead</h2>
        <sprk-masthead 
          additionalClasses="angular-docs-u-Masthead-docs"
          greetingName="Rob Copeland"
          [wideNavLinks]="links" 
          [secondaryNavLinks]="links" 
          [narrowNavLinks]="links">
          <div class="sprk-b-InputContainer" upper-slot>
            <label for="inline-search" class="sprk-u-ScreenReaderText">Search</label>
            <input placeholder="Search" class="sprk-b-TextInput sprk-u-Width-100" id="inline-search" type="search" role="search" aria-describedby="inline-search--error-container">
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
  links = [
    {
      text: 'Chat',
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
      text: 'Insurance',
      href: '/icons',
      active: false
    },
    {
      text: 'Loan Information',
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


