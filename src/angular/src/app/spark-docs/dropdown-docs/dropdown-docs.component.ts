import { Component } from '@angular/core';

@Component({
  selector: 'sprk-dropdown-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Base</h2>
      <sprk-dropdown
        triggerText="Make a Selection..."
        title="My Choices"
        triggerIconType="chevron-down"
        (choiceMade)="choiceHandler($event)"
        [choices]="choices"
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
      <h2 class="drizzle-b-h2">Simple</h2>
      <sprk-dropdown
        dropdownType="simple"
        title="My Choices"
        triggerIconType="settings"
        [choices]="simpleChoices"
        (choiceMade)="choiceHandler($event)"
      ></sprk-dropdown>
    </div>
  `
})
export class DropdownDocsComponent {
  constructor() {}
  choices = [
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

  choiceHandler(event): void {
    console.log(event);
  }
}
