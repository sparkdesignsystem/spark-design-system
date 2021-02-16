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
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('tooltip')}`,
    docs: { iframeHeight: 160 },
  },
};

const modules = {
  imports: [SprkTooltipModule, BrowserAnimationsModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <div>
      <p>
        This is some demo text before the tooltip.
        <sprk-tooltip
          iconAdditionalClasses="sprk-c-Icon--filled"
        >
          Use Tooltips to provide info that’s not vital to completing the task.
          Keep the text short and stick to what’s helpful and relevant.
        </sprk-tooltip>
      </p>
    </div>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-tooltip.component'],
  },
};
