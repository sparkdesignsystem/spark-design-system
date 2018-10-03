import { Component } from '@angular/core';

@Component({
  selector: 'sprk-list-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Bare List
      </h2>

      <sprk-unordered-list listType="bare">
        <sprk-list-item>
          cats
        </sprk-list-item>
        <sprk-list-item>
          dogs
        </sprk-list-item>
      </sprk-unordered-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Indented List
      </h2>

      <sprk-unordered-list listType="indented">
        <sprk-list-item>
          fish
        </sprk-list-item>
        <sprk-list-item>
          birds
        </sprk-list-item>
      </sprk-unordered-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Unordered List
      </h2>

      <sprk-unordered-list>
        <sprk-list-item>
          trails
        </sprk-list-item>
        <sprk-list-item>
          roads
        </sprk-list-item>
      </sprk-unordered-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Ordered List
      </h2>

      <sprk-ordered-list>
        <sprk-list-item>
          sky
        </sprk-list-item>
        <sprk-list-item>
          sea
        </sprk-list-item>
      </sprk-ordered-list>
    </div>
  `,
  styles: ['']
})
export class ListDocsComponent {
  constructor() {}
}
