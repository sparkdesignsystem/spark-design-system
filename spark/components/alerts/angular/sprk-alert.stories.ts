import { SprkAlertComponent } from './sprk-alert.component';

export default {
  title: 'Components|Alerts'
}

export const successAlert = () => ({
  component: SprkAlertComponent,
  props: {
    alertType: 'success',
  },
});
