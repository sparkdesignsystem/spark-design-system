import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-alert-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Alerts
      </h2>

      <sprk-alert alertType="info">
        This is an info Spark alert!
      </sprk-alert>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Success alert! Not dismissible!
      </h2>

      <sprk-alert alertType="success" [dismissible]="false">
        Hello, World.
      </sprk-alert>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Fail alert dismissible
      </h2>

      <sprk-alert alertType="fail" [dismissible]="true">
        Hello, World. I'm dismissible!
      </sprk-alert>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Success alert dismissible
      </h2>

      <sprk-alert alertType="success" [dismissible]="true">
        Hello, World. I'm dismissible!
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
