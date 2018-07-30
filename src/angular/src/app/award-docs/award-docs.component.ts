import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-award-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Alerts
      </h2>

      <sprk-award awardType="info">
        This is an info Spark award!
      </sprk-award>
    </div>
  `,
  styles: ['']
})
export class AwardDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
