import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SprkAlert from './SprkAlert';

const stories = storiesOf('Components|Alert', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <SprkAlert
      message={text('Message', 'This is an alert.')}
      onDismiss={action('clicked')}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      idString={text('idString', 'alert-1')}
      analyticsString={text('analyticsString', 'alert-1')}
    />
  ))
  .add('success', () => (
    <SprkAlert
      message={text('Message', 'This is a success alert.')}
      onDismiss={action('clicked')}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      variant="success"
      idString={text('idString', 'alert-2')}
      analyticsString={text('analyticsString', 'alert-2')}
    />
  ))
  .add('info', () => (
    <SprkAlert
      message={text('Message', 'This is important information.')}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      variant="info"
      idString={text('idString', 'alert-3')}
      analyticsString={text('analyticsString', 'alert-3')}
    />
  ))
  .add('fail', () => (
    <SprkAlert
      message={text('Message', 'This is important information.')}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      variant="fail"
      idString={text('idString', 'alert-4')}
      analyticsString={text('analyticsString', 'alert-4')}
    />
  ));
