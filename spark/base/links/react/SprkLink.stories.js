import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SprkLink from './SprkLink';
import SprkIcon from '../../../components/icons/react/SprkIcon';

const stories = storiesOf('Base|Links', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <SprkLink
      element={text('element', 'a')}
      href={text('href', 'https://www.sparkdesignsystem.com')}
      idString={text('idString', 'link-1')}
      analyticsString={text('analyticsString', 'link-default')}
      additionalClasses={text('additionalClasses', null)}
    >
      {text('text', 'Base Link')}
    </SprkLink>
  ))
  .add('simple', () => (
    <SprkLink
      element={text('element', 'a')}
      variant="simple"
      analyticsString={text('analyticsString', 'link-simple')}
      idString={text('idString', 'link-2')}
      href={text('href', 'https://www.sparkdesignsystem.com')}
      additionalClasses={text('additionalClasses', null)}
    >
      {text('text', 'Simple Link')}
    </SprkLink>
  ))
  .add('icon with text link', () => (
    <SprkLink
      element={text('element', 'a')}
      analyticsString={text('analyticsString', 'link-has-icon')}
      href={text('href', 'https://www.sparkdesignsystem.com')}
      additionalClasses={text('additionalClasses', null)}
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
  ))
  .add('disabled', () => (
    <SprkLink
      element={text('element', 'a')}
      analyticsString={text('analyticsString', 'link-disabled')}
      variant="disabled"
      idString={text('idString', 'link-4')}
      href={text('href', 'https://www.sparkdesignsystem.com')}
      additionalClasses={text('additionalClasses', null)}
    >
      {text('text', 'Disabled Link')}
    </SprkLink>
  ));
