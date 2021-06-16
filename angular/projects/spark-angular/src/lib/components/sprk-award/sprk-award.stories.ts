import { SprkAwardModule } from './sprk-award.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkAwardComponent } from './sprk-award.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
export default {
  title: 'Components/Award',
  component: SprkAwardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkAwardModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
          {
            path: 'iframe.html',
            component: SprkAwardComponent,
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
        component: `${markdownDocumentationLinkBuilder('award')}`,
      },
      iframeHeight: 400,
    },
  },
};

export const defaultStory = () => ({
  template: `
    <sprk-award
      splitAt="tiny"
      heading="Award Component Heading"
      imgOneSrc="https://spark-assets.netlify.app/spark-logo-updated.svg"
      imgTwoSrc="https://spark-assets.netlify.app/spark-logo-updated.svg"
      imgOneAlt="placeholder!"
      imgOneHref="#nogo"
      imgTwoHref="#nogo"
      imgTwoAlt="placeholder!"
      disclaimerCopy="This is an example of disclaimer content.
        The aria-expanded='true' attribute will be
        viewable in the DOM on the toggle link when
        this content is shown. When this content is
        hidden the aria-expanded attribute will have
        the value of false. This helps accessibilty
        devices in understanding that the link is a
        control for expandable content."
      disclaimerTitle="My Disclaimer"
      imgOneAnalyticsString="image-one-data-analytics"
      imgTwoAnalyticsString="image-two-data-analytics"
    >
    </sprk-award>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-award.component'],
};
