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
          <div class="drizzle-c-Logo-placeholder" logo-slot></div>
          <div class="sprk-c-Masthead__search" lower-slot>
            <sprk-icon-input-container iconContainerClasses="">
              <label
                class="sprk-b-Label--with-icon sprk-u-ScreenReaderText"
                sprkLabel>
                Search
              </label>
              <sprk-icon iconType="search" additionalClasses="sprk-b-InlineSearch__icon" sprk-input-icon></sprk-icon>
              <input
                name="inline_search_input"
                class="sprk-b-TextInput--with-icon"
                type="text"
                placeholder="Search"
                [(ngModel)]="inline_search_input"
                #inlineSearchInput="ngModel"
                sprkInput>
            </sprk-icon-input-container>
          </div>
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
