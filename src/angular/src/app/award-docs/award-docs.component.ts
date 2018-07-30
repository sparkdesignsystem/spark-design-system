import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-award-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Awards
      </h2>

      <sprk-award
        awardType="split"
        title="This is an info Spark award!"
        imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
        imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
        imgOneAlt="placeholder!"
        imgTwoAlt="placeholder!"
        disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
        disclaimerTitle="My disclaimer Title">
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
