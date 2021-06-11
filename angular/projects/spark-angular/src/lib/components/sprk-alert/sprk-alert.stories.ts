import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAlertModule } from './sprk-alert.module';
import { SprkAlertComponent } from './sprk-alert.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
export default {
  title: 'Components/Alert',
  component: SprkAlertComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    docs: {
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
};

const modules = {
  imports: [SprkAlertModule],
};

export const info = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      variant="info"
      idString="alert-info-1"
      analyticsString="test"
    >
      This is important information.
    </sprk-alert>
  `,
});

info.parameters = {
  jest: ['sprk-alert.component'],
};

export const success = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      variant="success"
      idString="alert-success-1"
      analyticsString="object.action.event"
    >
      This is a success message.
    </sprk-alert>
  `,
});

success.parameters = {
  jest: ['sprk-alert.component'],
};

export const fail = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      variant="fail"
      idString="alert-fail-1"
      analyticsString="object.action.event"
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
  moduleMetadata: modules,
  template: `
    <sprk-alert
      variant="success"
      [isDismissible]="false"
      idString="alert-success-2"
      analyticsString="object.action.event"
    >
      This Success Alert has no dismiss button.
    </sprk-alert>
  `,
});

noDismissButton.parameters = {
  jest: ['sprk-alert.component'],
};
