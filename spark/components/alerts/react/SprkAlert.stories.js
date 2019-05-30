import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkAlert } from '@sparkdesignsystem/spark-react';
storiesOf('Alert', module)
  .add('default', () => (
    <SprkAlert
      message="This is an alert."
      onDismiss={action('clicked')}
      isVisible
      idString="alert-1"
      analyticsString="alert"
    />
  ))
  .add('success', () => (
    <SprkAlert
      message="This is a success alert."
      onDismiss={action('clicked')}
      isVisible
      variant="success"
      idString="alert-success-1"
      analyticsString="alert"
    />
  ))
  .add('info', () => (
    <SprkAlert
      message="This is important information."
      isVisible
      variant="info"
      idString="alert-info-1"
      analyticsString="alert"
    />
  ))
  .add('fail', () => (
    <SprkAlert
      message="This is important information."
      isVisible
      variant="fail"
      idString="alert-info-1"
      analyticsString="alert"
    />
  ));
