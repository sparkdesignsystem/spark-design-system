import { Component } from '@angular/core';

@Component({
  selector: 'sprk-dropdown-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Base</h2>
      <sprk-dropdown
        dropdownType="base"
        title="My Choices"
        additionalTriggerClasses="sprk-b-Link--plain"
        triggerIconType="settings"
        [choices]="choices"
        (choiceMade)="choiceHandler($event)"
      ></sprk-dropdown>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Informational</h2>
      <sprk-dropdown
        dropdownType="informational"
        additionalTriggerClasses="sprk-b-Link--plain"
        triggerText="Make a Selection..."
        title="My Choices"
        triggerIconType="chevron-down"
        (choiceMade)="choiceHandler($event)"
        [choices]="informationalChoices"
      >
        <div
          class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
          sprkDropdownFooter
        >
          <a class="sprk-c-Button sprk-c-Button--tertiary" href="#nogo">
            Go Elsewhere
          </a>
        </div>
      </sprk-dropdown>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Selctor Dropdown</h2>

      <div
        class="sprk-o-Stack sprk-o-Stack--center-column sprk-o-Stack--center-row"
      >
        <div class="sprk-o-Stack__item sprk-u-Position--relative">
          <sprk-dropdown
            dropdownType="informational"
            additionalTriggerClasses="sprk-c-Masthead__selector sprk-b-Link sprk-b-Link--plain sprk-o-Stack sprk-o-Stack--split@xxs sprk-o-Stack--center-column"
            triggerText="My Selector"
            title="My Choices"
            triggerIconType="chevron-down"
            (choiceMade)="choiceHandler($event)"
            [choices]="informationalChoices"
            additionalIconClasses="sprk-c-Icon--stroke-current-color sprk-Stack__item"
            additionalTriggerTextClasses="sprk-o-Stack__item sprk-o-Stack__item--flex@xxs"
          >
            <div
              class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
              sprkDropdownFooter
            >
              <a
                class="sprk-c-Button sprk-c-Button--compact sprk-c-Button--tertiary"
                href="#nogo"
              >
                Placeholder
              </a>
            </div>
          </sprk-dropdown>
        </div>
      </div>
    </div>
  `
})
export class DropdownDocsComponent {
  constructor() {}
  informationalChoices = [
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

  choices = [
    {
      text: 'Option 1',
      value: 'Option 1'
    },
    {
      text: 'Option 2',
      value: 'Option 2'
    }
  ];

  choiceHandler(event): void {
    console.log(event);
  }
}
