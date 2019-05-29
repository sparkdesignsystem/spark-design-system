import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../../../../.storybook/story-layout';
import { SprkIcon } from '@sparkdesignsystem/spark-react';

storiesOf('Icons', module)
  .add('amount-money', () => (
    <Box>
      <SprkIcon iconName="amount-money" additionalClasses="sprk-c-Icon--l" />
    </Box>
  ))
  .add('access', () => (
    <Box>
      <SprkIcon iconName="access" additionalClasses="sprk-c-Icon--l" />
    </Box>
  ))
  .add('apply-now', () => (
    <Box>
      <SprkIcon iconName="apply-now" additionalClasses="sprk-c-Icon--l" />
    </Box>
  ));