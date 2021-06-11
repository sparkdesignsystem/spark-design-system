import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkBoxDirective } from './sprk-box.directive';
import { SprkBoxModule } from './sprk-box.module';

export default {
  title: 'Components/Box',
  component: SprkBoxDirective,
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box sb-decorate">${storyContent}<div>`,
    ),
  ],
  parameters: {
    docs: { iframeHeight: 100 },
  },
};

const modules = {
  imports: [SprkBoxModule],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
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
