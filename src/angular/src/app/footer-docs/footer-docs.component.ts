import { Component } from '@angular/core';

@Component({
  selector: 'sprk-footer-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <sprk-footer>
        <h4>This is a footer!</h4>
      </sprk-footer>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Awards
      </h2>

      <sprk-footer>
        <h4>This is a footer!</h4>
      </sprk-footer>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Optional Elements
      </h2>

      <sprk-footer>
        <h4>This is a footer!</h4>
      </sprk-footer>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Optional Elements And Award Pattern
      </h2>

      <sprk-footer>
        <h4>This is a footer!</h4>
      </sprk-footer>
    </div>
  `,
  styles: ['']
})
export class FooterDocsComponent {

  constructor() { }
}
