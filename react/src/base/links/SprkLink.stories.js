import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import SprkLink from './SprkLink';
import SprkIcon from '../../components/icons/SprkIcon';

export default {
  title: 'Base|Links',
  decorators: [withKnobs],
  component: SprkLink,
};

export const defaultStory = () => (
  <SprkLink
    onClick={action('click')}
    onFocus={action('focus')}
    element={text('element', 'a')}
    href={text('href', 'https://www.sparkdesignsystem.com')}
    idString={text('idString', 'link-1')}
    analyticsString={text('analyticsString', 'link-default')}
    additionalClasses={text('additionalClasses', '') || undefined}
  >
    {text('text', 'Base Link')}
  </SprkLink>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    info: `
Text links should take the user to a new place or change
the view the user is on. Links use the medium blue brand
color for their idle and hover states while using the dark
blue brand color for the visited state.

### Restrictions
- Do not use Spark Link classes on links that solely have images in them.
- Link text should be as meaningful as possible so users can
understand what the purpose of the link is.
- The data-id property is provided as a hook for
automated tools. If you have multiple instances of
the same variant of a component on the same page,
make sure each instance has a unique data-id
property ("link-1", "link-2", "link-3", etc).
    `,
  },
};

export const simple = () => (
  <SprkLink
    element={text('element', 'a')}
    onClick={action('click')}
    onFocus={action('focus')}
    variant="simple"
    analyticsString={text('analyticsString', 'link-simple')}
    idString={text('idString', 'link-2')}
    href={text('href', 'https://www.sparkdesignsystem.com')}
    additionalClasses={text('additionalClasses', '') || undefined}
  >
    {text('text', 'Simple Link')}
  </SprkLink>
);

simple.story = {
  name: 'Simple',
  parameters: {
    info: `
These are generally used when they are not part of a body of text.
For example, a list of secondary navigation links in
the footer or a cancel action next to a submit button.
    `,
  },
};

export const iconWithTextLink = () => (
  <SprkLink
    element={text('element', 'a')}
    onClick={action('click')}
    onFocus={action('focus')}
    analyticsString={text('analyticsString', 'link-has-icon')}
    href={text('href', 'https://www.sparkdesignsystem.com')}
    additionalClasses={text('additionalClasses', '') || undefined}
    variant="has-icon"
    idString={text('idString', 'link-3')}
  >
    <SprkIcon
      additionalClasses="
        sprk-c-Icon--l
        sprk-u-mrs
        sprk-c-Icon--stroke-current-color"
      iconName="communication"
    />
    {text('text', 'Message Us')}
  </SprkLink>
);

iconWithTextLink.story = {
  name: 'Icon With Text Link',
  parameters: {
    info: `
This is the link and icon style
to use when there is an icon
with description text. You may change the
size of the icon by adjusting the icon modifier class
that is on the svg element.
    `,
  },
};

export const disabled = () => (
  <SprkLink
    element={text('element', 'a')}
    onClick={action('click')}
    analyticsString={text('analyticsString', 'link-disabled')}
    variant="disabled"
    idString={text('idString', 'link-4')}
    href={text('href', 'https://www.sparkdesignsystem.com')}
    additionalClasses={text('additionalClasses', '') || undefined}
  >
    {text('text', 'Disabled Link')}
  </SprkLink>
);

disabled.story = {
  name: 'Disabled',
  parameters: {
    info: `
These have a muted color and are not clickable.
    `,
  },
};
