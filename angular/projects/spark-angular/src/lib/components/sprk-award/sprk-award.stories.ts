import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAwardModule } from './sprk-award.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkAwardComponent } from './sprk-award.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Award',
  component: SprkAwardComponent,
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sprk-o-CenteredColumn">${storyContent}<div>`,
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `${markdownDocumentationLinkBuilder('award')}`,
      },
      iframeHeight: 400,
    },
  },
};

const modules = {
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
};

export const defaultStory = () => ({
  moduleMetadata: modules,
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
