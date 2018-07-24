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
              sprk-error>This field is required.</span>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>SSN Input</label>
            <input 
              name="ssn_input" 
              [additionalClasses]="ssnInput.invalid && ssnInput.dirty ? 'sprk-b-TextInput--error': ''"
              type="text" 
              pattern="(^(?!666|000|9\\d{2})\\d{3}([- ]{0,1})(?!00)\\d{2}\\1(?!0{4})\\2\\d{4}$)|^$"
              placeholder="000-00-0000"
              [(ngModel)]="ssn_input"
              required
              #ssnInput="ngModel"
              sprk-input>
            <span 
              [hidden]="ssnInput.valid || ssnInput.pristine"
              sprk-error>
              {{ ssnInput.invalid && ssnInput.value === '' ? 'This field is required.' : 'This field is invalid.'}}
            </span>  
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
  ssn_input: string = '';

  onSubmit(): void {
    console.log('Submitted!');
  }
}
