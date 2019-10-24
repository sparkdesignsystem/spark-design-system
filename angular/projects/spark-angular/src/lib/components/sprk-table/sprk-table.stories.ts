import { SprkTableModule } from './sprk-table.module';

export default {
  title: 'Components|Table',
  component: SprkTableModule,
};

const modules = {
  imports: [
    SprkTableModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
  `,
});

defaultStory.story = {
  name: 'Default',
};
