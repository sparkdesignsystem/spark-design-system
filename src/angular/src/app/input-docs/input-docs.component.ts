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
              name="username" 
              type="text" 
              [(ngModel)]="username"
              required
              #textInput="ngModel"
              sprk-input>
            <span 
              [hidden]="textInput.valid || textInput.pristine" 
              sprk-error>This field is required.</span>
          </sprk-input-container>
          <sprk-button [isDisabled]="!sampleForm.form.valid">Submit</sprk-button>
        </form>
      </div>
  `,
  styles: ['']
})

export class InputDocsComponent {
  constructor() { }

  username: string = '';

  onSubmit(): void {
    console.log('Submitted!');
  }
}
