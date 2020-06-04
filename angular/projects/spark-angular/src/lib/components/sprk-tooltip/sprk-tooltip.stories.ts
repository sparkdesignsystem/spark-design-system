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
  <sprk-tooltip icon="question">I am the tooltip content</sprk-tooltip>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-toggle.component',
    ],
  },
};

export const cornersStory = () => ({
  moduleMetadata: modules,
  template: `
    <div style="position:absolute; top: 5%; left:5%">
      <sprk-tooltip icon="question">Top Left</sprk-tooltip>
    </div>
    <button>hi</button>
    <div style="position:absolute; top: 5%; left:55%">
      <sprk-tooltip icon="question">Top Right</sprk-tooltip>
    </div>
    <div style="position:absolute; top: 55%; left:5%">
      <sprk-tooltip icon="question">Bottom Left</sprk-tooltip>
    </div>
    <div style="position:absolute; top: 55%; left:55%">
      <sprk-tooltip icon="question">Bottom Right</sprk-tooltip>
    </div>
  `,
});

cornersStory.story = {
  name: 'Corners',
  parameters: {
    jest: [
      'sprk-toggle.component',
    ],
  },
};
