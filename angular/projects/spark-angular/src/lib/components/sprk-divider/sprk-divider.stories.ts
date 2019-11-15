import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkDividerModule } from './sprk-divider.module';
import { SprkDividerComponent } from './sprk-divider.component';

export default {
  title: 'Components|Divider',
  component: SprkDividerComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/divider)
    `,
    docs: { iframeHeight: 60 },
  },
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
