import { SprkIconModule } from './sprk-icon.module';

export default {
  title: 'Components|Icons',
  component: SprkIconModule,
};

const modules = {
  imports: [
    SprkIconModule,
  ],
};

export const access = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon iconType="access" additionalClasses="sprk-c-Icon--l"></sprk-icon>
  `
});
