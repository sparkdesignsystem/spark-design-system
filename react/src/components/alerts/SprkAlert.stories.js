import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import SprkAlert from './SprkAlert';

export default {
  title: 'Components|Alert',
  decorators: [withKnobs],
  component: SprkAlert,
  parameters: {
    jest: ['SprkAlert'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/alert)
    `,
   },
};

export const defaultStory = () => (
  <SprkAlert
    onFocus={action('focus')}
    message={text('Message', 'This is an alert.')}
    additionalClasses={text('additionalClasses', '') || undefined}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    iconNameInfo={text('iconNameInfo', 'bell')}
    onDismiss={action('click')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
    idString={text('idString', 'alert-1')}
    analyticsString={text('analyticsString', 'alert-1')}
  />
);

export const info = () => (
  <SprkAlert
    onFocus={action('focus')}
    message={text('Message', 'This is important information.')}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameInfo={text('iconNameInfo', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    additionalClasses={text('additionalClasses', '') || undefined}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
    variant="info"
    onDismiss={action('click')}
    idString={text('idString', 'alert-3')}
    analyticsString={text('analyticsString', 'alert-3')}
  />
);

export const success = () => (
  <SprkAlert
    onFocus={action('focus')}
    message={text('Message', 'This is a success message.')}
    additionalClasses={text('additionalClasses', '') || undefined}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    iconNameInfo={text('iconNameInfo', '') || undefined}
    onDismiss={action('click')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
    variant="success"
    idString={text('idString', 'alert-2')}
    analyticsString={text('analyticsString', 'alert-2')}
  />
);

export const fail = () => (
  <SprkAlert
    onFocus={action('focus')}
    onDismiss={action('click')}
    message={text(
      'Message',
      'This is a failure message to alert that something was not successful.'
    )}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    iconNameInfo={text('iconNameInfo', '') || undefined}
    additionalClasses={text('additionalClasses', '') || undefined}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
    variant="fail"
    idString={text('idString', 'alert-4')}
    analyticsString={text('analyticsString', 'alert-4')}
  />
);

export const noDismissButton = () => (
  <SprkAlert
    onFocus={action('focus')}
    onDismiss={action('click')}
    message={text('Message', 'This success alert has no dismiss button.')}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    iconNameInfo={text('iconNameInfo', '') || undefined}
    additionalClasses={text('additionalClasses', '') || undefined}
    isVisible={boolean('isVisible', true)}
    isDismissible={false}
    variant="success"
    idString={text('idString', 'alert-5')}
    analyticsString={text('analyticsString', 'alert-5')}
  />
);