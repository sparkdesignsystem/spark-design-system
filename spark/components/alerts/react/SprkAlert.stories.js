import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import SprkAlert from './SprkAlert';

export default {
  title: 'Components|Alerts',
  decorators: [withKnobs],
  parameters: {
    component: SprkAlert,
  },
};

export const defaultStory = () => (
  <>
  <SprkAlert
    onFocus={action('focus')}
    message={text('message','This is an Alert with no variant.')}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    iconNameInfo={text('iconNameInfo', 'bell')}
    onDismiss={action('onDismiss')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
  />
  <SprkAlert
    onFocus={action('focus')}
    message={text('message','This is an Alert with no variant.')}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameSuccess={text('iconNameSuccess', '') || undefined}
    iconNameInfo={text('iconNameInfo', 'bell')}
    onDismiss={action('onDismiss')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
  />
  </>
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
    variant="success"
    message={text('message','This is a success message.')}
    iconNameSuccess={text('iconNameSuccess', 'check-mark') || undefined}
    iconNameDismiss={text('iconNameDismiss', 'close') || undefined}
    onDismiss={action('onDismiss')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
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
    variant="info"
    message={text('Message', 'This is important information.')}
    iconNameInfo={text('iconNameInfo', '') || undefined}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    onDismiss={action('onDismiss')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
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
    variant="fail"
    message={text(
      'Message',
      'This is a failure message to alert that something was not successful.'
    )}
    iconNameFail={text('iconNameFail', '') || undefined}
    iconNameDismiss={text('iconNameDismiss', '') || undefined}
    onDismiss={action('onDismiss')}
    isVisible={boolean('isVisible', true)}
    isDismissible={boolean('isDismissible', true)}
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