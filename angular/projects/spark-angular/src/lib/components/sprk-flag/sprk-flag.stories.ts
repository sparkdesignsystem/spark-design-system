import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkFlagModule } from './sprk-flag.module';
import { SprkFlagComponent } from './sprk-flag.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Flag',
  component: SprkFlagComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('flag')}`,
  },
};

const modules = {
  imports: [
    SprkFlagModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-flag>
      <img
        figure-slot
        alt="Provide useful alternative text"
        src="https://spark-assets.netlify.com/spark-logo-mark.svg"
      />
      <p body-slot>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </sprk-flag>
  `
});
