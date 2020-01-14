import React from 'react';
import SprkLink from './SprkLink';
import SprkIcon from '../../components/icons/SprkIcon';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkLink,
  parameters: {
    jest: ['SprkLink'],
    info: `
${markdownDocumentationLinkBuilder('link')}
- Spark Link styles are for text-based links.
Images that are links should not use Spark classes. 
`,
  },
};

export const defaultStory = () => (
  <SprkLink
    element="a"
    href="#nogo"
    idString="link-1"
    analyticsString="link-default"
  >
    Base Link
  </SprkLink>
);

defaultStory.story = {
  name: 'Default',
};

export const simple = () => (
  <SprkLink
    element="a"
    variant="simple"
    analyticsString="link-simple"
    idString="link-2"
    href="#nogo"
  >
    Simple Link
  </SprkLink>
);

export const iconWithTextLink = () => (
  <SprkLink
    element="a"
    analyticsString="link-icon"
    href="#nogo"
    variant="has-icon"
    idString="link-3"
  >
    <SprkIcon
      additionalClasses="
        sprk-c-Icon--l
        sprk-u-mrs
        sprk-c-Icon--stroke-current-color"
      iconName="communication"
    />
    Message Us
  </SprkLink>
);

iconWithTextLink.story = {
  name: 'Icon With Text Link',
};

export const disabled = () => (
  <SprkLink
    element="a"
    analyticsString="link-disabled"
    variant="disabled"
    idString="link-4"
    href="#nogo"
  >
    Disabled Link
  </SprkLink>
);
