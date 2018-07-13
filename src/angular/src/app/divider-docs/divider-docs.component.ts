import { Component } from '@angular/core';

@Component({
  selector: 'divider-docs',
  template:
  `<div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Dividers
      </h2>

      <sprk-divider></sprk-divider>

      <h2 class="drizzle-b-h2">
        Divider With Additional Class sprk-u-mbm
      </h2>
      <sprk-divider additionalClasses="sprk-u-mbm"></sprk-divider>
    </div>
  `
})
export class DividerDocsComponent {
  constructor() { }
}
