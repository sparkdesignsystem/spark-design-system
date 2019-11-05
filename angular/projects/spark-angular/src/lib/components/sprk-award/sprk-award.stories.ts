import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAwardModule } from './sprk-award.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkAwardComponent } from './sprk-award.component';

export default {
  title: 'Components|Award',
  component: SprkAwardModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box sprk-o-CenteredColumn">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/award)
    `,
  },
};

const modules = {
  imports: [
    SprkAwardModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkAwardComponent,
    }]),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-award
      splitAt="tiny"
      title="Spark Award Component"
      imgOneSrc="https://spark-assets.netlify.com/spark-placeholder.jpg"
      imgTwoSrc="https://spark-assets.netlify.com/spark-placeholder.jpg"
      imgOneAlt="placeholder!"
      imgOneHref="#nogo"
      imgTwoHref="#nogo"
      imgTwoAlt="placeholder!"
      disclaimerCopy="This is some copy for the disclaimer about disclaimer things."
      disclaimerTitle="My disclaimer title"
      analyticsStringImgOne="Foo"
      analyticsStringImgTwo="Test"
      idString="award-1"
    >
    </sprk-award>
  `,
});

defaultStory.story = {
  name: 'Default',
};
