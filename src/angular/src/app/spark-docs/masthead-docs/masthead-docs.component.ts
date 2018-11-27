import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Masthead</h2>
      <sprk-masthead
        additionalClasses="angular-docs-u-Masthead-docs"
        greetingName="Hello, Fellow Human"
        [links]="links"
        [secondaryNavLinks]="linksSecondary"
        [narrowNavLinks]="links"
        idString="masthead-1"
      >
        <img
          logo-slot
          src="https://sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          alt="Spark Design System"
        />
        <div site-slot>
          <sprk-dropdown
            triggerText="Make a Selection..."
            title="My Choices"
            triggerIconType="chevron-down"
          ></sprk-dropdown>
        </div>
        <div utility-slot>
          <ul
            class="sprk-o-HorizontalList sprk-o-HorizontalList--spacing-large sprk-o-Stack--center-column"
          >
            <li>
              <a class="sprk-b-Link sprk-b-Link--standalone" href="#nogo">
                (586) 123-4567
              </a>
            </li>

            <li>
              <a
                class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--standalone"
                href="#nogo"
              >
                Talk To Us
              </a>
            </li>

            <li>
              <a
                class="sprk-b-Link sprk-b-Link--muted sprk-b-Link--plain"
                href="#"
              >
                <svg
                  class="sprk-c-Icon sprk-c-Icon--current-color sprk-c-Icon--l"
                  viewBox="0 0 64 64"
                >
                  <use xlink:href="#settings" />
                </svg>
                <span class="sprk-u-ScreenReaderText">Settings</span>
              </a>
            </li>

            <li>
              <sprk-dropdown
                dropdownType="simple"
                title="My Choices"
                triggerIconType="user"
                additionalTriggerClasses="sprk-b-Link--plain"
                additionalClasses="sprk-u-Right--zero"
                screenReaderText="User Account"
              ></sprk-dropdown>
            </li>
          </ul>
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
      href: '/icons',
      active: false
    },
    {
      text: 'Item 2',
      href: '/links',
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
        }
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
      href: '#nogo',
      active: false
    }
  ];

  constructor() {}
}
