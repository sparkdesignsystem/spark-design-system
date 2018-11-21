import { Component } from '@angular/core';

@Component({
  selector: 'sprk-dropdown-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Base</h2>
      <sprk-dropdown></sprk-dropdown>
    </div>
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Simple</h2>
      <sprk-dropdown></sprk-dropdown>
    </div>
  `
})
export class DropdownDocsComponent {
  constructor() {}
}
