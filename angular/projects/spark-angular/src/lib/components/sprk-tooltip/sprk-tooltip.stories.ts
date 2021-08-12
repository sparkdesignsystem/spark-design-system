// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkTooltipModule } from './sprk-tooltip.module';
import { SprkTooltipComponent } from './sprk-tooltip.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Tooltip',
  component: SprkTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkTooltipModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) => `<div>${story}</div>`),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `${markdownDocumentationLinkBuilder('tooltip')}`,
      },
      iframeHeight: 160,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-tooltip
      iconAdditionalClasses="sprk-c-Icon--filled"
    >
      Use Tooltips to provide info that is not vital to completing the task.
      Keep the text short and stick to what’s helpful and relevant.
    </sprk-tooltip>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-tooltip.component'],
};
