import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkBoxDirective } from './sprk-box.directive';
import { SprkBoxModule } from './sprk-box.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: "Components/Box",
  component: SprkBoxDirective,
  decorators: [storyWrapper(storyContent => `<div class="sprk-o-Box sb-box-story">${storyContent}<div>`)],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('box')}
Box is a layout component that separates a group of content from its surroundings.

Use Box when you have a group of content that needs to be visually separated from other content on the page through padding.

Since the effects of Box are only seen through whitespace, the examples have a background color to illustrate how Box works.

Box has 6 built in padding sizes that are paired with our Spacing values:

- Flush (0px)
- Tiny (4px)
- Small (8px)
- Medium (16px, default)
- Large (32px)
- Huge (64px)

`,
    docs: { iframeHeight: 189 }
  }
};

const modules = {
  imports: [
    SprkBoxModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <div sprkBox>
      Box
    </div>
  `,
});

defaultStory.story = {
  name: 'Default'
};

export const flushBox = () => ({
  moduleMetadata: modules,
  template: `
    <div
      class="sprk-o-Box--flush"
      sprkBox
    >
      Box
    </div>
  `
});

flushBox.story = {
  name: 'Flush'
};

export const tiny = () => ({
  moduleMetadata: modules,
  template: `
    <div
      class="sprk-o-Box--tiny"
      sprkBox
    >
      Box
    </div>
  `
});

export const small = () => ({
  moduleMetadata: modules,
  template: `
    <div
      class="sprk-o-Box--small"
      sprkBox
    >
      Box
    </div>
  `
});


export const large = () => ({
  moduleMetadata: modules,
  template: `
    <div
      class="sprk-o-Box--large"
      sprkBox
    >
      Box
    </div>
  `,
});

export const huge = () => ({
  moduleMetadata: modules,
  template: `
    <div
      class="sprk-o-Box--huge"
      sprkBox
    >
      Box
    </div>
  `,
});



