import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-award-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Awards
      </h2>

      <sprk-award
        splitAt="medium"
        title="This is an info Spark award!"
        imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
        imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
        imgOneAlt="placeholder!"
        imgOneHref="https://www.sparkdesignsystem.com/"
        imgTwoHref="https://www.sparkdesignsystem.com/"
        imgTwoAlt="placeholder!"
        disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
        disclaimerTitle="My disclaimer Title"
        analyticsStringImgOne="Foo"
        analyticsStringImgTwo="Test">
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
