import React, { useEffect } from 'react';
import SprkIcon from './SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import {
  getIcons,
  attachIcons,
} from '../../../../storybook-utilities/icon-utilities/icon-name-util';

export default {
  title: 'Components/Icons',
  component: SprkIcon,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    jest: ['SprkIcon'],
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
  },
};

export const defaultStory = () => (
  <SprkIcon iconName="access" additionalClasses="sprk-c-Icon--xl" />
);

defaultStory.story = {
  name: 'Default',
};

export const gallery = () => {
  useEffect(() => {
    attachIcons(getIcons());
  }, []);

  window.addEventListener('sprk-icons-loaded', () => {
    attachIcons(getIcons());
  });

  return (
    <ul
      className="
        sbdocs-gallery-container
        sprk-o-Stack
        sprk-o-Stack--split@xs"
    />
  );
};

gallery.story = {
  name: 'Gallery',
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 1000,
    },
  },
};
