import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLinkDirective } from './sprk-link.directive';
import { SprkIconModule } from '../../components/sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from './sprk-link.module';
import { SprkLinkModule } from '../../components/sprk-link/sprk-link.module';
import { SprkLinkComponent } from '../../components/sprk-link/sprk-link.component';
import { SprkBoxModule } from '../sprk-box/sprk-box.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  component: SprkLinkDirective,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links. Images that are links should not
use Spark classes.
- Spark Link has been refactored to be an Angular Directive. The old Angular
Component version has been deprecated. This version will be permanently
removed from Spark in an upcoming release. To update to the new version,
replace any instance of the <code><sprk-link></code> component in your codebase
with the new Directive syntax.
`,
    docs: { iframeHeight: 60 },
  },
};

const modules = {
  imports: [
    SprkLinkDirectiveModule,
    SprkBoxModule,
    SprkIconModule,
    SprkLinkModule,
    RouterModule.forRoot([
      {
        path: 'iframe.html',
        component: SprkLinkComponent,
      },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      idString="default-link"
      analyticsString="default-link"
    >
      Default Link
    </a>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-link.directive'],
};

export const simple = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      variant="simple"
      idString="simple-link"
      analyticsString="simple-link"
    >
      Simple Link
    </a>
  `,
});

simple.parameters = {
  jest: ['sprk-link.directive'],
};

export const light = () => ({
  moduleMetadata: modules,
  template: `
    <a
      sprkLink
      href="#"
      variant="light"
      idString="light-link"
      analyticsString="light-link"
    >
      Light Link
    </a>
  `,
});

light.parameters = {
  jest: ['sprk-link.directive'],
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sprk-o-Box--small sprk-u-BackgroundColor--black">${storyContent}<div>`,
    ),
  ],
};

export const iconWithTextLink = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      variant="hasIcon"
      idString="icon-link-1"
      analyticsString="icon-link-1"
    >
      <sprk-icon
        iconType="arrow-left"
        additionalClasses="
          sprk-c-Icon--l
          sprk-c-Icon--filled-current-color
          sprk-u-mrs"
      >
      </sprk-icon>
      Back
    </a>
  `,
});

iconWithTextLink.parameters = {
  jest: ['sprk-link.directive'],
};

export const disabled = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      isDisabled="true"
      idString="disabled-link"
      analyticsString="disabled-link"
    >
      Disabled Link
    </a>
  `,
});

disabled.parameters = {
  jest: ['sprk-link.directive'],
};

export const disabledSimple = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      variant="simple"
      isDisabled="true"
      idString="disabled-link-simple"
      analyticsString="disabled-link-simple"
    >
      Disabled Link
    </a>
  `,
});

disabledSimple.storyName = 'Disabled - Simple';

disabledSimple.parameters = {
  jest: ['sprk-link.directive'],
};

export const disabledLight = () => ({
  moduleMetadata: modules,
  template: `
    <a
      isDisabled="true"
      sprkLink
      href="#"
      variant="light"
      idString="disabled-light-link"
      analyticsString="disabled-light-link"
    >
      Disabled Link
    </a>
  `,
});

disabledLight.storyName = 'Disabled - Light';

disabledLight.parameters = {
  jest: ['sprk-link.directive'],
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sprk-o-Box--small sprk-u-BackgroundColor--black">${storyContent}<div>`,
    ),
  ],
};

export const disabledIconWithTextLink = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      variant="hasIcon"
      isDisabled="true"
      idString="disabled-icon-link-1"
      analyticsString="disabled-icon-link-1"
    >
      <sprk-icon
        iconType="arrow-left"
        additionalClasses="
          sprk-c-Icon--xl
          sprk-c-Icon--filled-current-color
          sprk-u-mrs"
      >
      </sprk-icon>
      Back
    </a>
  `,
});

disabledIconWithTextLink.storyName = 'Disabled - Icon With Text Link';

disabledIconWithTextLink.parameters = {
  jest: ['sprk-link.directive'],
};

export const deprecated = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-link
      href="#"
      idString="link-5"
      analyticsString="object.action.event"
    >
      Deprecated Web Component Link
    </sprk-link>
  `,
});

deprecated.storyName = 'Component (Deprecated)';

deprecated.parameters = {
  jest: ['sprk-link.directive'],
};
