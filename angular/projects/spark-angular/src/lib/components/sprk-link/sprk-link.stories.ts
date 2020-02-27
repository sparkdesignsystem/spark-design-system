import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLinkModule } from './sprk-link.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkLinkComponent } from './sprk-link.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  component: SprkLinkComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links.
Images that are links should not use Spark classes.
`,
    docs: { iframeHeight: 60 },
  },
};

const modules = {
  imports: [
    SprkLinkModule,
    SprkIconModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkLinkComponent,
    }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-link
      href="#"
      idString="link-1"
      analyticsString="object.action.event"
    >
      Default Link
    </sprk-link>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-link.component'],
  }
};

export const simple = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-link
      linkType="simple"
      href="#"
      idString="link-2"
      analyticsString="object.action.event"
    >
      Simple Link
    </sprk-link>
  `,
});

simple.story = {
  parameters: {
    jest: ['sprk-link.component'],
  }
};

export const iconWithTextLink = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-link
      linkType="icon"
      href="#"
      idString="link-3"
      analyticsString="object.action.event"
    >
      <sprk-icon
        iconType="communication"
        additionalClasses="sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-u-mrs"
      >
      </sprk-icon>
      Message Us
    </sprk-link>
  `,
});

iconWithTextLink.story = {
  parameters: {
    jest: ['sprk-link.component'],
  }
};

export const disabled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-link
      isDisabled="true"
      idString="link-4"
      analyticsString="object.action.event"
    >
      Disabled Link
    </sprk-link>
  `,
});

disabled.story = {
  parameters: {
    jest: ['sprk-link.component'],
  }
};
