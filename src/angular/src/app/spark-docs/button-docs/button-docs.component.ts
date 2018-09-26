import { Component, OnInit } from '@angular/core';
import { setSpinning } from '@sparkdesignsystem/spark-core/components/spinners';

@Component({
  selector: 'sprk-button-docs',
  template: `<div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Standard Buttons</h2>
      <button sprkButton>Hello, Spark Button</button>
      <button additionalClasses="sprk-c-Button--secondary" sprkButton>Hello, World.</button>
      <button additionalClasses="sprk-c-Button--tertiary" sprkButton>Hello, World.</button>
      <button additionalClasses="sprk-c-Button--removal" sprkButton>Hello, World.</button>
      <button disabled sprkButton>Hello, World.</button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Spinner Buttons</h2>
      <button sprkButton (click)="checkSpinner($event)">Spinner Button</button>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">Additional Classes</h2>
      <button additionalClasses="sprk-u-mbm" sprkButton>Margin Bottom</button>
      <button additionalClasses="sprk-c-Button--secondary sprk-u-pas" sprkButton>Small Padding</button>
    </div>`
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
