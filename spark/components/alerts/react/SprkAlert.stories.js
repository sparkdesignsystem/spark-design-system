import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '../../../../.storybook/story-layout';
import { SprkAlert } from '@sparkdesignsystem/spark-react';

storiesOf('Alert', module)
  .add('default', () => (
    <Box>
      <SprkAlert
        message="This is an alert."
        onDismiss={action('clicked')}
        isVisible={true}
        idString="alert-1"
        analyticsString="alert" />
    </Box>
  ))
  .add('success', () => (
    <Box>
      <SprkAlert
        message="This is a success alert."
        onDismiss={action('clicked')}
        isVisible={true}
        variant="success"
        idString="alert-success-1"
        analyticsString="alert" />
    </Box>
  ))
  .add('info', () => (
    <Box>
      <SprkAlert
        message="This is important information."
        isVisible={true}
        variant="info"
        idString="alert-info-1"
        analyticsString="alert" />
    </Box>
  ))
  .add('fail', () => (
    <Box>
      <SprkAlert
        message="This is important information."
        isVisible={true}
        variant="fail"
        idString="alert-info-1"
        analyticsString="alert" />
    </Box>
  ));