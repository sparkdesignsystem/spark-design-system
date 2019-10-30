import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkHighlightBoardModule } from './sprk-highlight-board.module';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Components|Highlight Board',
  component: SprkHighlightBoardModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ]
};

const modules = {
  imports: [
    SprkHighlightBoardModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkHighlightBoardComponent,
    }]),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="https://sparkdesignsystem.com/"
      ctaText2="Developers"
      ctaHref2="https://sparkdesignsystem.com/"
      imgSrc="https://spark-assets.netlify.com/desktop.jpg"
      imgAlt="placeholder"
      idString="highlightboard-1"
    >
    </sprk-highlight-board>
  `,
});

defaultStory.story = {
  name: 'Default'
};

export const noImage = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Highlight Board Heading Example"
      ctaText="Learn More"
      ctaText2="Learn More"
      type="noImage"
      idString="highlightboard-3"
    >
    </sprk-highlight-board>
  `,
});

export const stacked = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-highlight-board
      heading="Highlight Board Heading Example"
      ctaText="Learn More"
      type="stacked"
      imgSrc="https://staging.sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
      imgAlt="placeholder"
      idString="highlightboard-4"
    >
    </sprk-highlight-board>
  `,
});

