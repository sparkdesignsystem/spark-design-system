import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkTooltipModule } from './sprk-tooltip.module';
import { SprkTooltipComponent } from './sprk-tooltip.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  component: SprkTooltipComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${storyContent}<div>`
      )
    )
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('tooltip')}`,
    docs: { iframeHeight: 160 },
  },
};

const modules = {
  imports: [
    SprkTooltipModule,
    BrowserAnimationsModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-tooltip
      iconAdditionalClasses="sprk-c-Icon--filled"
    >
      Sit nulla est ex deserunt exercitation anim occaecat.
      Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
    </sprk-tooltip>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-tooltip.component',
    ],
  },
};
