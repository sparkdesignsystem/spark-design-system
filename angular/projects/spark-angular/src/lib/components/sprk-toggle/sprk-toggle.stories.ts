// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkToggleModule } from './sprk-toggle.module';
import { SprkToggleComponent } from './sprk-toggle.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Toggle',
  component: SprkToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkToggleModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) => `${story}`),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `${markdownDocumentationLinkBuilder('toggle')}`,
      },
      iframeHeight: 160,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-toggle
      triggerText="My Disclaimer"
      analyticsString="My Disclaimer"
      idString="toggle-1"
    >
      <p class="sprk-b-TypeBodyFour">
        This is an example of disclaimer
        content. The aria-expanded="true"
        attribute will be viewable in the
        DOM on the toggle link when this
        content is shown. When this content
        is hidden the aria-expanded attribute
        will have the value of false. This helps
        accessibilty devices in understanding
        that the link is a control for
        expandable content.
      </p>
    </sprk-toggle>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-toggle.component'],
};
