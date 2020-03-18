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
    info: `
${markdownDocumentationLinkBuilder('flag')}
- The Flag component has two slots to inject markup
into the component template.
    - \`figure-slot\`: Used for adding the media to the component.
    - \`body-slot\`: Used for adding the body content to the component.
- If you pass something into the Flag component that is not
in one of the slots mentioned above, it will not render.
`,
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

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-flag.component'],
  },
};

export const reverse = () => ({
  moduleMetadata: modules,
  template:
  `
    <sprk-flag
      isReversed="true"
    >
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

reverse.story = {
  parameters: {
    jest: ['sprk-flag.component'],
  },
};

export const stacked = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-flag
      isStacked="true"
    >
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

stacked.story = {
  parameters: {
    jest: ['sprk-flag.component'],
  },
};
