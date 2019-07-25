import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SprkAlert from './SprkAlert';

const stories = storiesOf('Components|Alert', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <SprkAlert
      message={text('Message', 'This is an alert.')}
      additionalClasses={text('additionalClasses', null)}
      iconNameDismiss={text('iconNameDismiss', null)}
      iconNameFail={text('iconNameFail', null)}
      iconNameSuccess={text('iconNameSuccess', null)}
      iconNameInfo={text('iconNameInfo', 'bell')}
      onDismiss={action('clicked')}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      idString={text('idString', 'alert-1')}
      analyticsString={text('analyticsString', 'alert-1')}
    />
  ))
  .add('success', () => (
    <SprkAlert
      message={text('Message', 'This is a success message.')}
      additionalClasses={text('additionalClasses', null)}
      iconNameDismiss={text('iconNameDismiss', null)}
      iconNameFail={text('iconNameFail', null)}
      iconNameSuccess={text('iconNameSuccess', null)}
      iconNameInfo={text('iconNameInfo', null)}
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
      iconNameDismiss={text('iconNameDismiss', null)}
      iconNameFail={text('iconNameFail', null)}
      iconNameInfo={text('iconNameInfo', null)}
      iconNameSuccess={text('iconNameSuccess', null)}
      additionalClasses={text('additionalClasses', null)}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      variant="info"
      idString={text('idString', 'alert-3')}
      analyticsString={text('analyticsString', 'alert-3')}
    />
  ))
  .add('fail', () => (
    <SprkAlert
      message={text('Message', 'This is a failure message to alert that something was not successful.')}
      iconNameDismiss={text('iconNameDismiss', null)}
      iconNameFail={text('iconNameFail', null)}
      iconNameSuccess={text('iconNameSuccess', null)}
      iconNameInfo={text('iconNameInfo', null)}
      additionalClasses={text('additionalClasses', null)}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', true)}
      variant="fail"
      idString={text('idString', 'alert-4')}
      analyticsString={text('analyticsString', 'alert-4')}
    />
  ))
  .add('with no dismiss button', () => (
    <SprkAlert
      message={text('Message', 'This success alert has no dismiss button.')}
      iconNameDismiss={text('iconNameDismiss', null)}
      iconNameFail={text('iconNameFail', null)}
      iconNameSuccess={text('iconNameSuccess', null)}
      iconNameInfo={text('iconNameInfo', null)}
      additionalClasses={text('additionalClasses', null)}
      isVisible={boolean('isVisible', true)}
      isDismissible={boolean('isDismissible', false)}
      variant="success"
      idString={text('idString', 'alert-4')}
      analyticsString={text('analyticsString', 'alert-4')}
    />
  ));
