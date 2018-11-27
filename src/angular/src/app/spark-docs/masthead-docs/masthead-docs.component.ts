import { Component } from '@angular/core';

@Component({
  selector: 'sprk-masthead-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Masthead</h2>
      <sprk-masthead
        additionalClasses="angular-docs-u-Masthead-docs"
        greetingName="Hello, Fellow Human"
        [secondaryNavLinks]="links"
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
            [choices]="siteDropdownChoices"
            additionalTriggerClasses="sprk-b-Link--standalone sprk-b-Link--muted"
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
                routerLink="/cards"
                href="#nogo"
              >
                <sprk-icon
                  iconType="settings"
                  additionalClasses="sprk-c-Icon--current-color sprk-c-Icon--l"
                ></sprk-icon>
                <span class="sprk-u-ScreenReaderText">Settings</span>
              </a>
            </li>

            <li>
              <sprk-dropdown
                [choices]="simpleChoices"
                dropdownType="simple"
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
  links = [
    {
      text: 'Item 1',
      href: '/icons',
      active: false
    },
    {
      text: 'Item 2',
      active: false,
      subNav: [
        {
          text: 'Item 1',
          href: '/links'
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

  siteDropdownChoices = [
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 1',
      active: false
    },
    {
      content: {
        title: 'Choice Title',
        infoLine1: 'Information about this choice',
        infoLine2: 'More Information'
      },
      value: 'Choice Title 2',
      active: true
    }
  ];

  simpleChoices = [
    {
      text: 'Option 1',
      value: 'Option 1'
    },
    {
      text: 'Option 2',
      value: 'Option 2'
    }
  ];

  constructor() {}
}
