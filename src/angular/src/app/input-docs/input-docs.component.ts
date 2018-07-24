import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sprk-input-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Inputs</h2>
        <form>
          <sprk-input-container>
            <label sprk-label>ID</label>
            <input 
              name="id" 
              type="text" 
              sprk-input>
            <span sprk-error></span>
          </sprk-input-container>
          <sprk-input-container>
            <label sprk-label>Username</label>
            <input 
              name="username" 
              type="text" 
              sprk-input>
            <span sprk-error>{{ this.errorMessage }}</span>
          </sprk-input-container>
          <sprk-button>Submit</sprk-button>
        </form>
      </div>
  `,
  styles: ['']
})

export class InputDocsComponent {
  constructor() { }

  errorMessage = "Error Message";

  sampleForm = new FormGroup({
    username: new FormControl(),
    id: new FormControl()
  });

  onSubmit(): void {
    console.log('Submitted!');
  }
}
