import { SprkAlertModule } from './sprk-alert.module';

export default { title: 'Components|Alerts' };

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
