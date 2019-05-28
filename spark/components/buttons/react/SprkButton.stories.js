import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkButton } from '@sparkdesignsystem/spark-react';
import { Box } from '../../../../.storybook/story-layout';

storiesOf('Button', module)
  .add('primary', () => (
    <Box>
      <SprkButton onClick={action('button clicked')}>Button</SprkButton>
    </Box>
  ))
  .add('secondary', () => (
    <Box>
      <SprkButton variant="secondary">Button</SprkButton>
    </Box>
  ))
  .add('tertiary', () => (
    <Box>
      <SprkButton variant="tertiary">Button</SprkButton>
    </Box>
  ))
  .add('disabled', () => (
    <Box>
      <SprkButton disabled>Button</SprkButton>
    </Box>
  ))
  .add('with spinner', () => (
    <Box>
      <SprkButton loading>Button</SprkButton>
    </Box>
  ));
