import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAlertModule } from './sprk-alert.module';
import { SprkAlertComponent } from './sprk-alert.component';
import { markdownLinkBuilder } from '../../../../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Alert',
  component: SprkAlertComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: markdownLinkBuilder('alert'),
    docs: { iframeHeight: 120 },
  },
};

const modules = {
  imports: [SprkAlertModule],
};

export const info = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      alertType="info"
      idString="alert-info-1"
      analyticsString="test"
    >
      This is important information.
    </sprk-alert>
  `,
});

export const success = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      alertType="success"
      idString="alert-success-1"
      analyticsString="object.action.event"
    >
      This is a success message.
    </sprk-alert>
  `
});

export const fail = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      alertType="fail"
      idString="alert-fail-1"
      analyticsString="object.action.event"
    >
      This is a failure message to alert
      that something was not successful.
    </sprk-alert>
  `
});

fail.story = {
  parameters: {
    docs: { iframeHeight: 235 },
  },
}

export const withNoDismissButton = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-alert
      alertType="success"
      [dismissible]="false"
      idString="alert-success-2"
      analyticsString="object.action.event"
    >
      This success alert has no dismiss button.
    </sprk-alert>
  `
});
