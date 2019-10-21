import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import SprkAlert from './SprkAlert';

export default {
  title: 'Components|Alerts',
  decorators: [withKnobs],
  component: SprkAlert,
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

defaultStory.story = {
  name: 'Default',
  parameters: {
    info: `
An Alert is a way to notify users without interrupting their actions.
Alerts are to appear at the top of the page. They consist of an icon
(in either a success, info, or error state), an area for text, and an
optional dismiss button.

### Information
- May have timed visibility (10 seconds) and/or be
dismissed by the user by clicking the "x" icon.
- If the content wraps to a new line the icon on
the left should remain vertically centered, but
the dismiss icon should remain in place at the top right.

### Restrictions
- Should fill the width of the viewport.
- The content should be kept short and concise.
- role="alert" is required so that assistive
technology can inform users their attention is needed.
- The data-id property is provided as a hook for
automated tools. If you have multiple
instances of the same variant of a
component on the same page, make sure
each instance has a unique data-id property
("alert-info-1", "alert-info-2", "alert-info-3", etc).
    `,
  },
};

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

success.story = {
  name: 'Success',
  parameters: {
    info: `
These provide positive feedback to a user's action.
Success Alerts have a checkmark icon.
    `,
  },
};

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

info.story = {
  name: 'Info',
  parameters: {
    info: `
Shows information that is important for a
client to read. Information Alerts have a Bell icon.
    `,
  },
};

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

fail.story = {
  name: 'Fail',
  parameters: {
    info: `
These provide negative feedback to a
user's action. Fail Alerts have an
exclamation mark icon.
    `,
  },
};

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
    isDismissible={boolean('isDismissible', undefined)}
    variant="success"
    idString={text('idString', 'alert-5')}
    analyticsString={text('analyticsString', 'alert-5')}
  />
);

noDismissButton.story = {
  name: 'No Dismiss Button',
  parameters: {
    info: `
Alerts can be used without the dismiss button.
Here is a Success Alert that is not able to be dismissed.
    `,
  },
};