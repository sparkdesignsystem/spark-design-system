import { Component } from '@angular/core';

@Component({
  selector: 'sprk-dropdown-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Base</h2>
      <sprk-dropdown title="My Choices" [choices]="choices">
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
      <sprk-dropdown title="My Choices"></sprk-dropdown>
    </div>
  `
})
export class DropdownDocsComponent {
  constructor() {}
  choices = [
    {
      text: 'text',
      value: 'value',
      active: false
    },
    {
      text: 'text',
      value: 'value',
      active: true
    }
  ];
}
