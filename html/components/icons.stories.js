import { useEffect } from '@storybook/client-api';
import '../utilities/polyfills/classListSVG';
import {
  getIcons,
  attachIcons,
} from '../../storybook-utilities/icon-utilities/icon-name-util';
import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Icons',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('icon')}

The icons in Spark are the property of Rocket Mortgage
and are not provided directly in our packages. You
will need to include the Icon yourself.

#### Accessibility

Icons can simply be decorative or intended to convey
meaning. Each use-case has separate accessibility
considerations.

Decorative Icons are purely visual or used to reinforce accompanying
text.

- The \`aria-hidden="true"\` attribute must be applied to any purely
decorative icon. This ensures that a screen reader will not communicate
unwanted meaning to the user.

Standalone Icons convey meaning or imply action and do not have accompanying
text.

- All Icons contain a title attribute that screen readers will use to
communicate the Icon’s meaning.
`,
    docs: { iframeHeight: 90 },
  },
};

export const defaultStory = () =>
  `
  <svg class="sprk-c-Icon sprk-c-Icon--xl" viewBox="0 0 100 100">
    <use xlink:href="#access" />
  </svg>
  `;

defaultStory.story = {
  name: 'Default',
};

export const Gallery = () => {
  window.addEventListener('sprk-icons-loaded', () => {
    attachIcons(getIcons());
  });

  useEffect(() => {
    attachIcons(getIcons());
  }, []);

  return `
    <ul 
      class="
        sbdocs-gallery-container 
        sprk-o-Stack 
        sprk-o-Stack--split@xs
      ">
    </ul>
  `;
};

Gallery.story = {
  name: 'Gallery',
  parameters: {
    docs: { iframeHeight: 1000 },
  },
};
