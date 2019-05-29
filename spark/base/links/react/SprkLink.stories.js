import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';

import { Box } from '../../../../.storybook/story-layout';

storiesOf('Links', module)
  .add('default', () => (
    <Box>
      <SprkLink
        href="#"
        id="link-1"
      >
        Base Link
      </SprkLink>
    </Box>
  ))
  .add('simple', () => (
    <Box>
      <SprkLink
        variant="simple"
        idString="link-2"
        href="#"
      >
        Simple Link
      </SprkLink>
    </Box>
  ))
  .add('icon with text link', () => (
    <Box>
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
    </Box>
  ))
  .add('disabled', () => (
    <Box>
      <SprkLink
        variant="disabled"
        idString="link-3"
        href="#"
      >
        Disabled Link
      </SprkLink>
    </Box>
  ));
