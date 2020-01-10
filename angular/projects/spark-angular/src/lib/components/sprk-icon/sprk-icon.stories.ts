import { SprkIconModule } from './sprk-icon.module';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkIconComponent } from './sprk-icon.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { getIcons, attachIcons } from '../../../../../../../storybook-utilities/icon-utilities/icon-name-util.js';

export default {
  title: 'Components/Icons',
  component: SprkIconComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: markdownDocumentationLinkBuilder('icon'),
    docs: { iframeHeight: 90 },
  },
};

const modules = {
  imports: [
    SprkIconModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="access"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

defaultStory.story = {
  name: 'Default',
};

export const gallery = () => {
  window.addEventListener('sprk-icons-loaded', () => {
    attachIcons(getIcons());
  });

  setTimeout(() => { attachIcons(getIcons()); }, 100);

  return {
    moduleMetadata: modules,
    template: `
      <ul class="sbdocs-gallery-container sprk-o-Stack sprk-o-Stack--split@xs"></ul>
    `,
  };
};

gallery.story = {
  name: 'Gallery',
  parameters: {
    docs: {
      iframeHeight: 1000
    }
  }
};
