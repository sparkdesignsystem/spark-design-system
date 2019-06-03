import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SprkAlertComponent } from './sprk-alert.component';
import { SprkIconComponent } from '../../icons/angular/sprk-icon.component';

storiesOf('Alert', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SprkAlertComponent, SprkIconComponent],
    }),
  )
 .add('info', () => ({
    template: `<sprk-alert
    alertType="info"
    idString="alert-info-1"
    analyticsString="object.action.event"
   >
     This is a success message.
   </sprk-alert>`
  }))
  .add('success', () => ({
    template: `<sprk-alert
    alertType="success"
    idString="alert-success-1"
    analyticsString="object.action.event"
   >
     This is a success message.
   </sprk-alert>`
  }))
  .add('fail', () => ({
    template: `<sprk-alert
    alertType="fail"
    idString="alert-fail-1"
    analyticsString="object.action.event"
   >
     This is a success message.
   </sprk-alert>`
  }));
