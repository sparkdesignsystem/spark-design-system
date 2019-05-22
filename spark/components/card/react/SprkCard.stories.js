import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../../../.storybook/story-layout';
import { SprkCard } from '@sparkdesignsystem/spark-react';

storiesOf('Card', module)
  .add('test', () => (
    <Box>
      <SprkCard
        idString="card-1"
        additionalContentClasses="
          sprk-o-Stack
          sprk-o-Stack--large"
        >
        test
      </SprkCard>
    </Box>
  ));