import { addDecorator } from '@storybook/angular';
import { storyWrapper } from '../../../../../../.storybook/helpers';
import { SprkDividerModule } from './sprk-divider.module';

addDecorator(
  storyWrapper(
    storyContent => (
      `<div class="sprk-o-Box">${ storyContent }<div>`
    )
  )
);

export default {
  title: 'Components|Divider',
  component: SprkDividerModule,
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
