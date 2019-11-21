import React from 'react';
import SprkAlert from './SprkAlert';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Alert',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkAlert,
  parameters: {
    jest: ['SprkAlert'],
    info: markdownLinkBuilder('alert'),
   },
};

export const info = () => (
  <SprkAlert
    message="This is important information."
    variant="info"
    isVisible={true}
    idString="alert-info"
    analyticsString="alert-info-analytics"
  />
);

export const success = () => (
  <SprkAlert
    message="This is a success message."
    variant="success"
    isVisible={true}
    idString="alert-success"
    analyticsString="alert-success-analytics"
  />
);

export const fail = () => (
  <SprkAlert
    message="This is a failure message to alert that something was not successful."
    variant="fail"
    isVisible={true}
    idString="alert-fail"
    analyticsString="alert-fail-analytics"
  />
);

export const noDismissButton = () => (
  <SprkAlert
    message="This Success Alert has no dismiss button."
    isDismissible={false}
    variant="success"
    isVisible={true}
    idString="alert-no-dismiss"
    analyticsString="alert-no-dismiss-analytics"
  />
);