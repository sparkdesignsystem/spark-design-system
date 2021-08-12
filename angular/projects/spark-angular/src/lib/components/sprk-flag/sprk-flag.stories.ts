// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkFlagModule } from './sprk-flag.module';
import { SprkFlagComponent } from './sprk-flag.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Flag',
  component: SprkFlagComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkFlagModule],
    }),
    componentWrapperDecorator((story) => `<div>${story}</div>`),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `
${markdownDocumentationLinkBuilder('flag')}
- The Flag component has two slots to inject markup
into the component template.
    - \`media-slot\`: Used for adding the media to the component.
    - \`body-slot\`: Used for adding the body content to the component.
- If you pass something into the Flag component that is not
in one of the slots mentioned above, it will not render.
`,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-flag>
      <img
        media-slot
        alt="Provide useful alternative text"
        src="https://spark-assets.netlify.app/spark-logo-mark.svg"
      />
      <p body-slot>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </sprk-flag>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-flag.component'],
};

export const reversed = () => ({
  template: `
    <sprk-flag
      [isReversed]="true"
    >
      <img
        media-slot
        alt="Provide useful alternative text"
        src="https://spark-assets.netlify.app/spark-logo-mark.svg"
      />
      <p body-slot>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </sprk-flag>
  `,
});

reversed.parameters = {
  jest: ['sprk-flag.component'],
};

export const stacked = () => ({
  template: `
    <sprk-flag
      [isStacked]="true"
    >
      <img
        media-slot
        alt="Provide useful alternative text"
        src="https://spark-assets.netlify.app/spark-logo-mark.svg"
      />
      <p body-slot>
        Lorem ipsum dolor. Sit amet pede. Tempus donec et.
        Suspendisse id inventore integer eum non enim diam habitant.
      </p>
    </sprk-flag>
  `,
});

stacked.parameters = {
  jest: ['sprk-flag.component'],
};
