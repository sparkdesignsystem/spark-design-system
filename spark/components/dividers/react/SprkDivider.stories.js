import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../../../.storybook/story-layout';
import { SprkDivider } from '@sparkdesignsystem/spark-react';

storiesOf('Divider', module)
  .add('as a span element', () => (
    <Box>
      <SprkDivider
        idString="divider-1"
        element="span"
      />
    </Box>
  ))
  .add('as a hr element', () => (
    <Box>
      <SprkDivider
        idString="divider-2"
        element="hr"
      />
    </Box>
  ));