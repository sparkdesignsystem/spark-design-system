import { Component } from '@angular/core';

@Component({
  selector: 'sprk-accordion-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Masthead</h2>
        <sprk-masthead></sprk-masthead>
      </div>
  `,
  styles: ['']
})

export class MastheadDocsComponent {
  constructor() { }
}
