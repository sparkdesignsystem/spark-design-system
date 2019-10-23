import { SprkDividerModule } from './sprk-divider.module';

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
