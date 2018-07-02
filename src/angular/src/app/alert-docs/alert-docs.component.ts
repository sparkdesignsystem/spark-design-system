import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-alert-docs',
  template: `
  <div class="drizzle-o-ContentGrouping">
    <h2 class="drizzle-b-h2">
      Alerts
    </h2>

    <sprk-alert alertType="info">
      This is a info Spark alert!
    </sprk-alert>
  </div>

  <div class="drizzle-o-ContentGrouping">
    <h2 class="drizzle-b-h2">
      Success alert
    </h2>

    <sprk-alert alertType="success">
      Hello, World.
    </sprk-alert>
  </div>

  <div class="drizzle-o-ContentGrouping">
    <h2 class="drizzle-b-h2">
      Fail alert
    </h2>

    <sprk-alert alertType="fail">
      Hello, World.
    </sprk-alert>
  </div>

  `,
  styles: ['']
})
export class AlertDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
