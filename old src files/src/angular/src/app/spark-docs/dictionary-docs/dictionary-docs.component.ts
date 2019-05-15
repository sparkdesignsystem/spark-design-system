import { Component } from '@angular/core';

@Component({
  selector: 'sprk-dictionary-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Dictionary
      </h2>

      <sprk-dictionary [data]="keyValuePairs" idString="dictionary-1"></sprk-dictionary>

      <h2 class="drizzle-b-h2">
        Striped Dictionary
      </h2>

      <sprk-dictionary [data]="keyValuePairs" dictionaryType="striped" idString="dictionary-2"></sprk-dictionary>
    </div>
  `,
  styles: ['']
})
export class DictionaryDocsComponent {
  keyValuePairs = {
    'Email Address': 'sparkdesignsystem@quickenloans.com',
    'Mailing Address': '123 Main Street, Detroit, MI, 48216',
    'Home Phone': '(123) 456-7890',
    'Cell Phone': '(098) 765-4321',
    'Work Phone': '(555) 555-5555',
    'Work Extension': '55555'
  };
  constructor() {}
}
