import { Component } from '@angular/core';

@Component({
  selector: 'sprk-list-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Bare List
      </h2>

      <sprk-unordered-list listType="bare" idString="unordered-list-1">
        <sprk-list-item idString="list-item-1">
          cats
        </sprk-list-item>
        <sprk-list-item idString="list-item-2">
          dogs
        </sprk-list-item>
      </sprk-unordered-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Indented List
      </h2>

      <sprk-unordered-list listType="indented" idString="unordered-list-2">
        <sprk-list-item idString="list-item-3">
          fish
        </sprk-list-item>
        <sprk-list-item idString="list-item-4">
          birds
        </sprk-list-item>
      </sprk-unordered-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Unordered List
      </h2>

      <sprk-unordered-list idString="unordered-list-3">
        <sprk-list-item idString="list-item-5">
          trails
        </sprk-list-item>
        <sprk-list-item idString="list-item-6">
          roads
        </sprk-list-item>
      </sprk-unordered-list>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Ordered List
      </h2>

      <sprk-ordered-list idString="ordered-list-1">
        <sprk-list-item idString="list-item-7">
          sky
        </sprk-list-item>
        <sprk-list-item idString="list-item-8">
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
