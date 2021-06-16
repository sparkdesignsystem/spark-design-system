import { SprkAlertModule } from './sprk-alert.module';
import { SprkAlertComponent } from './sprk-alert.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
// @ts-ignore prettier-ignore
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
export default {
  title: 'Components/Alert',
  component: SprkAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [SprkAlertModule],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      iframeHeight: 120,
      description: {
        component: `${markdownDocumentationLinkBuilder('alert')}
- \`role=”alert”\` is required so that
assistive technologies can inform
the user that their attention is needed.
        `,
      },
    },
  },
} as Meta;

export const info = () => ({
  template: `
    <sprk-alert
      variant="info"
      idString="alert-info-1"
      analyticsString="test"
    >
      This is important information.
    </sprk-alert>`,
});

info.parameters = {
  jest: ['sprk-alert.component'],
};

export const success = () => ({
  template: `
    <sprk-alert
      variant="success"
      idString="alert-success-1"
      analyticsString="test"
    >
      This is a success message.
    </sprk-alert>
  `,
});

success.parameters = {
  jest: ['sprk-alert.component'],
};

export const fail = () => ({
  template: `
    <sprk-alert
      variant="fail"
      idString="alert-fail-1"
      analyticsString="test"
    >
      This is a failure message to alert
      that something was not successful.
    </sprk-alert>
  `,
});

fail.parameters = {
  docs: { iframeHeight: 235 },
  jest: ['sprk-alert.component'],
};

export const noDismissButton = () => ({
  template: `
    <sprk-alert
      variant="success"
      idString="no-dismiss"
      analyticsString="test"
      [isDismissible]="false"
    >
      This Success Alert has no dismiss button.
    </sprk-alert>
  `,
});

noDismissButton.parameters = {
  jest: ['sprk-alert.component'],
};
