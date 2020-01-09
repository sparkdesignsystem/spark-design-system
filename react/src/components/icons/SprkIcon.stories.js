import React, { useEffect } from 'react';
import SprkIcon from './SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { getIcons, attachIcons, createIconExample } from "../../../../storybook-utilities/icon-utilities/icon-name-util";

export default {
  title: 'Components/Icons',
  component: SprkIcon,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkIcon'],
    info: markdownDocumentationLinkBuilder('icon'),
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

  return (<ul className="
    sbdocs-gallery-container
    sprk-o-Stack
    sprk-o-Stack--split@xs"></ul>);
};

gallery.story = {
  name: 'Gallery',
  parameters: {
    docs: { iframeHeight: 1000 },
  },
};


