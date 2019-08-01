import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import SprkLink from './SprkLink';
import SprkIcon from '../../../components/icons/react/SprkIcon';

export default {
  title: 'Base|Links',
  decorators: [withKnobs],
  parameters: { component: SprkLink },
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
};
