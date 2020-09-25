import React from 'react';
import SprkAlert from './SprkAlert';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Alert',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkAlert,
  parameters: {
    jest: ['SprkAlert'],
    info: `
${markdownDocumentationLinkBuilder('alert')}
- \`role=”alert”\` is required so that
assistive technologies can inform
the user that their attention is needed.
`,
  },
};

export const info = () => (
  <SprkAlert
    message="This is important information."
    variant="info"
    isVisible
    idString="alert-info"
    analyticsString="alert-info-analytics"
  />
);

export const success = () => (
  <SprkAlert
    message="This is a success message."
    variant="success"
    isVisible
    idString="alert-success"
    analyticsString="alert-success-analytics"
  />
);

export const fail = () => (
  <SprkAlert
    message="This is a failure message to alert that something was not successful."
    variant="fail"
    isVisible
    idString="alert-fail"
    analyticsString="alert-fail-analytics"
  />
);

export const noDismissButton = () => (
  <SprkAlert
    message="This Success Alert has no dismiss button."
    isDismissible={false}
    variant="success"
    isVisible
    idString="alert-no-dismiss"
    analyticsString="alert-no-dismiss-analytics"
  />
);
