import { RouterModule } from '@angular/router';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkToggleModule } from './sprk-toggle.module';
import { SprkToggleComponent } from './sprk-toggle.component';
import { markdownLinkBuilder } from '../../../../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Toggle',
  component: SprkToggleComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: markdownLinkBuilder('toggle'),
    docs: { iframeHeight: 160 },
  },
};

const modules = {
  imports: [
    SprkToggleModule,
    RouterModule.forRoot([{ path: 'iframe.html', component: SprkToggleComponent }]),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-toggle
      title="My Disclaimer"
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

defaultStory.story = {
  name: 'Default',
};
