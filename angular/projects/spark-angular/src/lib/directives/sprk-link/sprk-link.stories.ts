import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkLinkDirective } from './sprk-link.directive';
import { SprkIconModule } from '../../components/sprk-icon/sprk-icon.module';
import { SprkLinkDirectiveModule } from './sprk-link.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  component: SprkLinkDirective,
  decorators: [storyWrapper(storyContent => `<div class="sprk-o-Box sb-decorate">${storyContent}<div>`)],
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
    SprkLinkDirectiveModule,
    SprkIconModule,
  ],
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

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-link.directive',
    ],
  },
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

simple.story = {
  parameters: {
    jest: [
      'sprk-link.directive',
    ],
  },
};

export const iconWithTextLink = () => ({
  moduleMetadata: modules,
  template: `
    <a
      href="#"
      sprkLink
      variant="icon"
      idString="icon-link"
      analyticsString="icon-link"
    >
      <sprk-icon
        iconType="communication"
        additionalClasses="sprk-c-Icon--l sprk-c-Icon--stroke-current-color sprk-u-mrs"
      >
      </sprk-icon>
      Message Us
    </a>
  `,
});

iconWithTextLink.story = {
  parameters: {
    jest: [
      'sprk-link.directive',
    ],
  },
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

disabled.story = {
  parameters: {
    jest: ['sprk-link.directive'],
  }
};

