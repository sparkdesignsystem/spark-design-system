import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sprk-input-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Inputs</h2>
        <form [formGroup]="sampleForm">
          <sprk-input-container>
            <label sprk-label>ID</label>
            <input name="id" type="text" formControlName="id" sprk-input>
            <span sprk-input-error></span>
          </sprk-input-container>
          <sprk-input-container labelText="Username">
            <label for="username" sprk-label>Username</label>
            <input name="username" 
              type="text" 
              formControlName="username" 
              sprk-input>
            <span sprk-error>Error dog</span>
          </sprk-input-container>
          <sprk-button>Submit</sprk-button>
        </form>
      </div>
  `,
  styles: ['']
})

export class InputDocsComponent {
  constructor() { }

  sampleForm = new FormGroup({
    username: new FormControl(),
    id: new FormControl()
  });

  onSubmit(): void {
    console.log('Submitted!');
  }
}
