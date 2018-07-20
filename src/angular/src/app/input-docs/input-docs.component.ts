import { Component } from '@angular/core';

export class TestInputModel {
  constructor(
    public id: number,
    public name: string
  ) {}
}

@Component({
  selector: 'sprk-input-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Inputs</h2>
        <form #testForm="ngForm" (ngSubmit)="onSubmit()">
          <div class="sprk-b-InputContainer">
            <label for="text-input-normal" class="sprk-b-Label">ID</label>
            <input class="sprk-b-TextInput sprk-u-Width-100" 
                   id="text-input-normal" 
                   type="text" 
                   aria-describedby="text-input-normal--error-container"
                   name="id"
                   [(ngModel)]="testInputModel.id">
            <div class="sprk-b-ErrorText" id="text-input-normal--error-container">
            </div>
          </div>
          <div class="sprk-b-InputContainer">
            <label for="text-input-normal" class="sprk-b-Label">Name</label>
            <input class="sprk-b-TextInput sprk-u-Width-100" 
                   id="text-input-normal" 
                   type="text" 
                   aria-describedby="text-input-normal--error-container"
                   name="name"
                   [(ngModel)]="testInputModel.name" required>
            <div class="sprk-b-ErrorText" id="text-input-normal--error-container">
            </div>
          </div>
          <sprk-button [isDisabled]="!testForm.form.valid ? true : false">Submit</sprk-button>
        </form>
      </div>
  `,
  styles: ['']
})

export class InputDocsComponent {
  testInputModel = new TestInputModel(1, 'My Name');
  constructor() { }

  onSubmit(): void {
    console.log('Submitted!');
  }
}
