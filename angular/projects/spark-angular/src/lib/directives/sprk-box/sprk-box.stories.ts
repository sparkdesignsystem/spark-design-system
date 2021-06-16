// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkBoxDirective } from './sprk-box.directive';
import { SprkBoxModule } from './sprk-box.module';

export default {
  title: 'Components/Box',
  component: SprkBoxDirective,
  decorators: [
    moduleMetadata({
      imports: [SprkBoxModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box sb-decorate">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 100,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <div sprkBox>
      Box
    </div>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-box.directive'],
};
