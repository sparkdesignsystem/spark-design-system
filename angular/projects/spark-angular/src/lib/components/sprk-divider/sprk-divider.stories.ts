import { storyWrapper } from '../../../../../../.storybook/helpers';
import { SprkDividerModule } from './sprk-divider.module';

export default {
  title: 'Components|Divider',
  component: SprkDividerModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
};

const modules = {
  imports: [
    SprkDividerModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-divider idString="divider-1"></sprk-divider>
  `
});

defaultStory.story = {
  name: 'Default',
};
