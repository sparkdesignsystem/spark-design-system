import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkAlert } from '@sparkdesignsystem/spark-react';
import { Box } from '../../../../.storybook/story-layout';

storiesOf('Alert', module)
  .add('default', () => (
    <Box>
      <SprkAlert
        message="This is an alert."
        onDismiss={action('clicked')}
        isVisible
        idString="alert-1"
        analyticsString="alert"
      />
    </Box>
  ))
  .add('success', () => (
    <Box>
      <SprkAlert
        message="This is a success alert."
        onDismiss={action('clicked')}
        isVisible
        variant="success"
        idString="alert-success-1"
        analyticsString="alert"
      />
    </Box>
  ))
  .add('info', () => (
    <Box>
      <SprkAlert
        message="This is important information."
        isVisible
        variant="info"
        idString="alert-info-1"
        analyticsString="alert"
      />
    </Box>
  ))
  .add('fail', () => (
    <Box>
      <SprkAlert
        message="This is important information."
        isVisible
        variant="fail"
        idString="alert-info-1"
        analyticsString="alert"
      />
    </Box>
  ));
