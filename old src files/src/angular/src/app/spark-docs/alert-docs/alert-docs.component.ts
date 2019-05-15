import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-alert-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Alerts
      </h2>

      <sprk-alert alertType="info" idString="alert-info-1" analyticsString="object.action.event">
        This is an info Spark alert!
      </sprk-alert>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Success alert! Not dismissible!
      </h2>

      <sprk-alert alertType="success" [dismissible]="false" idString="alert-success-1" analyticsString="object.action.event">
        Hello, World.
      </sprk-alert>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Fail alert dismissible
      </h2>

      <sprk-alert alertType="fail" [dismissible]="true" idString="alert-fail-1" analyticsString="object.action.event">
        Hello, World. I'm dismissible!
      </sprk-alert>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Success alert dismissible
      </h2>

      <sprk-alert alertType="success" [dismissible]="true" idString="alert-success-2" analyticsString="object.action.event">
        Hello, World. I'm dismissible!
      </sprk-alert>
    </div>
  `,
  styles: ['']
})
export class AlertDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
