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
      triggerIconType="question-filled"
      iconAdditionalClasses="sprk-c-Icon--filled"
      idString='idstring-1'
      analyticsString='analyticsString-1'
      additionalClasses='spark-example'
    >
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
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

export const cornersStory = () => ({
  moduleMetadata: modules,
  template: `
    <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 5%; top: 5%;">
      <sprk-tooltip isToggled="true">
        top left corner
      </sprk-tooltip>
    </span>
    <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 55%; top: 5%;">
      <sprk-tooltip isToggled="true">
        top right corner
      </sprk-tooltip>
    </span>
    <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 5%; top: 55%;">
      <sprk-tooltip isToggled="true">
        bottom left corner
      </sprk-tooltip>
    </span>
    <span class="sprk-b-TypeBodyTwo" style="position: absolute; left: 55%; top: 55%;">
      <sprk-tooltip isToggled="true">
        bottom right corner
      </sprk-tooltip>
    </span>
  `,
});

cornersStory.story = {
  name: 'Corners',
  parameters: {
    jest: [
      'sprk-tooltip.component',
    ],
  },
};

export const withText = () => ({
  moduleMetadata: modules,
  template: `
  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
    <sprk-tooltip
      triggerIconType="question-filled"
      iconAdditionalClasses="sprk-c-Icon--filled"
      idString='idstring-1'
      analyticsString='analyticsString-1'
      additionalClasses='spark-example'
    >
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id dee doo da fauxet la gigman roo.
    </sprk-tooltip>
  `,
});

withText.story = {
  name: 'Inline',
  parameters: {
    jest: [
      'sprk-tooltip.component',
    ],
  },
};
