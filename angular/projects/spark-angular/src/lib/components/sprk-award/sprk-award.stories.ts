import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAwardModule } from './sprk-award.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkAwardComponent } from './sprk-award.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Award',
  component: SprkAwardComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box sprk-o-CenteredColumn">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('award')}`,
    docs: { iframeHeight: 400 },
  },
};

const modules = {
  imports: [
    SprkAwardModule,
    BrowserAnimationsModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-award
      splitAt="tiny"
      title="Award Component Heading"
      imgOneSrc="https://spark-assets.netlify.com/spark-logo-updated.svg"
      imgTwoSrc="https://spark-assets.netlify.com/spark-logo-updated.svg"
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
  parameters: {
    jest: ['sprk-award.component'],
  },
};
