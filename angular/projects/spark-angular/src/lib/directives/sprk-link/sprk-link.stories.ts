// @ts-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
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
    moduleMetadata({
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
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 60,
      description: {
        component: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links. Images that are links should not
use Spark classes.
- Spark Link has been refactored to be an Angular Directive. The old Angular
Component version has been deprecated. This version will be permanently
removed from Spark in an upcoming release. To update to the new version,
replace any instance of the <code><sprk-link></code> component in your codebase
with the new Directive syntax.
`,
      },
    },
  },
} as Meta;

export const defaultStory = () => ({
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
};

light.decorators = [
  componentWrapperDecorator(
    (story) =>
      `<div class="sprk-o-Box sprk-o-Box--small sprk-u-BackgroundColor--black">${story}<div>`,
  ),
];

export const iconWithTextLink = () => ({
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
};

disabledLight.decorators = [
  componentWrapperDecorator(
    (story) =>
      `<div class="sprk-o-Box sprk-o-Box--small sprk-u-BackgroundColor--black">${story}<div>`,
  ),
];

export const disabledIconWithTextLink = () => ({
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
