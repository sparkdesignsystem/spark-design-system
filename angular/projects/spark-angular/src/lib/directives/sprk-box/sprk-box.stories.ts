import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkBoxDirective } from './sprk-box.directive';
import { SprkBoxModule } from './sprk-box.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: "Components/Box",
  component: SprkBoxDirective,
  decorators: [storyWrapper(storyContent => `<div class="sprk-o-Box sb-decorate">${storyContent}<div>`)],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('box')}
Box is a layout component that separates a group of content from its surroundings.

Use Box when you have a group of content that needs to be visually separated from other content on the page through padding.

Since the effects of Box are only seen through whitespace, the examples have a background color to illustrate how Box works.

Box has built in padding sizes that are paired with our Spacing values. Otherwise, it will default to medium spacing.

Refer to [Class Modifiers section](#class-modifiers) for default values.


`,
    docs: { iframeHeight: 100 }
  }
};

const modules = {
  imports: [
    SprkBoxModule,
  ],
};

export const defaultBox = () => ({
  moduleMetadata: modules,
  template: `
    <div sprkBox>
      Box
    </div>
  `,
});

defaultBox.story = {
  name: 'Default'
};
