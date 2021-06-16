// @ts-ignore prettier-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { SprkHighlightBoardModule } from './sprk-highlight-board.module';
import { SprkHighlightBoardComponent } from './sprk-highlight-board.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Components/Highlight Board',
  component: SprkHighlightBoardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkHighlightBoardModule,
        RouterModule.forRoot([
          {
            path: 'iframe.html',
            component: SprkHighlightBoardComponent,
          },
        ]),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `
${markdownDocumentationLinkBuilder('highlight-board')}
##### Accessibility
- If the Buttons are being used to navigate
to a new page, they should be \`<a>\` elements.
If they are being used to trigger an event or action,
then they should be \`<button>\` elements.
- If the image used is decorative and does not present any important content,
make sure to set \`imgAlt=""\` so the image will be hidden from assistive
technology. For more information on how and when to add \`alt\` text to images,
see this [alt text guide](https://webaim.org/techniques/alttext/#decorative).
`,
      },
      iframeHeight: 600,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaHref="#nogo"
      ctaText2="Developers"
      ctaHref2="#nogo"
      imgSrc="https://spark-assets.netlify.app/desktop.jpg"
      imgAlt=""
      idString="highlightboard-1"
    >
    </sprk-highlight-board>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-highlight-board.component'],
};

export const noImage = () => ({
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaText2="Developers"
      type="noImage"
      idString="highlightboard-3"
    >
    </sprk-highlight-board>
  `,
});

noImage.parameters = {
  docs: { iframeHeight: 300 },
  jest: ['sprk-highlight-board.component'],
};

export const stacked = () => ({
  template: `
    <sprk-highlight-board
      heading="Hello, Welcome To Spark Design System"
      ctaText="Designers"
      ctaText2="Developers"
      type="stacked"
      imgSrc="https://spark-assets.netlify.app/desktop.jpg"
      imgAlt=""
      idString="highlightboard-4"
    >
    </sprk-highlight-board>
  `,
});

stacked.parameters = {
  docs: { iframeHeight: 800 },
  jest: ['sprk-highlight-board.component'],
};
