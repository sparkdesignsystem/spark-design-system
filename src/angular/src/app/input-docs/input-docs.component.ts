import { Component } from '@angular/core';

@Component({
  selector: 'sprk-input-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Inputs</h2>
        <form (submit)="onSubmit($event)" #sampleForm="ngForm">
          <sprk-input-container>
            <label sprk-label>Text Input</label>
            <input 
              name="text_input" 
              [additionalClasses]="textInput.invalid && textInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              [(ngModel)]="text_input"
              required
              #textInput="ngModel"
              sprk-input>
            <span 
              [hidden]="textInput.valid || textInput.pristine" 
              sprk-field-error>This field is required.</span>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Phone Number</label>
            <input 
              name="phone_input" 
              [additionalClasses]="phoneInput.invalid && phoneInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="(^(\\+\\d{1,2}\\s)?((\\(\\d{3}\\))|\\d{3})[\\s.-]?\\d{3}[\\s.-]?\\d{4}$)|^$"
              placeholder="(000) 000-0000"
              [(ngModel)]="phone_input"
              required
              #phoneInput="ngModel"
              sprk-input>
            <span 
              [hidden]="phoneInput.valid || phoneInput.pristine"
              sprk-field-error>
              {{ phoneInput.invalid && phoneInput.value === '' ? 'This field is required.' : 'This field is invalid.'}}
            </span>  
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Search Input</label>
            <input 
              name="search_input" 
              type="search" 
              [(ngModel)]="search_input"
              #searchInput="ngModel"
              sprk-input>
          </sprk-input-container>
          <sprk-input-container>
            <label additionalClasses="sprk-u-ScreenReaderText" sprk-label>Inline Search Input</label>
            <input 
              name="inline_search_input" 
              type="search" 
              role="search"
              placeholder="Search"
              [(ngModel)]="inline_search_input"
              #inlineSearchInput="ngModel"
              sprk-input>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Date Input (No Picker)</label>
            <input 
              name="date_input" 
              [additionalClasses]="dateInput.invalid && dateInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="^(((0[1358]|1[02])([\\/-]?)(0[1-9]|[12]\\d|3[01])|(0[469]|11)([\\/-]?)(0[1-9]|[12]\\d|30)|02(\\/?)((0?\\d)|[12]\\d))(\\4|\\7|\\9)[12]\\d{3})?$"
              placeholder="MM/DD/YYYY"
              [(ngModel)]="date_input"
              #dateInput="ngModel"
              sprk-input>
            <span 
              [hidden]="dateInput.valid || dateInput.pristine"
              sprk-field-error>This field is invalid.</span>  
          </sprk-input-container>
          <sprk-button [isDisabled]="!sampleForm.form.valid">Submit</sprk-button>
        </form>
      </div>
  `,
  styles: ['']
})

export class InputDocsComponent {
  constructor() { }

  text_input: string = '';
  phone_input: string = '';
  search_input: string = '';
  inline_search_input: string = '';

  onSubmit(): void {
    console.log('Submitted!');
  }
}
