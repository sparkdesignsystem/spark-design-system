import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sprk-award-docs',
  template: `
    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbm">
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
          analyticsStringImgTwo="Test"
          idString="award-1">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbm">
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
          analyticsStringImgTwo="Test"
          idString="award-2">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbm">
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
          analyticsStringImgTwo="Test"
          idString="award-3">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbm">
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
          analyticsStringImgTwo="Test"
          idString="award-4">
        </sprk-award>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbm">
        Award With Disclaimer set to false
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-award
          disclaimer="false"
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
          analyticsStringImgTwo="Test"
          idString="award-5">
        </sprk-award>
      </div>
    </div>
  `,
  styles: ['']
})
export class AwardDocsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
