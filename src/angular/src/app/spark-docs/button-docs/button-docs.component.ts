import { Component, OnInit } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark-core/es5/spinners';

@Component({
  selector: 'sprk-button-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Standard Buttons</h2>
      <button sprkButton>Hello, Spark Button</button>
      <button class="sprk-c-Button--secondary" sprkButton>Hello, World.</button>
      <button class="sprk-c-Button--tertiary" sprkButton>Hello, World.</button>
      <button class="sprk-c-Button--removal" sprkButton>Hello, World.</button>
      <button disabled sprkButton>Hello, World.</button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Spinner Buttons</h2>
      <button sprkButton (click)="checkSpinner($event)">Spinner Button</button>
    </div>
  `
})
export class ButtonDocsComponent implements OnInit {
  constructor() {}

  submitSpinning = false;

  ngOnInit() {}

  checkSpinner(event): void {
    if (!this.submitSpinning) {
      setSpinning(event.target, {});
      this.submitSpinning = true;
    }
  }
}
