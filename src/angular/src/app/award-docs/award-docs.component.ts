import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-award-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Award split at tiny breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="tiny"
          title="Spark Award Component"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Award split at small breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="small"
          title="Spark Award Component"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Award split at medium breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="medium"
          title="Spark Award Component"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Award split at large breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="large"
          title="Spark Award Component"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Award split at huge breakpoint
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          splitAt="huge"
          title="Spark Award Component"
          imgOneSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgTwoSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/spark-placeholder.jpg"
          imgOneAlt="placeholder!"
          imgOneHref="https://www.sparkdesignsystem.com/"
          imgTwoHref="https://www.sparkdesignsystem.com/"
          imgTwoAlt="placeholder!"
          disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
          disclaimerTitle="My disclaimer title"
          analyticsStringImgOne="Foo"
          analyticsStringImgTwo="Test">
        </sprk-award>
      </div>
    </div>
  `,
  styles: ['']
})
export class AwardDocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
