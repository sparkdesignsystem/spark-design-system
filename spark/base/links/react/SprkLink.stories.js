import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';
storiesOf('Links', module)
  .add('default', () => (
    <SprkLink
      href="#"
      id="link-1"
    >
      Base Link
    </SprkLink>
  ))
  .add('simple', () => (
    <SprkLink
      variant="simple"
      idString="link-2"
      href="#"
    >
      Simple Link
    </SprkLink>
  ))
  .add('icon with text link', () => (
    <SprkLink
      variant="has-icon"
      idString="link-4"
    >
      <SprkIcon
        additionalClasses="sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--stroke-current-color"
        iconName="communication"
      />
        Message Us
    </SprkLink>
  ))
  .add('disabled', () => (
    <SprkLink
      variant="disabled"
      idString="link-3"
      href="#"
    >
      Disabled Link
    </SprkLink>
  ));
