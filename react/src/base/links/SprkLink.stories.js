import React from 'react';
import SprkLink from './SprkLink';
import SprkIcon from '../../components/icons/SprkIcon';
import SprkBox from '../../objects/box/SprkBox';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Link',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
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
  <SprkLink href="#nogo" idString="link-1" analyticsString="link-default">
    Default Link
  </SprkLink>
);

defaultStory.story = {
  name: 'Default',
};

export const simple = () => (
  <SprkLink
    variant="simple"
    analyticsString="link-simple"
    idString="link-2"
    href="#nogo"
  >
    Simple Link
  </SprkLink>
);

export const light = () => (
  <SprkBox style={{ backgroundColor: '#1c1b1a' }}>
    <SprkLink
      variant="light"
      analyticsString="link-light"
      idString="link-3"
      href="#nogo"
    >
      Light Link
    </SprkLink>
  </SprkBox>
);

export const iconWithTextLink = () => (
  <>
    <div>
      <SprkLink
        analyticsString="link-icon"
        href="#nogo"
        variant="has-icon"
        idString="link-3"
      >
        <SprkIcon
          additionalClasses="
          sprk-u-mrs
          sprk-c-Icon--stroke-current-color"
          iconName="left-arrow"
        />
        Back
      </SprkLink>
    </div>
    <div>
      <SprkLink
        analyticsString="link-icon"
        href="#nogo"
        variant="has-icon"
        idString="link-4"
      >
        Forward
        <SprkIcon
          additionalClasses="
          sprk-u-mls
          sprk-c-Icon--stroke-current-color"
          iconName="right-arrow"
        />
      </SprkLink>
    </div>
  </>
);

iconWithTextLink.story = {
  name: 'Icon With Text Link',
};

export const disabled = () => (
  <SprkLink
    analyticsString="link-disabled"
    variant="disabled"
    idString="link-5"
    href="#nogo"
  >
    Disabled Link
  </SprkLink>
);

export const disabledSimple = () => (
  <SprkLink
    analyticsString="link-disabled"
    variant="disabled"
    idString="link-6"
    href="#nogo"
    additionalClasses="sprk-b-Link--simple"
  >
    Disabled Link
  </SprkLink>
);

disabledSimple.story = {
  name: 'Disabled - Simple',
};

export const disabledLight = () => (
  <SprkBox style={{ backgroundColor: '#1c1b1a' }}>
    <SprkLink
      variant="disabled"
      analyticsString="link-light"
      idString="link-3"
      href="#nogo"
      additionalClasses="sprk-b-Link--light"
    >
      Disabled Link
    </SprkLink>
  </SprkBox>
);

disabledLight.story = {
  name: 'Disabled - Light',
};

export const disabledIconWithTextLink = () => (
  <>
    <div>
      <SprkLink
        analyticsString="link-icon"
        href="#nogo"
        variant="disabled"
        idString="link-7"
        additionalClasses="sprk-b-Link--has-icon"
      >
        <SprkIcon
          additionalClasses="
          sprk-u-mrs
          sprk-c-Icon--stroke-current-color"
          iconName="left-arrow"
        />
        Back
      </SprkLink>
    </div>
    <div>
      <SprkLink
        analyticsString="link-icon"
        href="#nogo"
        variant="disabled"
        idString="link-8"
        additionalClasses="sprk-b-Link--has-icon"
      >
        Forward
        <SprkIcon
          additionalClasses="
          sprk-u-mls
          sprk-c-Icon--stroke-current-color"
          iconName="right-arrow"
        />
      </SprkLink>
    </div>
  </>
);

disabledIconWithTextLink.story = {
  name: 'Disabled - Icon With Text Link',
};
